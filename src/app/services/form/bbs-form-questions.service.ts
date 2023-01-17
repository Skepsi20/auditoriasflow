import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BbsFormQuestionsService {

  constructor() { }
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

}
