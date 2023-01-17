import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SistemasAuxiliaresService {

  constructor() { }
  public acabadosPorPulverizacionConSubstanciasInflamables: Array<any> = [
    {
      pregunta: '¿Tiene la cabina un manómetro calibrado que funcione?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se mantienen libres de residuos los rociadores cubriéndolos con una bolsa de plástico o papel?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se mantienen las fuentes de chispas y llamas al menos a 6,1 metros (20 pies) del frente de la cabina?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El sistema de ventilación de la cabina está encendido en todo momento durante la pulverización y durante al menos 30 minutos después de completar la pulverización?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se mantiene el interior de la cabina libre de todos los residuos de rociado que excedan 1 mm (1/16 de pulgada)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se realiza la limpieza del equipo de aspersión dentro de la cabina?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Hay carteles de prohibido fumar en las áreas de pulverización, mezcla y almacenamiento?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La cantidad de materiales fuera de los gabinetes de almacenamiento está limitada a la cantidad que se utilizará en el turno actual?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public coloresYSegnalesDeSeguridad: Array<any> = [
    {
      pregunta: 'Están las señales de seguridad e higiene ubicadas de tal manera que puedan ser observadas e identificadas por los trabajadores a los que están destinadas ',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Las señales de seguridad se encuentran obstruidas de manera que pueda ser disminuida o eliminada la eficacia de estas',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Se encuentra alguna señal de seguridad dañada, rota o en malas condicones',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Se encuentra el área saturada por señales de seguridad de manera que pueda generar alguna confusión o mala información',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Las señales de seguridad advierten oportunamente sobre: La ubicación de los equipos o estaciones de emergencia, la existencia de riesgos o peligros, la realización de alguna acción obligatoria, la prohibición de algún acto susceptible a causar algún riesgo',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Las tuberías se identifican con el color de seguridad según corresponda: Rojo: Identificación de fluidos conducidos por tubeía para el combate de incendios, Amarillo: Identificación de fluidos peligrosos conducidos por tubería, Verde: Identificación de fluidos NO peligrosos conducidos por tubería',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public contraIncendio: Array<any> = [
    {
      pregunta: '¿Están todas las barreras contra incendio intactas y están cerradas todas las barreras?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están cerradas o equipadas con un mecanismo de cierre todas las puertas de incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están sin obstrucción todas las puertas contra incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los extintores están a la vista y sin obstrución?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Son vaciados regularmente los recipientes de basura?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se retiran los trapos utilizados en el taller después de haber terminado el trabajo a un lugar seguro contra incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se guardan los trapos en contenedores de metal?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están libres todas las puertas de salida y pasillos de materiales almacenados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están iluminados todos los señalamientos de salida?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Funcionan las baterías en las luces de emergencia cuando se prueban?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las cantidades de líquidos combustibles se limitan al mínimo permitido para un turno de trabajo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Son almacenados los materiales de combustible a un mínimo de 1.5 metros (5 pies) de boilers, calentadores, hornos o fuentes de encendido?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Son almacenados todos los contenedores de líquidos combustibles a un mínimo de 3 metros (10 pies) de todos los recursos de incendido?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están siempre cerrados los contenedores de líquidos combustibles cuando no se usan?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se llevan a cabo en la tierra todos las operaciones de líquidos inflamables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se utilizan cables entrelazados en contenedores de metal durante traslado de líquidos inflamables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Hay ventilación adecuada cuando se utilizan los líquidos combustibles o inflamables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están en tierra todos los contenedores de material cobustible?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las instalaciones libres de una acumulación excesiva de materiales combustibles?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están almacenados los contenedores de líquido inflamable en gabinetes o cuartos de almacenamiento aprobados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las instalaciones libres de deficiciencias eléctricas que pudieran ocasionar un incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se lleva a cabo la pintura pulverizada solo en la cabina de pintura?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se conserva la provisión de pintura de un día en la cabina de pintura?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Está equipada la cabina de pintura con equipo de supresión de incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los extintores completamente cargados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los extintores de incendios ubicados a no más de 7.6 metros (25 pies) de distancia?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los extintores no están a más de 1,5 metros (5 pies) desde el piso hasta la parte superior del extintor?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las ubicaciones de los extintores libres de obstrucciones con carteles que indiquen su ubicación?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se revisan, mantienen y etiquetan los extintores a intervalos que no excedan un año?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se pueden soltar fácilmente los extintores?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public controlesAmbientalesGeneralesYPrimerosAuxilios: Array<any> = [
    {
      pregunta: '¿Se mantienen limpios y sanitarios los baños y baños?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se prohíbe a los empleados comer en áreas donde hay materiales tóxicos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Si a los empleados se les permite comer en las instalaciones, ¿se les proporciona un lugar adecuado para tal fin?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los descansos tienen al menos el ancho de las escaleras?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La Comisión de Seguridad e Higiene en el Lugar de Trabajo monitorea los suministros de primeros auxilios y notifica cuando los suministros se agotan?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Son suficientes los suministros de primeros auxilios? (ver enlace a la derecha)',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Está el botiquín de primeros auxilios ubicado en un lugar limpio y de fácil acceso e identificado con carteles?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Cuando los empleados puedan estar expuestos a materiales corrosivos dañinos, ¿se les proporcionan instalaciones de enjuague y enjuague rápido para uso inmediato de emergencia?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public corteSoldaduraYElectrico: Array<any> = [
    {
      pregunta: '¿Están los cilindros asegurados y almacenados donde no puedan volcarse?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las tapas protectoras del cilindro en su lugar excepto cuando el cilindro está conectado para su uso?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se mantienen los cilindros de gas comprimido alejados de fuentes de calor, ascensores, escaleras o pasarelas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Solo los empleados capacitados que el empleador considere competentes pueden utilizar equipos de oxígeno o gas combustible?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La soldadura y el corte se realizan siempre a una distancia segura de líquidos inflamables? (> 6,1 m)',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todos los cilindros de gas comprimido marcados de manera legible para identificar el contenido?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se cierran las válvulas cuando el cilindro no está en uso?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporciona y se usa protección para los ojos como protección contra las chispas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La protección para los ojos tiene el sombreado claramente marcado en la lente o el casco?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se usa ropa protectora adecuada como protección contra chispas y otros desechos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los trabajadores cercanos protegidos por pantallas sombreadas contra el destello de soldadura? a. Dirigir, b. Cadmio, c. Compuestos mercúricos, d. Zinc',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todos los reguladores de gas, antorchas, válvulas, generadores de gas y colectores están aprobados para la forma en que se utilizan?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las reglas e instrucciones que cubren la operación y el mantenimiento fácilmente disponibles para quienes manipulan / conectan cilindros?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los cilindros claramente marcados en cuanto a su contenido?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se almacenan los cilindros lejos de radiadores y otras fuentes de calor?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están cerradas las válvulas en cilindros vacíos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se mueven todos los cilindros con las tapas de las válvulas en su lugar?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todos los cilindros asegurados para evitar caídas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se ha instruido adecuadamente a los trabajadores sobre el funcionamiento seguro de sus equipos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todas las conexiones a tierra de las máquinas de soldar en buenas condiciones?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se han reemplazado los cables con aislamiento dañado o conectores desnudos expuestos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se han reemplazado los cables con empalmes a menos de 3,1 metros (10 pies) del soporte?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se ha instruido a los empleados para que informen todos los defectos del equipo a su supervisor?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public electrico: Array<any> = [
    {
      pregunta: '¿Está el equipo eléctrico libre de peligros reconocidos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todos los empalmes y conexiones adecuadamente aislados y cubiertos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El equipo que produce chispas, arco o metal fundido está encerrado, separado o aislado de todos los materiales combustibles?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las marcas de los fabricantes en todos los equipos eléctricos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están claramente marcados los desconectores eléctricos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El espacio de trabajo frente a todos los paneles eléctricos es de al menos 0,9 metros (36 pulgadas) al frente y 2 metros (6 pies, 6 pulgadas) arriba?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todas las partes activas están protegidas o encerradas para evitar el contacto accidental?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todas las partes activas son accesibles solo para personas calificadas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las instalaciones eléctricas son accesibles para personas no calificadas publicadas con carteles de precaución y se mantienen cerradas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todos los sistemas de ventilación que se utilizan para transportar polvo o vapores inflamables libres de todo cableado eléctrico?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los cordones y cables flexibles que se utilizan para el cableado temporal están protegidos de daños accidentales?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los conectores que ingresan a las cajas, gabinetes o accesorios están protegidos de la abrasión mediante casquillos o accesorios lisos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están cerradas todas las aberturas no utilizadas en gabinetes, cajas y accesorios?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todas las cajas de derivación, cajas de conexiones y accesorios con cubiertas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todos los interruptores de pared y enchufes están equipados con una placa frontal?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Está todo el equipo en lugares húmedos a prueba de intemperie y / o protegido con dispositivos interruptores de circuito por falla a tierra?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se utilizan cables flexibles solo en tramos continuos sin empalmes ni grifos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporcionan cables flexibles con alivio de tensión cuando sea apropiado?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los cables flexibles y los cables nunca sustituyen al cableado fijo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los cables y cordones flexibles sin protección no pasan a través de los agujeros en las paredes o el techo o a través de puertas o ventanas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todos los equipos conectados por cable y enchufe tienen conexiones a tierra?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están conectados a tierra los aparatos eléctricos como aspiradoras, pulidoras, máquinas expendedoras, etc.?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todas las herramientas manuales eléctricas portátiles están conectadas a tierra o tienen doble aislamiento?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se identifican los interruptores automáticos en cuanto a su uso?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los equipos como sopladores, bombas, secadores y motores están conectados a tierra individualmente?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se está pintando el equipo de la cabina de pintura, como la pared metálica, las piezas metálicas y los contenedores conectados a tierra?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están conectados a tierra todos los tanques que contienen sustancias inflamables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public equipoDeProteccionPersonal: Array<any> = [
    {
      pregunta: '¿Se utiliza y se hace cumplir el equipo de protección personal cuando es necesario?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los empleadores manteniendo adecuadamente el PPE como se requiere?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporcionan y se usan tapones para los oídos u orejeras en áreas de mucho ruido (más de 90 db)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se usa protección para los ojos y la cara en todo momento?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se utilizan protectores faciales y gafas protectoras?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se usan calzas, delantales, guantes, etc., como protección contra llamas, chispas y salpicaduras de metal?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Cuando sea posible, ¿se asignan los respiradores individualmente para que los utilicen los empleados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se limpian y desinfectan los respiradores después de su uso?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se almacenan los respiradores en un lugar conveniente, limpio y sanitario?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se inspeccionan los respiradores de uso habitual durante la limpieza?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los empleados que trabajan en equipos eléctricos usan PPE, incluida la ropa retardante de llama, como se especifica en NFPA 70-E? (ver enlace a la derecha)',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se usan calzas, delantales, guantes, etc., como protección contra llamas, chispas y salpicaduras de metal?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se usan cascos cuando hay peligro de caída de objetos u obstrucciones por encima de la cabeza?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se usan zapatos de seguridad cuando existe la posibilidad de lesionarse el pie?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public equiposDeGasComprimidoYAireComprimido: Array<any> = [
    {
      pregunta: '¿Están completamente protegidas las poleas y correas de los compresores y motores?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public herramientasDeManoPortatilesYElectricas: Array<any> = [
    {
      pregunta: '¿Están las herramientas y el equipo en buenas condiciones?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se han reacondicionado o reemplazado las cabezas en forma de hongo de los cinceles o punzones?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se han reemplazado las cabezas de martillo rotas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se han reemplazado las llaves desgastadas o dobladas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se han reemplazado las mangueras de aire deterioradas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las herramientas eléctricas portátiles protegidas en la medida de lo posible que aún permitan su uso para el trabajo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se inspeccionan todas las muelas abrasivas portátiles antes de su uso?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se utilizan ruedas con un valor nominal igual o inferior a las RPM de las herramientas eléctricas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public manipulacionYAlmacenamientoDeMateriales: Array<any> = [
    {
      pregunta: '¿El área de almacenamiento puede permitir el libre movimiento de personal y vehículos a través del área?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Hay carteles que indiquen la velocidad máxima permitida?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las áreas de almacenamiento libres de peligros de tropiezos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El material almacenado es estable y seguro?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los racks y plataformas se cargan solo dentro de los límites de su capacidad?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Cuando se apilan los materiales, ¿se indican las alturas máximas permitidas en el área?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están marcados los pasillos permanentes?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Solo los operadores capacitados pueden operar vehículos industriales motorizados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se instalan protectores superiores apropiados en las carretillas elevadoras eléctricas para proteger al operador?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las carretillas industriales motorizadas están equipadas con un espejo retrovisor?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las carretillas industriales motorizadas están equipadas con un extintor de incendios portátil?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Hay carteles de “NO FUMAR” cerca de las unidades de carga de baterías eléctricas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se apagan todos los vehículos de carretera antes de cargarlos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las carretillas industriales motorizadas están equipadas con una bocina o un dispositivo de advertencia audible?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se inspeccionan diariamente los vehículos motorizados y el equipo mecanizado?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los frenos puestos y las ruedas traseras calzadas para evitar que los camiones de carretera se muevan mientras son subidos por camiones industriales motorizados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Está claramente marcada la carga nominal de cada grúa?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿NUNCA se transportan cargas sobre la cabeza de las personas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se inspeccionan diariamente la grúa, los ganchos y las cadenas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están marcados los polipastos en cuanto a sus límites de carga?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se inspeccionan diariamente las eslingas y los ganchos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están prohibidas las eslingas, eslabones y ganchos improvisados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se inspeccionan y recertifican anualmente las eslingas, cadenas y ganchos de acero?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las eslingas se retiran del servicio cuando se presenta alguno de los siguientes?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las eslingas están claramente etiquetadas para identificar su capacidad nominal?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public maquinariaYHerramientasManuales: Array<any> = [
    {
      pregunta: '¿Existe un procedimiento de operación escrito y pautas de seguridad para el equipo en la instalación?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se siguen procedimientos operativos seguros?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporciona un espacio libre adecuado entre las máquinas para la operación de la máquina, los materiales y los desechos sin bloquear el tráfico o interferir con las operaciones de la máquina?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El equipo y la maquinaria están colocados y anclados de forma segura, si es necesario, para evitar vuelcos u otros movimientos que podrían resultar en lesiones personales?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La protección está diseñada de manera que evite ser un peligro en sí misma?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Está diseñada la protección de modo que permita la visibilidad necesaria?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Hay un interruptor de corte de energía al alcance de la posición del operador en cada máquina?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todas las poleas, correas, aspas del ventilador, cadenas o ruedas dentadas que se encuentran a menos de 2,1 metros (7 pies) del piso o del nivel de trabajo debidamente protegidas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todas las cadenas y engranajes móviles debidamente protegidos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporcionan y utilizan anteojos de seguridad, protectores faciales u otro equipo de protección ocular los operadores de la máquina?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se mantienen ajustados los apoyos de trabajo en los esmeriles de banco modo que no estén a más de 0,32 cm (1/8 de pulgada) de la rueda?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todos los esmeriles de banco equipados con protectores que encierran aproximadamente ¾ de la rueda?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todos los esmeriles de banco equipados con protectores de lengüeta (parachispas) que se extienden desde la parte superior del protector periférico hasta 0,5 cm (1/4 de pulgada) de la rueda?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todos los esmeriles de banco montadas de forma segura para evitar el movimiento?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporcionan colectores de polvo y escapes eléctricos en los molinos que se utilizan en operaciones que producen una gran cantidad de polvo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están montados protectores contra salpicaduras en las máquinas que usan refrigerante para evitar que el refrigerante llegue a los empleados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se requiere que los empleados que operan herramientas o equipos giratorios o alternativos se quiten o aseguren la ropa suelta, los relojes, las joyas y el cabello largo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporcionan métodos para proteger al operador y otros empleados en el área de la máquina de los peligros creados en el punto de operación, puntos de contacto entrantes, piezas giratorias, astillas voladoras y chispas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Si el punto de operación expone a un empleado a una lesión, ¿está protegido y los empleados están protegidos lo mejor que pueda el empleador?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: 'Si se utilizan herramientas manuales especiales para colocar y retirar material, ¿protegen las manos del operador?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todas las partes móviles protegidas para proteger al operador?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se mantiene la limpieza alrededor de la maquinaria?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public mediosDeSalida: Array<any> = [
    {
      pregunta: '¿Están todas las rutas de salida despejadas y libres de obstrucciones?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todas las salidas marcadas e iluminadas con luces o señales luminosas fiables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las direcciones a las salidas están marcadas con señales apropiadas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todas las puertas de paso se mantienen abiertas durante las horas de trabajo (o están equipadas con hardware de desbloqueo automático "tipo pánico"?)',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todas las puertas de salida tienen bisagras laterales para abrirse hacia afuera?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están aterrizados todos los equipos capaces de generar electricidad estática?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los contenedores de materiales inflamables están diseñados para evitar derrames y fugas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los peligros creados por polvos combustibles o vapores inflamables están adecuadamente ventilados para eliminar las propiedades explosivas o inflamables del aire?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están todos los materiales inflamables etiquetados para identificar sus propiedades peligrosas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los contenedores que se usan para manipular materiales inflamables tienen tapas para evitar derrames?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se almacenan los residuos de forma que no supongan un riesgo para los empleados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se almacenan en el área solo las cantidades de inflamables necesarias para el día o el proceso?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public pruebasDePresion: Array<any> = [
    {
      pregunta: '¿Se proporcionan resguardos de tamaño y tipo suficientes para todas las operaciones de prueba?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La protección protege a los empleados en el área de posibles escapes de agua, accesorios u otros componentes del sistema?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se están realizando evaluaciones de riesgo al menos una vez para todas las operaciones de prueba y antes del comienzo de todas las pruebas nuevas? ¿Las evaluaciones están documentadas y disponibles para los empleados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las válvulas de alivio de presión accionadas automáticamente tienen la capacidad adecuada y una presión de apertura establecida no mayor que la presión de prueba de trabajo nominal máxima más el 10% de la presión de prueba en su lugar? O como mínimo, una opción alternativa de alivio de presión de emergencia que debe ser proporcionada y aprobada por el Comité de Seguridad de Pruebas',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los sistemas de prueba están etiquetados para identificar los límites máximos de prueba del sistema?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public saludOcupacionalYControlAmbiental: Array<any> = [
    {
      pregunta: '¿Están todas las tinas, tanques y contenedores etiquetados con respecto a su contenido?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se requiere que los empleados usen equipo de protección personal apropiado cuando manejen solventes, polvos abrasivos, etc. para evitar el contacto respiratorio, con los ojos o la piel?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se guardan todos los materiales inflamables en contenedores cerrados apropiados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se limpian rápidamente todos los derrames de materiales inflamables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se almacenan adecuadamente los materiales de desecho combustibles en recipientes metálicos cubiertos y se eliminan a diario?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se almacenan los líquidos inflamables (gasolina, solventes, pinturas) en contenedores apropiados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se limitan los líquidos inflamables y combustibles dentro de las instalaciones a las cantidades mínimas necesarias para cumplir con los requisitos de un turno de trabajo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todas las sustancias inflamables y combustibles se mantienen fuera del alcantarillado municipal?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public superficiesParaCaminarYTrabajar: Array<any> = [
    {
      pregunta: '¿Están todas las instalaciones del lugar de trabajo limpias, ordenadas y libres de daños?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La altura más baja del techo en cualquier área de trabajo es no menor a 2.5 metros u 8 pies, 3 pulgadas? Si la respuesta es No, consulte los requisitos especiales',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se mantienen limpios y secos todos los pisos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporcionan tapetes o superficies especiales para las áreas de trabajo húmedas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están cubiertos o protegidos los agujeros/ aberturas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Está el área libre de peligros de resbalones o tropiezos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las superficies para caminar (rampas, escaleras, plataformas) tienen superficies antideslizantes?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los pasillos claramente marcados con líneas pintadas, barandillas, etc.?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están despejados los pasillos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporciona suficiente espacio para el paso de vehículos y trabajadores?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los patios que se utilizan como áreas de trabajo se mantienen libres de charcos/ estancamientos de liquidos?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las puertas que conducen a los patios donde se realiza el trabajo proporcionan un espacio adecuado para permitir el tráfico de trabajadores y vehículos cuando corresponda?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están las escaleras fijas y las escaleras en buenas condiciones?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se retiran del servicio las escaleras defectuosas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Está prohibido el uso de la parte superior de una escalera de tijera como escalón?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los peldaños de la escalera están apretados y se mantienen libres de grasa y aceite?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
  public sustanciasToxicasYPeligrosasSistemasAuxiliares: Array<any> = [
    {
      pregunta: '¿Se han revisado todos los productos químicos utilizados en la instalación para determinar si los empleados están expuestos a sustancias reguladas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El plomo está presente en alguna forma dentro de la planta (es decir, compuesto antiagarrotamiento, pigmento de plomo en la pintura, bronce con plomo o aluminio con plomo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los empleados capacitados sobre qué materiales del taller son tóxicos, corrosivos o irritantes y cómo manejarlos adecuadamente?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se capacita a los empleados cuando se introducen nuevos materiales en el lugar de trabajo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se usa equipo de protección personal (PPE) cuando se requiere para proteger adecuadamente a los empleados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están disponibles las SDS?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se instalan contenedores fijos de sustancias tóxicas, corrosivas o irritantes de manera que se evite la propagación de fugas o derrames?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se almacenan dichos materiales en un área designada?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se almacenan estos materiales en contenedores adecuados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se utilizan contenedores fijos para almacenar estos materiales equipados con dispositivos que solo permitan llenarlos al 90% de su capacidad total?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las cantidades de estos materiales en el taller se limitan al uso de un día? a. ¿Identidad del químico? b. ¿Advertencia de peligro? c. ¿Nombre, dirección y número de teléfono del fabricante?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El empleador tiene disponible una SDS (en español) para cada producto químico manipulado en el lugar de trabajo? n. ¿Los procedimientos están aprobados por la máxima autoridad en el lugar de trabajo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todos los trabajos peligrosos requieren que el empleado obtenga un permiso para realizar el trabajo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El permiso contiene la siguiente información: a. ¿El tipo de empresa? b. ¿El lugar donde se realizará el trabajo? c. ¿El número de autorización? d. ¿El nombre y título del solicitante? e. ¿La fecha de la solicitud, ejecución y finalización? f. ¿La actividad laboral? g. ¿Las firmas de las personas involucradas en la autorización, supervisión y ejecución del trabajo peligroso?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se han identificado áreas donde se han identificado exposiciones a sustancias peligrosas con señales muy notorias?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '(OPCIONAL) Describa algun comportamiento de riesgo que haya observado',
      respuesta: undefined,
      comentarios: '',
      image: ''
    }
  ]
}
