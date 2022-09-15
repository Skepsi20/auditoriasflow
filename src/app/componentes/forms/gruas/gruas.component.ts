import { Component, OnInit, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { answer } from 'src/app/models/answer.model';
import { AnswerService } from 'src/app/services/answers/answer.service';
import { answerDetail } from 'src/app/models/answer.model';

@Component({
  selector: 'gruas',
  templateUrl: './gruas.component.html',
  styleUrls: ['./gruas.component.css']
})
export class GruasComponent implements OnInit {

  public preguntas: Array<any> = [
    {
      pregunta: 'El operador está utilizando correctamente y completo su EPP (guantes, casco, lentes, tapones y botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El operador utiliza la eslinga correcta para mover la carga (pregunte al operador para cuántos kilos es la eslinga)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El operador realizó la revisión de la eslinga y la registró en el check list',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Solicite al operador su licencia vigente para operar grúas',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al realizar la maniobra el operador voltea hacia ambos lados para validar que no hay personas en su camino',
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
    this.respuestas.image = 'No image';

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
