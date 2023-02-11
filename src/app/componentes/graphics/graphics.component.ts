import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { FormsService } from 'src/app/services/form/forms.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { Chart, registerables } from 'chart.js';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageServiceService } from 'src/app/services/image-service.service';
import myLocaleEs from '@angular/common/locales/es'
import {registerLocaleData} from '@angular/common';

registerLocaleData(myLocaleEs);

@Component({
  selector: 'graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {
  filter = {
    year:2023,
    form:{
      code:'',
      name:'',
      id: ''
    },
  }

  listadoDeResultados: boolean = false;
  filtradoFail = false;
  mostrarDetallesDeResultados = false;
  botonBuscarGraficos = false;
  listadoResultados: Array<any> = [];
  filtradoParaGraficos: Array<any> = [];
  commentsArray:Array<any> = [];
  formReady = false;
  forms: Array<any> = [];
  searchReady = false;
  arregloDeEventos: Array<any> = [];
  arregloImagenes: Array<any> = [];
  todasLasImagenes: Array<any> = [];
  encargados: Array<any> = [];
  spinnerRunning: boolean = false;
  selectAll: boolean = false;
  request:any 
  pdfReport:string = '';
  csvReport:string = '';

  formsByModule: Array<any> = [];
  gembaSelected = false;
  auditoriaSeleccionada = false;
  modulo = '';
  modules: Array<any> = ['BBS','Gemba Walk'];
  gembaAreas = ['GasPac','Pac Seal','Planta 52','Sistemas auxiliares'];
  areaGemba = '';

  // Charts
  chart:any;
  barChart: any;
  acumuladoSi:Array<any> = [];
  acumuladoNo:Array<any> = [];
  labels:Array<any> = [];
  graficsReady = false;
  preguntasOrdenadas: Array<any> = [];

  constructor(
    private formsService: FormsService,
    private spinnerService: SpinnerService,
    private _sanitizer: DomSanitizer,
    private imageService: ImageServiceService

  ) { }

  ngOnInit(): void {
    this.formsService.getForm()
    .subscribe(
      (success)=>{
        this.forms = success;
      },(error)=>{
        console.log(error)
      }
    )
  }

  checkModule(){ 
    this.formsByModule = [];
    if(this.modulo == 'BBS'){
      this.auditoriaSeleccionada = true;
      this.gembaSelected = false;
      for (let index = 0; index < this.forms.length; index++) {
        if(this.forms[index].module == 'BBS'){
          this.formsByModule.push(this.forms[index])
        }
      }
      console.log("Formularios de bbs",this.forms)
    }else if(this.modulo == 'Gemba Walk'){
      this.auditoriaSeleccionada = false;
      this.gembaSelected = true;
    }
  }

  checkGembaArea(){
    this.formsByModule = [];
    this.auditoriaSeleccionada = true;
    for (let index = 0; index < this.forms.length; index++) {
      if(this.forms[index].area == 'GasPac' && this.areaGemba == 'GasPac'){
        this.formsByModule.push(this.forms[index])
      }
      if(this.forms[index].area == 'Pac Seal' && this.areaGemba == 'Pac Seal'){
        this.formsByModule.push(this.forms[index])
      }
      if(this.forms[index].area == 'Planta 52' && this.areaGemba == 'Planta 52'){
        this.formsByModule.push(this.forms[index])
      }
      if(this.forms[index].area == 'Sistemas auxiliares' && this.areaGemba == 'Sistemas auxiliares'){
        this.formsByModule.push(this.forms[index])
      }
    }    
  }

  checkForm(){
    if(this.filter.form.name != '' && this.filter.year >= 2022){
      this.formReady = true;
    }
    else{
      this.formReady = false;
    }
  }

  formSearch(){
    this.spinnerService.show();
    this.spinnerRunning = true;
    this.listadoResultados = [];
    this.listadoDeResultados = false;
    this.filtradoFail = false;
    this.searchReady = true;
    this.graficsReady = false;
    this.mostrarDetallesDeResultados = false;
    const request = {
      id: this.filter.form.id,
      year: this.filter.year
    }
    this.formsService.getFormByYear(request)
    .subscribe(
      (success)=>{
        this.spinnerService.hide();
        this.spinnerRunning = false;
        if(!success.length){
          this.filtradoFail = true;
        }else{
          this.listadoDeResultados = true;
        }
        this.listadoResultados = success
      },(error)=>{
        console.log(error)
      }
    )
  }

  agregarAFiltrado(event:any, resultId: any){
    console.log(event, resultId)
    if(event.target.checked == true && resultId == 'all'){
      this.selectAll = true;
      for (let index = 0; index < this.listadoResultados.length; index++) {
        this.arregloDeEventos.push(this.listadoResultados[index].id)        
      }
    }
    else if(event.target.checked == false && resultId == 'all'){
      this.selectAll = false;
      this.arregloDeEventos = []
    }


    else{
      if(event.target.checked == true){
        this.arregloDeEventos.push(resultId);
      }
      else if(event.target.checked == false){
        for (let index = 0; index < this.arregloDeEventos.length; index++) {
          if(this.arregloDeEventos[index] == resultId){
            this.arregloDeEventos.splice(index,1)
          }
        }
      }
    }

    
    if(this.arregloDeEventos.length){
      this.botonBuscarGraficos = true;
    }else{
      this.botonBuscarGraficos = false;
    }
  }

  preparacionDeGraficos(){
    this.request = {
      formId: this.filter.form.id,
      year: this.filter.year,
      resultsIds: this.arregloDeEventos
    }


    var idsList: Array<any> = []
    for (let index = 0; index < this.request.resultsIds.length ; index++) {
        idsList.push(this.request.resultsIds[index])
    } 
    this.pdfReport = 'https://flowservetlaxauditorias.azurewebsites.net/api/reports/pdf?formId='+this.request.formId+'&year='+this.request.year+'&idsList='+idsList 
    this.csvReport = 'https://flowservetlaxauditorias.azurewebsites.net/api/reports/excel?formId='+this.request.formId+'&year='+this.request.year+'&idsList='+idsList 

    this.formsService.getFormByYearandFiltered(this.request)
    .subscribe(
      (success)=>{

        console.log("DATOS DEL SERVICIO",success)
        this.preguntasOrdenadas = [...success];
        this.preguntasOrdenadas.sort(((a, b) => a.index - b.index))
        
        console.log("DATOS DEL SERVICIO ORDENADOS",this.preguntasOrdenadas)





        for (let index = 0; index < success.length; index++) {
          var item = success[index];
          item.index = index+1;
        }
        //this.spinnerService.show();
        
        this.encargados = [];
        this.labels = [];
        this.commentsArray = [];
        this.chart = [];
        this.barChart = [];
        this.acumuladoSi = [];
        this.acumuladoNo = [];
        this.arregloImagenes = [];

        var arregloDatos = [];
        arregloDatos = success;
        var arregloPreguntas = [];
        var arregloPorcentaje = [];
        var arregloComentarios = [];
        var arregloNo = [];
        var total = 0;
        var porcentaje = 0;
        var image64:Array<any> = [];
        arregloDatos.sort(((a, b) => b.negativeCounter - a.negativeCounter))

        //Acumulado de datos SI Y NO 
        for (let index = 0; index < this.preguntasOrdenadas.length-1; index++) {
          var item = this.preguntasOrdenadas[index];
          this.acumuladoSi.push(this.preguntasOrdenadas[index].positiveCounter)
          this.acumuladoNo.push(this.preguntasOrdenadas[index].negativeCounter)
          this.labels.push("Pregunta: "+(item.index))
        }        

              this.todasLasImagenes = [];
              //METER TODAS LAS IMAGENES EN UN ARREGLO
              for (let index = 0; index < arregloDatos.length; index++) {
                for (let j = 0; j < arregloDatos[index].details.length; j++) {

                  if(arregloDatos[index].details[j].images.length){
                    console.log("IMAGENES EN EL FOR ",arregloDatos[index].details[j])
                  }

                  if(arregloDatos[index].details[j].images.length){
                    for (let k = 0; k < arregloDatos[index].details[j].images.length; k++) {
                      this.todasLasImagenes.push({
                        image:arregloDatos[index].details[j].images[k],
                        auditor: arregloDatos[index].details[j].employee.firstName +' '+ arregloDatos[index].details[j].employee.lastName,
                        auditoria: arregloDatos[index].details[j].event.name,
                        fecha:  arregloDatos[index].details[j].creationDateTime,
                        descripcion: arregloDatos[index].questionDescription,
                        comentarios: arregloDatos[index].details[j].comments,
                      });
                    }                    
                  }
    
                }                
              }

              console.log("TODAS LAS IMAGENES",this.todasLasImagenes)
        for (let index = 0; index < arregloDatos.length; index++) {


          console.log("Arreglo de datos details",arregloDatos[index].details)

          if(index == arregloDatos.length-1){
            for (let i = 0; i < arregloDatos[index].details.length; i++) {
              image64 = [];
              const imageDefault = this.imageService.getImage()
              var imageToShow: any;
              if(arregloDatos[index].details[i].employee.profileImage == null){
                imageToShow = imageDefault
              }else{
                imageToShow = arregloDatos[index].details[i].employee.profileImage   
              }
              this.encargados.push(
                {
                  name: arregloDatos[index].details[i].employee.firstName + ' ' + arregloDatos[index].details[i].employee.lastName,
                  image: imageToShow,
                  event: arregloDatos[index].details[i].event.name,
                  date: arregloDatos[index].details[i].creationDateTime
                }
              )
              

              /* image64.push(arregloDatos[index].details[i].images);
              console.log("IMAGEN 64",i,'INDEX',image64.length)
              if(image64[0].length > 0){
                this.arregloImagenes.push({
                  image: image64,
                  comments: arregloDatos[index].details[i].comments,
                  form: arregloDatos[index].details[i].event.name,
                  employee: arregloDatos[index].details[i].employee.firstName +' '+ arregloDatos[index].details[i].employee.lastName,
                  period: arregloDatos[index].details[i].creationDateTime
                })         
              } */
            }
          }

          console.log("ARREGLO DE IMAGENES ", this.arregloImagenes)

          total = arregloDatos[index].negativeCounter + total;
          arregloPreguntas.push(arregloDatos[index].questionDescription)
          arregloNo.push(arregloDatos[index].negativeCounter)
          for (let j = 0; j < arregloDatos[index].details.length; j++) {
            if(arregloDatos[index].details[j].comments.length){
              arregloComentarios[j] = (arregloDatos[index].details[j].employee.firstName +' '+ arregloDatos[index].details[j].employee.lastName +': '+ arregloDatos[index].details[j].comments + ' / ' + arregloDatos[index].details[j].event.name)
            }else{
              arregloComentarios[j] = ''
            }
          }
          this.commentsArray[index] = {
            question: this.preguntasOrdenadas[index].questionDescription,
            respuestas: arregloComentarios,
            image: this.preguntasOrdenadas[index].details[0].image
          }
          arregloComentarios = [];
        }

        for (let index = 0; index < arregloDatos.length; index++) {
          if(total != 0){
          porcentaje = ((arregloDatos[index].negativeCounter/total)+ porcentaje);
          }
          else{
            porcentaje = 0;
          }
          arregloPorcentaje.push(porcentaje*100)
        }


        arregloNo.pop()
        arregloPreguntas.pop()
        arregloPorcentaje.pop()

        this.barChart = document.getElementById('barChart');
        Chart.register(...registerables);
        new Chart(this.barChart,{
          type:'bar',
          data:{
            labels: this.labels,
            datasets: [
              {
                label: 'Respuestas si',
                data: this.acumuladoSi,
                borderColor: 'rgb(141,223,0)',
                backgroundColor: 'rgba(141,223,0, 0.7)',
              },
              {
                label: 'Respuestas no',
                data: this.acumuladoNo,
                borderColor: 'rgb(45,75,122)',
                backgroundColor: 'rgba(255,12,12, 0.7)',
              }
            ]
          },
          options:{
            scales: {
              yAxes: {
                ticks: {
                  stepSize: 1,
                }
              },
            },
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Total de respuestas'
              }
            }
          }
        })
        this.chart = document.getElementById('my_first_chart');
        Chart.register(...registerables);
        new Chart(this.chart,{
          type:'line',
          data:{
            labels: arregloPreguntas,
            datasets:[{
              type: 'bar',
              label: 'Cantidad de incidencias',
              data: arregloNo,
              backgroundColor: 'rgba(226, 35, 26, 0.5)',
              borderColor: 'rgb(226, 35, 26)',
              borderRadius: 5,
              yAxisID: 'y'
            },{
              type: 'line',
              label: 'Porcentaje',
              data: arregloPorcentaje,
              tension:0.2,
              borderColor: 'rgb(45,75,122)',
              yAxisID: 'percentage'
            }]
          },
          options:{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                type:'linear',
                position:'left',
                max: total
              },
              percentage: {
                beginAtZero: true,
                type:'linear',
                position:'right',
                grid: {
                  drawOnChartArea: false
                },
                ticks:{
                  callback: function(value, index, values){
                    return `${value} %`
                  }
                }
              },x: {
                ticks: {
                    display: false
                },
                grid: {
                  drawBorder: false
                }
            }
            },
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Diagrama de pareto'
              }
            }
          }
        })
        this.arregloDeEventos = [];
        this.botonBuscarGraficos = false;
        //this.spinnerService.hide();
      },(error)=>{
        console.log(error)
      }
    )
    this.graficsReady = true;
    this.mostrarDetallesDeResultados = true
  }

  

  onSelect(data:any): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
