import { Component, OnInit, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { answer } from 'src/app/models/answer.model';
import { AnswerService } from 'src/app/services/answers/answer.service';
import { answerDetail } from 'src/app/models/answer.model';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { SpinnerService } from 'src/app/services/spinner/spinner.service';
import { BbsFormQuestionsService } from 'src/app/services/form/bbs-form-questions.service';
import { GasPacService } from 'src/app/services/form/gembaWalk/gas-pac.service';
import { PacSealService } from 'src/app/services/form/gembaWalk/pac-seal.service';
import { Planta52Service } from 'src/app/services/form/gembaWalk/planta52.service';
import { SistemasAuxiliaresService } from 'src/app/services/form/gembaWalk/sistemas-auxiliares.service';
import { FormsService } from 'src/app/services/form/forms.service';

@Component({
  selector: 'stamping',
  templateUrl: './stamping.component.html',
  styleUrls: ['./stamping.component.css']
})
export class StampingComponent implements OnInit {
  public preguntas: Array<any> = []

  /* SECCION DE PREGUNTAS INICIO */
  public preguntasStamping: Array<any> = [
    {
      pregunta: 'El operador está usando correctamente y completo su EPP (guantes anticorte, lentes, tapones, botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al trasladar el molde hacia el troquel el operador utiliza la mesa elevadora',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La herramienta utilizada para colocar el molde está en buenas condiciones y no es hechiza',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al utilizar la prensa el operador utiliza ambas manos para activar los controles (validar si intenta tomar atajo)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Valide que los guantes, lentes y tapones estén en buenas condiciones',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasAlmacen: Array<any> = [
    {
      pregunta: 'El operador está usando correctamente y completo su EPP (lentes, tapones y botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Solicite al operador si puede bajar un material de una estiba alta y valide si al hacerlo usa el barandal de la escalera',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Revise si la escalera está en buenas condiciones (gomas de las patas, barandales, escalones)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Observe si cuando mueven una carga pesada utilizan un carro transportador de apoyo',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Revise si el carro transportador tiene frenos en las ruedas y está siendo utilizado',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasAreaDeCorte: Array<any> = [
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
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasComedor: Array<any> = [
    {
      pregunta: 'El operador está utilizando correctamente y completo su EPP (zapato antiderrapante, cofia, cubrebocas, guantes y mandil)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El área por donde transita el personal está libre de líquidos o derrames',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Observe si los recipientes que mueve el personal son grandes, si es así pregunte cuántos Kg pesa, revise si lo mueven con ayuda de algún carrito.',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'En caso de emergencia el personal del comedor tiene una salida despejada y rápida',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Pregunte a cualquier persona del comedor si sabe a quien notificar en caso de algún accidente.',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasEnsambleP62: Array<any> = [
    {
      pregunta: 'La operadora está usando correctamente y completo su EPP (guantes anticorte, lentes, tapones, botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al trasladar los componentes hacia la mesa, la operadora utiliza algún dispositivo, p/e caja, carrito, etc.',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La operadora utiliza alguna herramienta para hacer el ensamble, está en buenas condiciones de uso',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La operadora permanece de pie y/o sentada para hacer su trabajo, hay algún riesgo',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al mover cargas manualmente, lo hace correctamente, hay algún riesgo',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Las guardas de las prensas están en óptimas condiciones de uso, funciona la cortina de luz',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasEnsambleP72: Array<any> = [
    {
      pregunta: 'El operador está usando correctamente y completo su EPP (guantes anticorte, lentes, tapones y botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Valide que la pieza que el operador está trabajando se encuentra sujeta a una base fija, sin riesgo a caer',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La herramienta utilizada para realizar el ensamble está en buenas condiciones y no es hechiza',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Si el personal realiza golpes con el martillo, está utilizando guantes anti-impacto y su finger saver',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Si el operador realiza esmerilado o corte a la pieza debe adicionar a su EPP mandil, careta, guantes de carnaza y debe sujetar la herramienta con ambas manos y pies separados firmemente',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasGruas: Array<any> = [
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
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasISC: Array<any> = [
    {
      pregunta: 'La operadora está usando correctamente y completo su EPP (guantes anticorte, lentes, tapones y botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al trasladar los componentes hacia la mesa, la operadora utiliza algún dispositivo, p/e caja, carrito, etc',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La operadora utiliza alguna herramienta para hacer el ensamble y está en buenas condiciones de uso',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La operadora permanece de pie y/o sentada para hacer su trabajo, hay algún riesgo',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al mover cargas manualmente, lo hace correctamente, hay algún riesgo',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al utilizar la cabina laser, el operador se asegura que la puerta se encuentre completamente cerrada',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasLapeado: Array<any> = [
    {
      pregunta: 'El operador(a) está usando correctamente y completo su EPP (guantes, lentes, tapones, botas, peto)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al trasladar los componentes el operador(a) utiliza un dispositivo',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El operador(a) utiliza alguna herramienta para realizar el lapeado',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La lapeadora cuenta con paro de emergencia',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El operador(a) utiliza algún EPP especial para realizar el lapeado',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasTonoManual: Array<any> = [
    {
      pregunta: 'El operador está usando correctamente y completo su EPP (lentes, tapones y botas), valide que cuando el operador esté en contacto con la pieza en movimiento no utilice guantes',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Valide que el operador no realice operación de lijado con el torno en movimiento (revise el área del torno validando que no existan pedazos de lija, de existir pregunte al operador porque)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La herramienta utilizada para realizar el ensamble está en buenas condiciones y no es hechiza',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Pregunte al operador las revoluciones por minuto a las que está trabajando y valide si están de acuerdo a la especificación que tiene indicada el operador',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasSoldadura: Array<any> = [
    {
      pregunta: 'El operador está usando correctamente y completo su EPP (guantes, careta, mandil, lentes, tapones y botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Valide que la pieza que el operador esta trabajando se encuentra sujeta a una base fija, sin riesgo de caer',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La herramienta utilizada para trabajar está en buenas condiciones de uso y no es hechiza',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Los controles y/o manómetros están integros y sin desperfectos aparentes',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Si el operador realiza esmerilado o corte a la pieza debe adicionar a su EPP mandil, y careta facial',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Las conexiones de los cables porta electrodo y de tierra están en buen estado de uso',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La máquina de soldar está debidamente aterrizada y con conexiones adecuadas',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Para el transporte de los cilindros de gas se utiliza un medio mecánico, los cilindros están verticalmente colocados',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasCNC: Array<any> = [
    {
      pregunta: 'El operador está usando completo y correctamente su EPP al intervenir su equipo (lentes, tapones, botas, faja, recuerde que para partes rotatorias no se debe usar guantes)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Revise con el operador que las puertas de la máquina CNC no se puedan abrir mientras la máquina este trabajando',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'La herramienta utilizada está en buenas condiciones y no es hechiza',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Observe si cuando mueven una carga pesada utilizan un carro transportador de apoyo o polipasto',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Revise si el carro transportador tenía frenos en las ruedas y estaba siendo utilizado',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Valide que las piezas a maquinar no tienen filos pronunciados y de tenerlos, el operador usa guantes anticorte (ver imagen)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]
  public preguntasRubber: Array<any> = [
    {
      pregunta: 'El operador está usando correctamente y completo su EPP (guantes anticorte, lentes, tapones, botas)',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al trasladar los componentes hacia la mesa, el operador utiliza algún dispositivo, p/e caja, carrito, etc.',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al trasladar el molde hacia Rubber Molding el operador utiliza la mesa elevadora',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'El operador permanece de pie y/o sentado para hacer su trabajo, hay algún riesgo',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Al mover cargas manualmente, lo hace correctamente, hay algún riesgo',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: 'Las guardas de la Rubber Molding están en óptimas condiciones de uso, funciona la cortina de luz',
      respuesta: undefined,
      comentarios: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: ''
    }
  ]

  /* SECCION DE PREGUNTAS FIN */
  public respuestas: answer = {
    eventId: '',
    assignedTo: '',
    image: ['No image'],
    questions: [{
      description: '',
      selection: false,
      comments: '',
      image:[]
    }]
  }
  public answersArray: Array<answerDetail> = [];
  public selectedQuestion = 0;
  public formReady = false;
  public archivos: any = [];
  public previsualizacion: Array<any> = [];
  public previsualizacionBBS: string = '';
  public previsualizacionesGW: Array<any> = [];
  public userAccepted = false;
  public userId = '';
  public notAccepted = false;
  public paramsObject: any;
  public formId = '';
  public formCode = '';
  public eventId = '';
  public resultId = '';
  public gems = '';
  public formFinished = false;
  primeraVez = true;
  /* VARIABLES PROVISIONALES */
  bbsName=''
  employeeName = ''
  module=''
  formActual:any;

  constructor(
    private sanitizer: DomSanitizer,
    private readonly activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private answerService: AnswerService,
    private employeeService: EmployeesService,
    private cookieService: CookieService,
    private formService: FormsService,
    private readonly spinnerService: SpinnerService,
    private readonly bbsService: BbsFormQuestionsService,
    private readonly gasPacService: GasPacService,
    private readonly pacsealService: PacSealService,
    private readonly plantaService: Planta52Service,
    private readonly sistemasAuxiliaresService: SistemasAuxiliaresService,
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap
      .subscribe((params) => {
        this.paramsObject = { ...params.keys, ...params };
        this.formId = this.paramsObject.params.formId;
      }
    );
  }

  checkUser(){
    const request ={
      formId: this.formId,
      gems: this.gems
    }
    this.authService.checkUser(request)
    .subscribe(
      (success)=>{
        this.cookieService.set('accessToken', success.accessToken);
        this.cookieService.set('refreshToken', success.refreshToken);
        if(success.accessToken){
          var tokenDecoded:any = jwt_decode(success.accessToken);
          this.formCode = tokenDecoded["FormId"];
          this.userId = tokenDecoded["EmployeeId"];
          this.eventId = tokenDecoded["EventId"];
          this.resultId = tokenDecoded['ResultId'];
        }

        this.formService.getFormById(this.formCode)
        .subscribe(
          (success)=>{
            this.formActual = success;
            this.userAccepted = true;
            this.notAccepted = false;

            console.log("Result id antes de questions",this.resultId)
            if(this.resultId){
              this.getQuestions();
            }else{
              //Asignación de formulario
              //BBS
              if(this.formActual.module == 'BBS'){
                if(this.formActual.code == 'STP62'){ this.preguntas = this.bbsService.preguntasStamping; this.bbsName = 'BBS STAMPING P62'; this.module = 'BBS';
                }else if(this.formActual.code == 'CMDR'){ this.preguntas = this.bbsService.preguntasComedor; this.bbsName = 'BBS COMEDOR'; this.module = 'BBS';
                }else if(this.formActual.code == 'ALM52'){ this.preguntas = this.bbsService.preguntasAlmacen; this.bbsName = 'BBS ALMACÉN PLANTA 52'; this.module = 'BBS';
                }else if(this.formActual.code == 'SOL72'){ this.preguntas = this.bbsService.preguntasSoldadura; this.bbsName = 'BBS SOLDADURA P72'; this.module = 'BBS';
                }else if(this.formActual.code == 'CNC52'){ this.preguntas = this.bbsService.preguntasCNC; this.bbsName = 'BBS Proceso CNC, LCS'; this.module = 'BBS';
                }else if(this.formActual.code == 'CTE52'){ this.preguntas = this.bbsService.preguntasAreaDeCorte; this.bbsName = 'BBS AREA DE CORTE P52'; this.module = 'BBS';
                }else if(this.formActual.code == 'ENS72'){ this.preguntas = this.bbsService.preguntasEnsambleP72; this.bbsName = 'BBS ENSAMBLE P72'; this.module = 'BBS';
                }else if(this.formActual.code == 'LP62'){ this.preguntas = this.bbsService.preguntasLapeado; this.bbsName = 'BBS LAPEADO P62'; this.module = 'BBS';
                }else if(this.formActual.code == 'GRA'){ this.preguntas = this.bbsService.preguntasGruas; this.bbsName = 'BBS USO DE GRÚAS SA'; this.module = 'BBS';
                }else if(this.formActual.code == 'TM52'){ this.preguntas = this.bbsService.preguntasTonoManual; this.bbsName = 'BBS TORNO MANUAL P52'; this.module = 'BBS';
                }else if(this.formActual.code == 'RM62'){ this.preguntas = this.bbsService.preguntasRubber; this.bbsName = 'BBS RUBBER MOLDING P62'; this.module = 'BBS';
                }else if(this.formActual.code == 'ENS62'){ this.preguntas = this.bbsService.preguntasEnsambleP62; this.bbsName = 'BBS ENSAMBLE P62'; this.module = 'BBS';
                }else if(this.formActual.code == 'ISC62'){ this.preguntas = this.bbsService.preguntasISC; this.bbsName = 'BBS ISC P62'; this.module = 'BBS';
                }
              }else if(this.formActual.module == 'Gemba Walk' && this.formActual.area == 'GasPac'){        
                //Gas Pac
                if(this.formActual.code == 'CYSDS'){ this.preguntas = this.gasPacService.coloresDeSeguridad; this.bbsName = 'Gas Pac - Colores y señales de seguridad'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CGAYPA'){ this.preguntas = this.gasPacService.controlesGeneralesAmbientalesYPrimerosAuxilios; this.bbsName = 'Gas Pac - Controles generales ambientales y primeros auxilios'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'ELEC'){ this.preguntas = this.gasPacService.electrico; this.bbsName = 'Gas Pac - Eléctrico'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EPCI'){ this.preguntas = this.gasPacService.equipoDeProteccionContraIncendio; this.bbsName = 'Gas Pac - Equipo de protección contra incendio'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EPP'){ this.preguntas = this.gasPacService.equipoDeProteccionPersonal; this.bbsName = 'Gas Pac - Equipo de protección personal'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EGYAC'){ this.preguntas = this.gasPacService.equipoDeGasYAireComprimido; this.bbsName = 'Gas Pac - Equipos de gas y aire comprimido'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'HMPYE'){ this.preguntas = this.gasPacService.herramientasDeManoPortatilesYElectricas; this.bbsName = 'Gas Pac - Herramientas de mano portátiles y eléctricas'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MYADM'){ this.preguntas = this.gasPacService.manipulacionYAlmacenamientoDeMateriales; this.bbsName = 'Gas Pac - Manipulación y almacenamiento de materiales'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MYHM'){ this.preguntas = this.gasPacService.maquinariaYHerramientasManuales; this.bbsName = 'Gas Pac - Maquinaria y herramientas manuales'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MDS'){ this.preguntas = this.gasPacService.mediosDeSalida; this.bbsName = 'Gas Pac - Medios de salida'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'PDP'){ this.preguntas = this.gasPacService.pruebasDePresion; this.bbsName = 'Gas Pac - Pruebas de presión'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'SOYCA'){ this.preguntas = this.gasPacService.saludOcupacionalYControlAmbiental; this.bbsName = 'Gas Pac - Salud ocupacional y control ambiental'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'SPCYT'){ this.preguntas = this.gasPacService.superficiesParaCaminarYTrabajar; this.bbsName = 'Gas Pac - Superficies para caminar y trabajar'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'STYP'){ this.preguntas = this.gasPacService.sustanciasToxicasYPeligrosas; this.bbsName = 'Gas Pac - Sustancias tóxicas y peligrosas'; this.module = 'GembaWalk';
                }
              }else if(this.formActual.module == 'Gemba Walk' && this.formActual.area == 'Pac Seal'){
              //Pac Seal
                if(this.formActual.code == 'CYSDS'){ this.preguntas = this.pacsealService.coloresDeSeguridad; this.bbsName = 'Pac Seal - Colores y señales de seguridad'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CI'){ this.preguntas = this.pacsealService.contraIncendio; this.bbsName = 'Pac Seal - Contra incendio'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CGAYPA'){ this.preguntas = this.pacsealService.controlesGeneralesAmbientalesYPrimerosAuxilios; this.bbsName = 'Pac Seal - Controles generales ambientales y primeros auxilios'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'ELEC'){ this.preguntas = this.pacsealService.electrico; this.bbsName = 'Pac Seal - Eléctrico'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EPP'){ this.preguntas = this.pacsealService.equipoDeProteccionPersonal; this.bbsName = 'Pac Seal - Equipo de protección personal'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EDGCYAC'){ this.preguntas = this.pacsealService.equiposDeGasComprimidoYAireComprimido; this.bbsName = 'Pac Seal - Equipos de gas comprimido y aire comprimido'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'HDMPYE'){ this.preguntas = this.pacsealService.herramientasDeManoPortatilesYElectricas; this.bbsName = 'Pac Seal - Herramientas de mano portátiles y eléctricas'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MYADM'){ this.preguntas = this.pacsealService.manipulacionYAlmacenamientoDeMateriales; this.bbsName = 'Pac Seal - Manipulacion y almacenamiento de materiales'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MYHM'){ this.preguntas = this.pacsealService.maquinariaYHerramientasManuales; this.bbsName = 'Pac Seal - Maquinaria y herramientas manuales'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MDS'){ this.preguntas = this.pacsealService.mediosDeSalida; this.bbsName = 'Pac Seal - Medios de salida'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'SOYCA'){ this.preguntas = this.pacsealService.saludOcupacionalYControlAmbiental; this.bbsName = 'Pac Seal - Salud ocupacional y control ambiental'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'SPCYT'){ this.preguntas = this.pacsealService.superficiesParaCaminarYTrabajar; this.bbsName = 'Pac Seal - Superficies para caminar y trabajar'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'STYPP'){ this.preguntas = this.pacsealService.sustanciasToxicasYPeligrosasPacseal; this.bbsName = 'Pac Seal - Sustancias tóxicas y peligrosas pacseal'; this.module = 'GembaWalk';
                }
              }else if(this.formActual.module == 'Gemba Walk' && this.formActual.area == 'Planta 52'){
                //Planta 52
                if(this.formActual.code == 'CYSDS'){ this.preguntas = this.plantaService.coloresYSegnalesDeSeguridad; this.bbsName = 'Planta 52 - Colores y señales de seguridad'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CI'){ this.preguntas = this.plantaService.contraIncendio; this.bbsName = 'Planta 52 - Contra incendio'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CAGYPA'){ this.preguntas = this.plantaService.controlesAmbientalesGeneralesYPrimerosAuxilios; this.bbsName = 'Planta 52 - Controles ambientales generales y primeros auxilios'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CSYE'){ this.preguntas = this.plantaService.corteSoldaduraYElectrico; this.bbsName = 'Planta 52 - Corte soldadura y eléctrico'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'ELEC'){ this.preguntas = this.plantaService.electrico; this.bbsName = 'Planta 52 - Eléctrico'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EPP'){ this.preguntas = this.plantaService.equipoDeProteccionPersonal; this.bbsName = 'Planta 52 - Equipo de protección personal'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EDGCYAC'){ this.preguntas = this.plantaService.equiposDeGasComprimidoYAireComprimido; this.bbsName = 'Planta 52 - Equipos de gas comprimido y aire comprimido'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'HDMPYE'){ this.preguntas = this.plantaService.herramientasDeManoPortatilesYElectricas; this.bbsName = 'Planta 52 - Herramientas de mano portátiles y eléctricas'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MYADM'){ this.preguntas = this.plantaService.manipulacionYAlmacenamientoDeMateriales; this.bbsName = 'Planta 52 - Manipulación y almacenamiento de materiales'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MYHM'){ this.preguntas = this.plantaService.maquinariaYHerramientasManuales; this.bbsName = 'Planta 52 - Maquinaria y herramientas manuales'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MDS'){ this.preguntas = this.plantaService.mediosDeSalida; this.bbsName = 'Planta 52 - Medios de salida'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'PDP'){ this.preguntas = this.plantaService.pruebasDePresion; this.bbsName = 'Planta 52 - Pruebas de presión'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'SOYCA'){ this.preguntas = this.plantaService.saludOcupacionalYControlAmbiental; this.bbsName = 'Planta 52 - Salud ocupacional y control ambiental'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'SPCYT'){ this.preguntas = this.plantaService.superficiesParaCaminarYTrabajar; this.bbsName = 'Planta 52 - Superficies para caminar y trabajar'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'STYPP52'){ this.preguntas = this.plantaService.sustanciasToxicasYPeligrosasPlanta52; this.bbsName = 'Planta 52 - Sustancias tóxicas y peligrosas planta52'; this.module = 'GembaWalk';
                }
              }else if(this.formActual.module == 'Gemba Walk' && this.formActual.area == 'Sistemas auxiliares'){
                //Sistemas auxiliares
                if(this.formActual.code == 'APPCSI'){ this.preguntas = this.sistemasAuxiliaresService.acabadosPorPulverizacionConSubstanciasInflamables; this.bbsName = 'Sistemas auxiliares - Acabados por pulverización con substancias inflamables'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CYSDS'){ this.preguntas = this.sistemasAuxiliaresService.coloresYSegnalesDeSeguridad; this.bbsName = 'Sistemas auxiliares - Colores y señales de seguridad'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CI'){ this.preguntas = this.sistemasAuxiliaresService.contraIncendio; this.bbsName = 'Sistemas auxiliares - Contra incendio'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CAGYPA'){ this.preguntas = this.sistemasAuxiliaresService.controlesAmbientalesGeneralesYPrimerosAuxilios; this.bbsName = 'Sistemas auxiliares - Controles ambientales generales y primeros auxilios'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'CSYE'){ this.preguntas = this.sistemasAuxiliaresService.corteSoldaduraYElectrico; this.bbsName = 'Sistemas auxiliares - Corte soldadura y eléctrico'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'ELEC'){ this.preguntas = this.sistemasAuxiliaresService.electrico; this.bbsName = 'Sistemas auxiliares - Eléctrico'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EDPP'){ this.preguntas = this.sistemasAuxiliaresService.equipoDeProteccionPersonal; this.bbsName = 'Sistemas auxiliares - Equipo de protección personal'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'EDGCYAC'){ this.preguntas = this.sistemasAuxiliaresService.equiposDeGasComprimidoYAireComprimido; this.bbsName = 'Sistemas auxiliares - Equipos de gas comprimido y aire comprimido'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'HDMPYE'){ this.preguntas = this.sistemasAuxiliaresService.herramientasDeManoPortatilesYElectricas; this.bbsName = 'Sistemas auxiliares - Herramientas de mano portátiles y eléctricas'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MYADM'){ this.preguntas = this.sistemasAuxiliaresService.manipulacionYAlmacenamientoDeMateriales; this.bbsName = 'Sistemas auxiliares - Manipulación y almacenamiento de materiales'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MYHM'){ this.preguntas = this.sistemasAuxiliaresService.maquinariaYHerramientasManuales; this.bbsName = 'Sistemas auxiliares - Maquinaria y herramientas manuales'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'MDS'){ this.preguntas = this.sistemasAuxiliaresService.mediosDeSalida; this.bbsName = 'Sistemas auxiliares - Medios de salida'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'PDP'){ this.preguntas = this.sistemasAuxiliaresService.pruebasDePresion; this.bbsName = 'Sistemas auxiliares - Pruebas de presión'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'SOYCA'){ this.preguntas = this.sistemasAuxiliaresService.saludOcupacionalYControlAmbiental; this.bbsName = 'Sistemas auxiliares - Salud ocupacional y control ambiental'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'SPCYT'){ this.preguntas = this.sistemasAuxiliaresService.superficiesParaCaminarYTrabajar; this.bbsName = 'Sistemas auxiliares - Superficies para caminar y trabajar'; this.module = 'GembaWalk';
                }else if(this.formActual.code == 'STYPSA'){ this.preguntas = this.sistemasAuxiliaresService.sustanciasToxicasYPeligrosasSistemasAuxiliares; this.bbsName = 'Sistemas auxiliares - Sustancias tóxicas y peligrosas sistemas auxiliares'; this.module = 'GembaWalk';
                }
              }
            }
          },(error)=>{
            console.log(error)
          }
        )

        this.employeeService.getEmployeeLogged()
        .subscribe(
          (success)=>{
            this.employeeName = success.firstName + ' '+success.lastName;
          },(error)=>{
            console.log(error)
          }
        )       


        

        /*
        for (let index = 0; index < this.preguntas.length; index++) {
          this.previsualizacionesGW.push([]);
        }

        this.previsualizacion = this.previsualizacionesGW
        */


      },(error)=>{
        this.userAccepted = false;
        this.notAccepted = true;
        console.log(error)
      }
    )
  }

  getQuestions(){
    this.answerService.getAnswersById(this.resultId)
    .subscribe(
      (success)=>{
        console.log("Success de questions",success)

        this.preguntas = success.questions.map( (q:any) => {
          return {
            pregunta: q.description,
            respuesta: q.selection,
            comentarios: q.comments,
            images: q.images,
            id: q.id
          }
        });
        for (let i = 0; i < this.preguntas.length; i++) {
          this.previsualizacion[i] = this.preguntas[i].images
        }


        console.log("preguntas de questions",this.preguntas)

        },(error)=>{
        console.log(error)
      }
    )
  }


  updateAnswers(index:any){
    console.log("Preguntas con id",this.preguntas)
    for (let index = 0; index < this.preguntas.length; index++) {
      if(!this.preguntas[index].id){
        this.primeraVez = true;
      }else{
        this.primeraVez = false;
        break;
      }
    }
    //Subir un post de las primeras preguntas que se contestó
    this.answersArray = [];
    for(let i = 0; i<this.preguntas.length; i++){
      this.answersArray.push(
        {
          description: this.preguntas[i].pregunta,
          selection: this.preguntas[i].respuesta,
          comments: this.preguntas[i].comentarios,
          image: this.previsualizacion[i]
        });
    }

    if(this.primeraVez){   
      const answers = {
        eventId: this.eventId,
        assignedTo: this.userId,
        image: this.respuestas.image,
        questions: this.answersArray
      }
      this.answerService.addAnswer(answers)
      .subscribe(
        (success)=>{
          this.resultId = success.id;
          this.getQuestions();
        },(error)=>{
          console.log(error)
        }
      )      
    }else{
      const questionId = this.preguntas[index].id
      const answersUpdate = {
        resultId: this.resultId,
        description: this.preguntas[index].pregunta,
        selection: this.preguntas[index].respuesta,
        comments: this.preguntas[index].comentarios,
      }
      const imagesUpdate = {
        images: this.previsualizacion[index]
      }
      this.answerService.updateImages(imagesUpdate,questionId)
      .subscribe(
        (success)=>{
          console.log(success)
        },(error)=>{
          console.log(error)
        }
      )
      this.answerService.updateAnswer(answersUpdate,questionId)
      .subscribe(
        (success)=>{
          console.log(success)
        },(error)=>{
          console.log(error)
        }
      )
    }
  }

  eliminarElemento(elemento:any){
    this.previsualizacion[this.selectedQuestion].splice(elemento,1);
  }

  functionYes(index:any){
    this.preguntas[index].respuesta = true;
    var answered = 0;
    for (let i = 0; i < this.preguntas.length-1; i++) {
      if(this.preguntas[i].respuesta == undefined){
        answered ++;
      }
    }
    if(answered == 0){
      this.formReady = true;
    }
  }

  functionNo(index:any){
    this.preguntas[index].respuesta = false;
    var answered = 0;
    for (let i = 0; i < this.preguntas.length-1; i++) {
      if(this.preguntas[i].respuesta == undefined){
        answered ++;
      }
    }
    if(answered == 0){
      this.formReady = true;
    }
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

  captureFile(event:any):any{   
    console.log("capture file") 
    const archivoCapturado = event.target.files[0]
    this.extraerBase64(archivoCapturado).then(async (imagen:any) => {
      var smallImage = await reduceImageSize(imagen.base);
      this.previsualizacionesGW[this.selectedQuestion].push(smallImage);
      this.previsualizacion[this.selectedQuestion] = this.previsualizacionesGW[this.selectedQuestion];
      this.preguntas[this.selectedQuestion].images = this.previsualizacionesGW[this.selectedQuestion];

      console.log("PREVISUALIZACION SELECTED QUESTION",this.previsualizacion[this.selectedQuestion])
      if(this.module == 'BBS'){
        this.preguntas[this.preguntas.length-1].respuesta = true;
      }      
      var answered = 0;
      for (let i = 0; i < this.preguntas.length-1; i++) {
        if(this.preguntas[i].respuesta == undefined){
          answered ++;
        }
      }
      if(answered == 0){
        this.formReady = true;
      }
    })
    this.archivos.push(archivoCapturado);
  }

  enviar(){
    this.updateAnswers(this.selectedQuestion);
    this.answerService.updateStatusToComplete("Completado",this.eventId)
    .subscribe(
      (success)=>{
        console.log(success)
      },(error)=>{
        console.log(error)
      }
    )
    this.formFinished = true;

    this.spinnerService.show();
    this.spinnerService.hide();
  }


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
