<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La interpretación de los hallazgos - Procesos y conclusiones

    p.mt-5.mb-5  Es importante tener presente que los hallazgos en un procesamiento de datos, no se logran totalmente con la obtención de un dato procesado, un número “puro” o un resultado visible; deben estar acompañados de un proceso de pensamiento, que se conforma de dos subprocesos: el análisis y la síntesis.     

    p.bg2.ml.text-figuras.mt-5.mb-4 #[span.text-bold Figura 2.]  Proceso de análisis

    .row.justify-content-center
      .col-sm-9.mb-3.mt-5
        figure
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt") 
    p.mt-5.mb-5  Aprendamos sobre cada uno de estos subprocesos: 
    .row.justify-content-center
      .col-sm-10.mb-3.mt-5
        .tarjeta--container.row.justify-content-center
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/img2.png', alt='')
            .tarjeta.tarjeta-gris.p-3
              h2.text-center.mt-5 Análisis
              p.text-center Es el proceso de organizar, procesar, obtener, recrear, construir, deconstruir, contrastar, refutar, los datos de entrada, con base en un objetivo de análisis. Es un procedimiento mental desarrollado por el cerebro humano, siendo imitado, aunque no a la perfección, por la tecnología. Al ser un proceso de pensamiento, su base es racional, pero posee un aporte del empirismo, es decir, del conocimiento y experticia propia de quien realiza el análisis, al ser el conocedor de los datos. 
          .tarjeta-avatar
            img(src='@/assets/curso/temas/tema2/img3.png' alt='')
            .tarjeta.tarjeta-gris.p-3
              h2.text-center.mt-5 Síntesis
              p.text-center Es el proceso de concreción, agrupamiento y conclusión, seguido de un proceso de análisis. Las piezas del rompecabezas se unen generando una estructura coherente de información que, en definitiva, contribuye con las necesidades que generaron el proceso de análisis. Es a partir de la síntesis, que el analista evidencia sus conclusiones, y es capaz de llegar a un informe final que pueda proporcionar como resultado de su proceso. La síntesis es la que pone en evidencia el hallazgo producto del análisis. 

    .row.justify-content-center
      .tarjeta
        .row.justify-content-center
          .col-sm-6.mb-3
            p.mt-5 Por otro lado, en metodología de la investigación, el proceso de análisis es conocido como hermenéutica, en donde el investigador hace uso de sus diferentes potenciales de pensamiento racional para desestructurar y reestructurar su objeto de investigación. 
            .row.justify-content-center.mt-5
              .col-md-10
                .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
                  .row.justify-content-center.p-4                
                    p Los procesos de análisis tienen como entrada los datos, y es evidente que ameritan de técnicas y herramientas creadas o producidas por el analista, o ya existentes, tales como los procesadores de datos. Quien realiza el análisis, se fundamenta en diversas fuentes de datos para poder tener un espectro más amplio, preciso, veraz y pertinente, del proceso que está realizando.
            p.mt-3 En la empresa, el análisis de los procesos no puede ser desarrollado por personas desconocedoras de los mismos; para eso existen líderes de procesos. No obstante, los análisis minuciosos cuentan con el aporte de la mayor cantidad de fuentes internas y externas de la empresa, a fin de obtener la mayor cantidad de datos, sucesos, circunstancias, que conlleven a una adecuada toma de decisiones. Por eso, los activos tangibles e intangibles de la empresa, son aportes fundamentales en los procesos de análisis; activos tangibles como los documentos, las maquinarias, o los intangibles como las personas y los sistemas de información. 
          .col-sm-6.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema2/img4.png", alt="alt")

    p.mt-5.mb-5 A continuación, presentamos un ejemplo, en el cual se explica el desarrollo de los procesos de análisis y síntesis, en un caso empresarial.  
    p.mb-5 Los procesos clave en la obtención de hallazgos - Caso de estudio empresarial.

    .tarjeta.color-borde-slider.color-slider.p-3.mt-5
      SlyderA(tipo="b").bg5
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Introducción
            p En una empresa manufacturera, se desarrolla un proceso de fabricación de bolsas de plástico troqueladas. Los troqueles se encuentran dispuestos en un segundo piso, que fue construido con estructura metálica reforzada, porque no existían posibilidades de una ampliación horizontal en la planta. 
            p.mt-5 En los dos últimos meses, y de manera consecutiva, se empezó a observar, con datos, un incremento de desperdicio conformado por bolsas, en las cuales el troquel no lograba cortar los bordes de manera adecuada, no pudiendo salir este producto al mercado. El desperdicio en el segundo mes, había ascendido a un 22 % de la producción total. 
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema2/img5.png", alt="alt")
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Desarrollo
            p Esta situación estaba tratando de ser controlada por el jefe de producción y el jefe de calidad, quienes realizaron cambios en los planes de mantenimiento, concluyendo incluso, en la necesidad de cambiar las máquinas troqueladoras; esto representaba una alta inversión que afectaría la rentabilidad de la empresa, pero que se consideraba que, a la larga, iba a elevar de nuevo, el indicador de calidad. 
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema2/img6.png", alt="alt")                  
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            p Aleatoriamente, durante la visita de un asesor empresarial, quien fue contratado para una asesoría sobre la ampliación de la gama de productos ofrecidos, este realizó un paseo por la planta y, al subir al nivel en el que se encontraban los troqueles, hizo un paneo general hacia el piso de abajo y notó una alta vibración del piso metálico. En ese instante, pasa por su lado la señora encargada de la limpieza y, en la pala de aseo, el asesor observa que iban algunas tuercas. Preguntó a la señora de la limpieza y esta le informa que, usualmente, recogía esas piezas durante sus jornadas de aseo por la planta.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema2/img7.png", alt="alt")
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            p Esto llamó la atención del asesor, quien se lo comunicó al gerente de la empresa; este se dirigió al jefe de producción y le comentó lo sucedido. Al conocer este suceso y luego de un análisis con el personal de mantenimiento, se pudo detectar una descalibración en los troqueles, lo que hacía que se generara un acomodo inadecuado al hacer el corte, como una consecuencia por la pérdida de piezas en el cuerpo de calibración, ocasionado por la vibración del piso metálico de la segunda planta. 
            p.mt-5 La solución a la problemática, se fundamentó en el cambio de localización de los troqueles como máquinas fundamentales en la calidad del producto, además de una modificación en los criterios de criticidad del mantenimiento preventivo de la maquinaria.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema2/img8.png", alt="alt")  
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Conclusiones
            p Se deducen entonces, varios aspectos clave de #[span.text-bold los procesos, en la obtención de hallazgos en la empresa:]
            ul.lista-ul    
              li
                i.lista-ul__vineta
                span #[span.text-bold La necesidad de análisis.] Se parte de un objetivo, con base en un problema, una necesidad, o una oportunidad empresarial.
              li
                i.lista-ul__vineta
                span #[span.text-bold La necesidad de obtener datos.] Se trata de recolectar elementos para el análisis, de hacer pesquisas, de buscar fuentes de datos, relacionados con la situación a analizar. 
              li
                i.lista-ul__vineta
                span #[span.text-bold La búsqueda de fuentes.] Las fuentes de los datos son diversas y, a veces, no planeadas, inusitadas y hasta foráneas (externas). No siempre los datos están en la empresa, o los tienen los conocedores de los procesos, o ya se encuentran recolectados. Los procesos de análisis exhaustivos, dan cabida a más datos novedosos y precisos y nuevas fuentes de datos, personales, documentales, visuales, digitales, o de cualquier tipología. 
         
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema2/img9.png", alt="alt")  
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Conclusiones
            p Se deducen entonces, varios aspectos clave de #[span.text-bold los procesos, en la obtención de hallazgos en la empresa:]
            ul.lista-ul    
              li
                i.lista-ul__vineta
                span  #[span.text-bold El desarrollo del análisis de los datos.] El uso de los datos recolectados de manera específica, combinada, cruzada, depurada, realimentada, para poder generar un resultado que aporte una respuesta a la necesidad de análisis. 
              li
                i.lista-ul__vineta
                span  #[span.text-bold La obtención de hallazgos.] Puede tratarse de uno o más hallazgos, algunos convergentes, otros contradictorios, más aún cuando se analizan líneas de tiempo en la ocurrencia de eventos. Al final, debe generarse un hallazgo común, que conlleve a conclusiones generales. 
              li
                i.lista-ul__vineta
                span  #[span.text-bold La generación de soluciones.] La resolución del objetivo de análisis que, al fin y al cabo, provee soluciones empresariales emprendidas en los procesos de toma de decisiones. 
                               
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema2/img10.png", alt="alt") 

    .row.justify-content-center
      .tarjeta
        .row.justify-content-center
          .col-sm-6.mb-3
            p.mt-5 Es así como se llega, finalmente, a la toma de decisiones, la cual se fundamenta en conclusiones provenientes de procesos de análisis de datos, en la cual juegan un papel fundamental los métodos investigativos para la recolección de datos, el procesamiento estadístico de datos y las normas y modelos empresariales para la presentación de informes de gestión. 
            .row.justify-content-center.mt-5
              .col-md-10
                .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
                  .row.justify-content-center.p-4                
                    p En efecto, durante el desarrollo de los procesos empresariales, se amerita de información que debe ser verificada por los analistas o tomadores de decisiones, requiriendo que esa información sea cabalmente obtenida con base en las políticas de la empresa, métodos formales de obtención, análisis e interpretación y documentación adecuada, para su presentación y comprensión. 
            p.mt-3 En pocas palabras, #[span.text-bold las decisiones se toman a partir de los hallazgos, los hallazgos generan conclusiones, y las conclusiones de los análisis orientan a las decisiones.]
          .col-sm-6.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema2/img11.png", alt="alt") 

    p.mt-5 En este contexto, deben tenerse en cuenta los siguientes aspectos: 

    .row.justify-content-center.bg4.mg-img.mt-5.mb-5.mg-img-final
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta-acordeon-verde").mt-5
        .row(titulo="Las conclusiones no son los hallazgos").p-5.bg5
          .row.justify-content-center
            .col-md-7
              p El hallazgo es el elemento “resultado” del procesamiento del dato, o puede constituirse en un nuevo dato del proceso de análisis, que deberá integrarse al conjunto de datos. Los hallazgos, a través de un proceso de análisis, dan cabida a conclusiones. 
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img12.png", alt="alt")         

        div(titulo="Las conclusiones responden a las preguntas").p-5.bg5
          .row.justify-content-center
            .col-md-7
              ul.lista-ul    
                li
                  i.lista-ul__vineta
                  span  Con los datos que se recolectaron, ¿qué es entonces lo que ha pasado (histórico-pasado), lo que está pasando (presente) o lo que pasará (futuro-proyección)? 
                li
                  i.lista-ul__vineta
                  span  ¿Qué decisiones se tomarán?
                li
                  i.lista-ul__vineta
                  span  ¿Qué pasaría si cambian algunos de los datos de entrada al análisis, si cambia alguna situación interna o externa en el sistema empresarial o en algún proceso en particular?                 
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img13.png", alt="alt")  

        div(titulo="Una conclusión no puede pertenecer a un elemento ajeno al objetivo del análisis").p-5.bg5
          .row.justify-content-center
            .col-md-7
              p En caso tal que, durante el proceso de análisis se obtenga un hallazgo “extraño”, aleatorio o no contemplado, deberá integrarse a los datos con mucha pericia y experticia por parte del analista, quien fundamentará la aparición del dato y cómo este dato afecta de manera positiva o negativa, a la situación de análisis. Todo esto se muestra como conclusión.          
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img14.png", alt="alt") 

        div(titulo="No existe un número limitado de conclusiones").p-5.bg5
          .row.justify-content-center
            .col-md-7
              p Las conclusiones pueden ser tan amplias como combinación de hallazgos e intereses de análisis se hayan generado desde un inicio, pero no pueden ser tan específicas como una única conclusión, debido a que limitan el espectro de complejidad empresarial de la situación de análisis. No puede olvidarse que el pensamiento humano es rico en opciones y, precisamente, el trabajo del analista empresarial se basa en el manejo de la mayor cantidad, calidad y oportunidad de información para el desarrollo y crecimiento organizacional. 
            .col-md-5
              figure
                img(src="@/assets/curso/temas/tema2/img15.png", alt="alt")                               

     
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
