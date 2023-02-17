import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacSealService {

  constructor() { }
  public coloresDeSeguridad: Array<any> = [
    {
      pregunta: 'Están las señales de seguridad e higiene ubicadas de tal manera que puedan ser observadas e identificadas por los trabajadores a los que están destinadas',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: 'Las señales de seguridad se encuentran obstruidas de manera que pueda ser disminuida o eliminada la eficacia de estas',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: 'Se encuentran las señales de seguridad en buenas condiciones, sin presentar algun daño o deterioro',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: 'Las señales de seguridad se encuentran libres de manera que puedan ser observadas y no sea disminuida o eliminada la eficacia de estas',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: 'Las señales de seguridad advierten oportunamente sobre: la ubicación de los equipos o estaciones de emergencia, la existencia de riesgos o peligros, la realización de alguna acción obligatoria, la prohibición de algún acto susceptible a causar algún riesgo',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
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
    },
    {
      pregunta: '¿Están cerradas o equipadas con un mecanismo de cierre todas las puertas de incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están sin obstrucción todas las puertas contra incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Los extintores están a la vista y sin obstrución?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Son vaciados regularmente los recipientes de basura?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Se retiran los trapos utilizados en el taller después de haber terminado el trabajo a un lugar seguro contra incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Se guardan los trapos en contenedores de metal?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están libres las áreas debajo de las escaleras de material inflamable o combustible?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están libres todas las puertas de salida y pasillos de materiales almacenados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están iluminados todos los señalamientos de salida?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Funcionan las baterías en las luces de emergencia cuando se prueban?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Las cantidades de líquidos combustibles se limitan al mínimo permitido para un turno de trabajo?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Son almacenados los materiales de combustible a un mínimo de 1.5 metros (5 pies) de boilers, calentadores, hornos o fuentes de encendido?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Son almacenados todos los contenedores de líquidos combustibles a un mínimo de 3 metros (10 pies) de todos los recursos de incendido?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están siempre cerrados los contenedores de líquidos combustibles cuando no se usan?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Se llevan a cabo en la tierra todos las operaciones de líquidos inflamables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Se utilizan cables entrelazados en contenedores de metal durante traslado de líquidos inflamables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Hay ventilación adecuada cuando se utilizan los líquidos combustibles o inflamables?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están en tierra todos los contenedores de material cobustible?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están las instalaciones libres de una acumulación excesiva de materiales combustibles?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están almacenados los contenedores de líquido inflamable en gabinetes o cuartos de almacenamiento aprobados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están las instalaciones libres de deficiciencias eléctricas que pudieran ocasionar un incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están los extintores completamente cargados?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están los extintores de incendios ubicados a no más de 7.6 metros (25 pies) de distancia?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Los extintores no están a más de 1,5 metros (5 pies) desde el piso hasta la parte superior del extintor?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Están las ubicaciones de los extintores libres de obstrucciones con carteles que indiquen su ubicación?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Se revisan, mantienen y etiquetan los extintores a intervalos que no excedan un año?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },
    {
      pregunta: '¿Los extintores se encuentran correctamente sujetos a la pared o a un contenedor de manera que no puedan caerse?',
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
  public controlesGeneralesAmbientalesYPrimerosAuxilios: Array<any> = [
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
      pregunta: '¿Solo se encuentran conectados los equipos con cables permanentes, sin utilizar extensiones temporales?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los cables y cordones flexibles sin protección están correctamente colocados y no pasan a través de agujeros en las paredes o el techo o a través de puertas o ventanas?',
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
      pregunta: '¿El personal cumple con el uso de Equipo de protección personal cuando es necesario?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están los empleadores manteniendo adecuadamente el equipo de proteccion personal como se requiere?',
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
      pregunta: '¿Están en buenas condiciones las cabezas en forma de hongo de los cinceles o punzones?',
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
      pregunta: '¿Las eslingas se retiran del servicio cuando se presenta algun daño o desgaste en ellas?',
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
      pregunta: '¿Se mantienen ajustados los apoyos de trabajo en los esmeriles de banco de modo que no estén a más de 0,32 cm (1/8 de pulgada) de la rueda?',
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
      pregunta: '¿Están los ascensores marcados con letreros que indiquen que no se deben usar en caso de incendio?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
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
  public saludOcupacionalYControlAmbiental: Array<any> = [
    {
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
      pregunta: '¿Los bidones de líquidos inflamables a granel se conectan a tierra y se adhieren a los contenedores durante la dispensación?',
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
      pregunta: '¿La altura del techo en cualquier área de trabajo es mayor a 2.5 metros u 8 pies, 3 pulgadas?',
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
      pregunta: '¿Están todos los lofts de almacenamiento claramente marcados en cuanto a su límite de carga?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los lofts o áreas de trabajo elevadas de más de 1,22 metros (4 pies) están protegidas por barandas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Están protegidas las aberturas y entradas al loft para evitar que los empleados se resbalen o caigan por el borde?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Tienen las escaleras un ancho mínimo de 1,22 metros (4 pies)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporcionan pasamanos estándar en escaleras y contrahuellas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporciona una altura minima de paso de 2,1 m (7 pies)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Los descansos tienen al menos el ancho de las escaleras?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La profundidad de cada paso es de al menos 25 centímetros (10 pulgadas)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La altura de cada escalón no supera los 18 centímetros (7 pulgadas)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las escaleras de 3 metros (9,8 pies) o más tienen barandilla?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Todas las escaleras tienen barandales de una altura no menor a 90 centímetros (3 pies)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se ha instalado una baranda intermedia en los barandales que tienen soportes verticales separados por más de 1 metro (3,2 pies)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las alturas de los techos para el paso del trabajador no son inferiores a 2,4 metros (8 pies)?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Las rampas utilizadas para el paso de los trabajadores tienen una pendiente de no más de 6 grados?',
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
    },{
      pregunta: '¿Todos los pasillos y plataformas elevados tienen barandas de al menos 90 centímetros (3 pies) de altura? (Solo requerido para plataformas donde hay trabajadores presentes)',
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
  public sustanciasToxicasYPeligrosasPacseal: Array<any> = [
    {
      pregunta: '¿Se han revisado todos los productos químicos utilizados en la instalación para determinar si los empleados están expuestos a sustancias reguladas?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿El plomo está ausente de la planta (es decir, compuesto antiagarrotamiento, pigmento de plomo en la pintura, bronce con plomo o aluminio con plomo?',
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
      pregunta: '¿Se han identificado las áreas con exposicion a sustancias peligrosas con señales muy notorias?',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿La instalación repara los productos devueltos? Si es así, continúe con las partes a y b.',
      respuesta: undefined,
      comentarios: '',
      image: ''
    },{
      pregunta: '¿Se proporciona a los técnicos de reparación, se los capacita y utilizan todos los equipos de protección personal requeridos identificados en la SDS?',
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
