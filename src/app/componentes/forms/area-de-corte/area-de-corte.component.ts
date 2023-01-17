import { Component, OnInit, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { answer } from 'src/app/models/answer.model';
import { AnswerService } from 'src/app/services/answers/answer.service';
import { answerDetail } from 'src/app/models/answer.model';

@Component({
  selector: 'area-de-corte',
  templateUrl: './area-de-corte.component.html',
  styleUrls: ['./area-de-corte.component.css']
})
export class AreaDeCorteComponent implements OnInit {

  public preguntas: Array<any> = [
    {
      pregunta: 'El operador está usando correctamente y completo su EPP (lentes, casco, guantes, tapones, botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Observe si cuando mueven una carga pesada utilizan un carro transportador de apoyo y/o polipasto',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La herramienta utilizada para realizar su trabajo está en buenas condiciones de uso y no es hechiza',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El operador utiliza la eslinga correcta para mover la carga (pregunte al operador para cuántos kilos es la eslinga)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El operador realizó revisión de la eslinga y la registró en el check list',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El operador utiliza algún dispositivo para quitar la rebaba',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]

  public respuestas: answer = {
    eventId: '',
    assignedTo: '',
    image: '',
    questions: [{
      description: '',
      selection: false,
      comments: ''
    }]
  }
  public answersArray: Array<answerDetail> = [];

  public selectedQuestion = 0;
  public formReady = false;
  public archivos: any = [];
  public previsualizacion: string = '';

  constructor(
    private sanitizer: DomSanitizer,
    private answerService: AnswerService
    ) { }

  ngOnInit(): void {
  }

  functionReady(){
    this.preguntas[this.preguntas.length-1].respuesta = true;
    this.respuestas.image = undefined;

    var answered = 0;
    for (let i = 0; i < this.preguntas.length-1; i++) {
      if(this.preguntas[i].respuesta == undefined || this.respuestas.image == ''){
        answered ++;
      }if(answered == 0){
        this.formReady = true;
      }
    }

  }

  functionYes(index:any){
    this.preguntas[index].respuesta = true;
    var answered = 0;
    for (let i = 0; i < this.preguntas.length-1; i++) {
      if(this.preguntas[i].respuesta == undefined || this.respuestas.image == ''){
        answered ++;
      }if(answered == 0){
        this.formReady = true;
      }
    }
  }

  functionNo(index:any){
    this.preguntas[index].respuesta = false;
    var answered = 0;
    for (let i = 0; i < this.preguntas.length-1; i++) {
      if(this.preguntas[i].respuesta == undefined || this.respuestas.image == ''){
        answered ++;
      }if(answered == 0){
        this.formReady = true;
      }
    }
  }

  captureFile(event:any):any{
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then((imagen:any) => {
      this.respuestas.image = imagen.base;
      this.previsualizacion = imagen.base;
      this.preguntas[this.preguntas.length-1].respuesta = true;
      var answered = 0;
      for (let i = 0; i < this.preguntas.length-1; i++) {
        if(this.preguntas[i].respuesta == undefined || this.respuestas.image == ''){
          answered ++;
        }if(answered == 0){
          this.formReady = true;
        }
      }
    })
    this.archivos.push(archivoCapturado);
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

  enviar(){
    for(let i = 0; i<this.preguntas.length-1; i++){
      this.answersArray.push(
        {
          description: this.preguntas[i].pregunta,
          selection: this.preguntas[i].respuesta,
          comments: this.preguntas[i].comentarios,
        });
    }
    const answers = {
      eventId: '08da947b-dcab-451d-82bc-0e74790f0e9f',
      assignedTo: '08da9463-7481-4123-844d-967dc42fafcb',
      image: this.respuestas.image,
      questions: this.answersArray
    }
    console.log(answers)

    this.answerService.addAnswer(answers)
      .subscribe(
        (success)=>{
          console.log(success)
          console.log('FUNCIONOOOO')
        },(error)=>{
          console.log(error)
        }
      )

    console.log("RESPUESTAS", this.preguntas)
  }
}
