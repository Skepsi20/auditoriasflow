import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ChartType, Chart, registerables } from 'chart.js';
import { IncidenciasService } from 'src/app/services/incidencias/incidencias.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
export interface PeriodicElement {
  status: number;
  modulo: string;
  area: string;
  total:number;
}

export interface dataElement {
  status: string;
  fecha1: string;
  fecha2: string;
  descripcion: string;
  comentarios:string;
  notas: string;
  solucion: string;
  imagenes: string;
  owner: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

const DATA_MODULE:dataElement[] = [];

@Component({
  selector: 'incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {
  modules: Array<any> = ['Todas','BBS','Gemba Walk'];
  areas : Array<any> = ['Todas','Gas pac','Pac Seal','Planta 52','Sistemas Auxiliares'];
  area = '';
  modulo = '';
  areaDom = false;
  showInfo = false;
  chart: any;
  chart1: any;
  chart2: any;
  filtro = '';
  displayedColumns: string[] = ['status', 'modulo','area','total'];
  displayedColumns2: string[] = ['status','acciones', 'fecha1', 'descripcion', 'owner', 'notas', 'solucion', 'imagenes'];
  data : any;
  data1 : any;
  data2 : any;
  dataSource = ELEMENT_DATA;
  moduleSource = DATA_MODULE;
  grafica:any;
  grafica1:any;
  grafica2:any;
  resultadoFiltado:any;
  pendienteCounter = 30;
  pendienteCounter1 = 10;
  pendienteCounter2  = 20;
  procesoCounter = 0;
  procesoCounter1 = 0;
  procesoCounter2 = 0;
  corregidoCounter = 0;
  corregidoCounter1 = 0;
  corregidoCounter2 = 0;
  images: Array<any> = [];
  imgSrc:any;
  previsualizacion = '';
  solucionInput = '';
  notasInput = '';
  ownerInput = '';



  constructor(
    private readonly incidentesService : IncidenciasService,
    private readonly spinnerService: SpinnerService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {

  }

  cargar(){    
    this.spinnerService.show();

    this.pendienteCounter = 0;
    this.procesoCounter = 0;
    this.corregidoCounter = 0;
    this.pendienteCounter1 = 0;
    this.procesoCounter1 = 0;
    this.corregidoCounter1 = 0;
    this.pendienteCounter2 = 0;
    this.procesoCounter2 = 0;
    this.corregidoCounter2 = 0;

    if(this.grafica){
      this.grafica.destroy();
    }
    if(this.grafica1){
      this.grafica1.destroy();
    }
    if(this.grafica2){
      this.grafica2.destroy();
    }

    this.chart = document.getElementById('dChart');
    this.chart1 = document.getElementById('dChart1');
    this.chart2 = document.getElementById('dChart2');

    if(this.modulo!= 'Todas'){      
      if(this.area == "Todas"){
        this.area = '';
      }
      if(this.area == "Gas pac"){
        this.area = 'GasPac';
      }
      if(this.area == "Pac Seal"){
        this.area = 'Pac Seal';
      }
      if(this.area == "Planta 52"){
        this.area = 'Planta 52';
      }
      if(this.area == "Sistemas Auxiliares"){
        this.area = 'Sistema auxiliares';
      }
      this.incidentesService.getIncidents(this.modulo, this.area)
      .subscribe(
        (success)=>{
          this.resultadoFiltado = success
          console.log(success)
          for (let index = 0; index < this.resultadoFiltado.length; index++) {
            this.moduleSource.push(
              {
                status: this.resultadoFiltado[index].status,
                fecha1: this.resultadoFiltado[index].creationDatetime,
                fecha2: this.resultadoFiltado[index].resolutionDatetime,
                descripcion: this.resultadoFiltado[index].question.description,
                comentarios: this.resultadoFiltado[index].question.comments,
                notas: this.resultadoFiltado[index].notes,
                solucion: this.resultadoFiltado[index].resolutionNotes,
                imagenes: this.resultadoFiltado[index].question.images,
                owner: this.resultadoFiltado[index].owner
              }
            )
            this.images.push(this.resultadoFiltado[index].question.images)

            if(this.resultadoFiltado[index].status == 'Pendiente'){
              this.pendienteCounter++;
            }
            else if(this.resultadoFiltado[index].status == 'En proceso'){
              this.procesoCounter++;
            }
            else if(this.resultadoFiltado[index].status == 'Terminado'){
              this.corregidoCounter++;
            }             
          }
          this.generacionGraficas();          
        },(error)=>{
          console.log(error)
        }
      )   
    }else{       
      console.log("Entre a TODAS")
      this.incidentesService.getAllIncidents()
      .subscribe(
        (success)=>{
          console.log(success)
          /* position: 1, name: 'Gemba Walk', total: 0 */
          for (let index = 0; index < success.length; index++) {
            this.dataSource.push({
              status: success[index].status, 
              modulo: success[index].module,
              area: success[index].area,
              total: success[index].count,
            })

            if(success[index].status == 'Pendiente' && success[index].module == 'BBS'){
              this.pendienteCounter1 = success[index].count;
            }else if(success[index].status == 'Pendiente' && success[index].module == 'Gemba Walk'){
              this.pendienteCounter2 = success[index].count;
            }

            if(success[index].status == 'En proceso' && success[index].module == 'BBS'){
              this.procesoCounter1 = success[index].count;
            }else if(success[index].status == 'En proceso' && success[index].module == 'Gemba Walk'){
              this.procesoCounter2 = success[index].count;
            }

            if(success[index].status == 'Terminado' && success[index].module == 'BBS'){
              this.corregidoCounter1 = success[index].count;
            }else if(success[index].status == 'Terminado' && success[index].module == 'Gemba Walk'){
              this.corregidoCounter2 = success[index].count;
            }
          }
          this.dataSource.sort((a:any, b:any) => a.status.localeCompare(b.status));        
          this.generacionGraficas();          
        },(error)=>{
          console.log(error)
        }
      )   
    }
  }


  generacionGraficas(){
    this.showInfo = true;
    if(this.filtro != 'Todas'){
      this.data = {
        labels: [
          'Pendiente',
          'En proceso',
          'Corregido'
        ],
        datasets: [{
          label: 'Total de incidencias',
          data: [this.pendienteCounter, this.procesoCounter, this.corregidoCounter],
          backgroundColor: [
            '#ed0100',
            '#f28705',
            '#05c412'
          ],
          spacing:0,
          datasets: {
            borderAlign: "center"
          }
        }]
      };

      console.log(this.data)
      Chart.register(...registerables)
      this.grafica = new Chart(this.chart, {
        type: 'doughnut',
        data: this.data,
        options: {
          responsive: true,        
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          }
        }
      });
    }else if (this.filtro == 'Todas'){
        this.data1 = {
          labels: [
            'Pendiente',
            'En proceso',
            'Corregido'
          ],
          datasets: [{
            label: 'Total de incidencias',
            data: [this.pendienteCounter1, this.procesoCounter1, this.corregidoCounter1],
            backgroundColor: [
              '#ed0100',
              '#ffa91e',
              '#05c412'
            ],
            spacing:0,
            datasets: {
              borderAlign: "center"
            }
          }]
        };
        Chart.register(...registerables)
        this.grafica1 = new Chart(this.chart1, {
          type: 'doughnut',
          data: this.data1,
          options: {          
            responsive: true,        
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            }
          }
        }); 
  
  
        this.data2 = {
          labels: [
            'Pendiente',
            'En proceso',
            'Corregido'
          ],
          datasets: [{
            label: 'Total de incidencias',
            data: [this.pendienteCounter2, this.procesoCounter2, this.corregidoCounter2],
            backgroundColor: [
              '#ed0100',
              '#ffa91e',
              '#05c412'
            ],
            spacing:0,
            datasets: {
              borderAlign: "center"
            }
          }]
        };
        Chart.register(...registerables)
        this.grafica2 = new Chart(this.chart2, {
          type: 'doughnut',
          data: this.data2,
          options: {
            responsive: true,        
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              },
            }
          }
        });  
    }
    this.spinnerService.hide();
  }


  checkModule(indice:number){
    this.filtro = this.modulo
    if(this.grafica){
      this.grafica.destroy();
    }
    
    if(this.moduleSource){
      this.moduleSource = []
    }
    if(this.dataSource){
      this.dataSource = []
    }

    this.showInfo = false;
    if(this.filtro == 'Gemba Walk'){
      this.areaDom = true;
    }else{
      this.areaDom = false;
    }    
  }

  onClick(event:any, image:any){
    this.imgSrc = image
  }

  modificarIndencia(type:number){
    if(type == 1){
      console.log("inicia la incidencia")
      console.log(this.ownerInput)
      console.log(this.notasInput)
    }else if(type == 2){
      console.log("termina la incidencia")
      console.log(this.previsualizacion)
      console.log(this.solucionInput)
    }else if(type == 3){
      console.log("edita la incidencia")
      console.log(this.ownerInput)
      console.log(this.notasInput)
    }
  }

  asignarValores(notas:string, owner:string){
    this.notasInput = notas;
    this.ownerInput = owner;
  }

  captureFile(event:any):any{   
    this.previsualizacion = '';
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then(async (imagen:any) => {
      var smallImage = await reduceImageSize(imagen.base);
      this.previsualizacion = smallImage;
    })    
  }

  extraerBase64 = async ($event: any) => new Promise((resolve) => {
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
        reader.onload = () =>{
          resolve({
            base: reader.result
          });
        };
        reader.onerror = error =>{
          resolve({
            base: null
          });
        };
        return
      }catch (e) {
        return null;
      }
  })
}

async function reduceImageSize(base64Str:string, MAX_WIDTH = 450, MAX_HEIGHT = 450): Promise<string>{
  let resized_base64:string = await new Promise((resolve) => {
    let img = new Image()
    img.src = base64Str
    img.onload = () => {
        let canvas = document.createElement('canvas')
        let width = img.width
        let height = img.height

        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width
                width = MAX_WIDTH
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height
                height = MAX_HEIGHT
            }
        }
        canvas.width = width
        canvas.height = height
        let ctx = canvas.getContext('2d')
        ctx!.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL()) // this will return base64 image results after resize
    }
  });
  return resized_base64;
}