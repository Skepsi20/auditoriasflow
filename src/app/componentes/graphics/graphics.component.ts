import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { FormsService } from 'src/app/services/form/forms.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements OnInit {
  filter = {
    year:2022,
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

  // Charts
  chart:any;

  constructor(
    private formsService: FormsService,
    private spinnerService: SpinnerService
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
    this.listadoDeResultados = false;
    this.filtradoFail = false;
    this.searchReady = true;
    const request = {
      id: this.filter.form.id,
      year: this.filter.year
    }
    this.formsService.getFormByYear(request)
    .subscribe(
      (success)=>{
        this.spinnerService.hide();
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
    if(this.arregloDeEventos.length){
      this.botonBuscarGraficos = true;
    }else{
      this.botonBuscarGraficos = false;
    }
  }

  preparacionDeGraficos(){
    const request = {
      formId: this.filter.form.id,
      year: this.filter.year,
      resultsIds: this.arregloDeEventos
    }
    this.formsService.getFormByYearandFiltered(request)
    .subscribe(
      (success)=>{
        console.table(success)
        var arregloDatos = success;
        var arregloPreguntas = [];
        var arregloPorcentaje = [];
        var arregloComentarios = []
        var arregloNo = [];
        var total = 0;
        var porcentaje = 0;
        arregloDatos.sort(((a, b) => b.negativeCounter - a.negativeCounter))
        for (let index = 0; index < arregloDatos.length; index++) {
          console.log(arregloDatos[index])
          total = arregloDatos[index].negativeCounter + total;
          arregloPreguntas.push(arregloDatos[index].questionDescription)
          arregloNo.push(arregloDatos[index].negativeCounter)
          for (let j = 0; j < arregloDatos[index].details.length; j++) {
            arregloComentarios[j] = (arregloDatos[index].details[j].employee.firstName +' '+ arregloDatos[index].details[j].employee.lastName +': '+ arregloDatos[index].details[j].comments + ' / ' + arregloDatos[index].details[j].event.name)
          }
          this.commentsArray[index] = {
            question: arregloDatos[index].questionDescription,
            respuestas: arregloComentarios
          }
          arregloComentarios = [];
        }
        for (let index = 0; index < arregloDatos.length; index++) {
          porcentaje = ((arregloDatos[index].negativeCounter/total)+ porcentaje);
          arregloPorcentaje.push(porcentaje*100)
        }
        console.log(arregloPorcentaje)
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
            }
          }
        })
      },(error)=>{
        console.log(error)
      }
    )
    this.mostrarDetallesDeResultados = true
  }

}


