import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { FormsService } from 'src/app/services/form/forms.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

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
  multi = [{ }];

  view: any = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  roundDomains: boolean = true;
  showXAxisLabel: boolean = true;
  showDataLabel: boolean = false;
  noBarWhenZero: boolean = false;
  showGridLines: boolean = true;
  graphicReady: boolean = false;
  legendPosition: any = ['string'];
  xAxisLabel: string = 'Pregunta';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Respuesta';
  legendTitle: string = 'Opciones';
  listadoDeResultados: boolean = false;
  filtradoFail = false;
  mostrarDetallesDeResultados = false;
  botonBuscarGraficos = false;
  listadoResultados: Array<any> = [];
  filtradoParaGraficos: Array<any> = [];
  commentsArray: Array<any> = [];

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#8ddf00', '#ff0c0c'],
  };
  formReady = false;
  forms: Array<any> = [];
  searchReady = false;
  arregloDeEventos: Array<any> = [];

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
        for (let index = 0; index < success.length; index++) {
          console.log(success)
          this.commentsArray[index] = {
            question: success[index].questionDescription,
            comments: success[index].comments
          }

          this.multi[index] = {
            "name": "Pregunta "+(index+1),
            "series": [
              {
                "name": "Si",
                "value": success[index].positiveCounter
              },
              {
                "name": "No",
                "value": success[index].negativeCounter
              }
            ]
          }
        }

        this.graphicReady = true;
        console.log(this.multi)
        console.log(this.commentsArray)




      },(error)=>{
        console.log(error)
      }
    )

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


