<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Obtención y ordenamiento de datos en un proceso de análisis 

    .row.justify-content-center
      .tarjeta
        .row.justify-content-center
          .col-sm-6.mb-3
            p.mt-5 En primer lugar, debemos tener claro que los datos no son un asunto del azar y estos no se recolectan sin un objetivo claro, porque son los insumos de entrada para una exigencia de información. 
            .row.justify-content-center.mt-5
              .col-md-10
                .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
                  .row.justify-content-center.p-4                
                    p Esta información puede estar relacionada con:
                    ul.lista-ul    
                      li
                        i.lista-ul__vineta
                        | Un objetivo para lograr.
                      li
                        i.lista-ul__vineta
                        | Una incertidumbre por resolver.
                      li
                        i.lista-ul__vineta
                        | Una proyección de negocios para emprender. 
          .col-sm-6.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")

    p.mt-5.mb-5  En cualquiera de estos casos, la obtención de los datos se rige por un proceso riguroso de obtención y ordenamiento, con una meta informativa; esta meta puede ser indicada como objetivo de análisis o nicho del requerimiento de información. 
    p.mb-5 En cuanto a la empresa, los requerimientos de información son habituales y diversos, y ameritan datos de distinta índole, tipo y procedencia. De aquí que las empresas generen procesos, procedimientos, técnicas, herramientas y modelos de análisis de los datos para sus propios intereses, o que hagan uso de procedimientos ya estandarizados para tal fin. No obstante, el fin último en la obtención y ordenamiento de datos, es la generación de información con fines determinados.               

    <Separador></Separador>
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Relación de los datos con los objetivos de análisis 

    p.mt-5.mb-5  En todo proceso de análisis #[b se parte de un objetivo propuesto], que amerita un #[b producto o resultado] de análisis, es decir, un #[b hallazgo]:

    p.bg2.ml.text-figuras.mt-5.mb-4 #[span.text-bold Figura 1.]  <br><em>Proceso de análisis</em> 
    figure.mt-5
      img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")

    p.mt-5.mb-5  El hallazgo fijado, transita por un proceso científico de investigación o diagnóstico, que posee cinco etapas particulares, las cuales se constituyen en un ciclo recursivo.

    p.mb-5 Tales etapas se definen y detallan así:

    .row.justify-content-center
      .col-lg-7
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='')

          .tarjeta.color-acento-botones.p-3(x="48.2%" y="23%" numero="1")
              h4 Establecimiento del objetivos
              p.mb-3 Todo proceso de análisis debe partir de un objetivo. El objetivo debe ser alcanzable y manifestar la necesidad de conocimiento de una variable o de un elemento que se quiere investigar. Si el objetivo es conocer la aceptación de un producto, por parte de un consumidor en un estudio de factibilidad, la variable es “la aceptación” y se puede fundamentar en varios datos: aceptación del precio, aceptación del tipo de empaque, aceptación del sabor, entre otros aspectos propios del producto. 

          .tarjeta.color-acento-botones.p-3(x="66.1%" y="33.5%" numero="2")
              h4 Diagnóstico (Recolección de datos)

              p.mb-3 Es el proceso de establecimiento del dato, de la selección de la fuente del dato y del diseño del proceso de recolección. Del tipo de dato depende la fuente de conveniencia; también puede ser que el tipo de fuente ya existente (bases de datos históricas), indique el tipo de dato con que se cuenta. La fuente del dato puede ser personal o digital, y es por eso que el proceso de diagnóstico va a depender del tipo de fuente. Si se trata de muy pocas personas y el dato es cualitativo, puede obtenerse a través de entrevistas; si se trata de muchas personas y los datos son cuantitativos, pueden obtenerse a través de encuestas. 

              p.mb-3 También existen herramientas de medición para datos de objetos o realidades. Un médico recaba el dato de la temperatura con un termómetro; un albañil determina el nivel de colocación de una baldosa con una curva de nivel, y un chef mide la cantidad de un ingrediente, con una balanza. Asimismo, el investigador utiliza guiones de entrevistas, cuestionarios, videos, grabaciones de audio, fotografías, listas de chequeo, entre otros instrumentos de recopilación, en su proceso diagnóstico, <b>hasta recolectar el dato</b>.  

          .tarjeta.color-acento-botones.p-3(x="62.2%" y="65.6%" numero="3")
              h4 Procesamiento de datos
              
              p.mb-3 Recolectados los datos brutos, es decir, tal y como se colectan con los diferentes instrumentos de diagnóstico, se pasan entonces por las herramientas de procesamiento, en especial, si se trata de datos cuantitativos o números de los cuales se pueden obtener frecuencias o cantidades totales, proporciones totales o parciales, proyecciones para años futuros, entre otros datos más específicos, que se pueden lograr con los procesadores de datos tecnológicos o con los procesos manuales que permiten conjugar los de una población general de la cual se obtienen los datos, con una población o muestra de personas y/u objetos. 

          .tarjeta.color-acento-botones.p-3(x="34.2%" y="65.3%" numero="4")
              h4 Análisis (Interpretación de datos)
              p.mb-3 El análisis es el proceso de razonamiento de las causas, consecuencias, procedencias, tendencias, utilidades, veracidad, oportunidad, o cualquier otro aspecto que se quiera generar a partir de los datos, teniendo en cuenta el objetivo que dio origen a su recolección. Todo análisis es un proceso racional y, aunque existen procesadores de datos tecnológicos en el mercado, la empresa aún no puede prescindir del conocimiento humano para la interpretación de los procesos. 

          .tarjeta.color-acento-botones.p-3(x="31.5%" y="34.5%" numero="5")
              h4 Generación de hallazgos
              p.mb-3 <b>Es el resultado, producto del análisis</b>. Todo resultado va atado a su objetivo previo. Puede ser un enunciado o conjunto de enunciados, cantidades globales, predicciones o discusión de resultados, previos al inicio del estudio.

    .row.justify-content-center.mt-5
      .col-md-10
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4 
            p De acuerdo con lo anterior y habiendo establecido el objetivo de conocer la aceptación de un producto, por parte de un consumidor en un estudio de factibilidad, el empresario tendrá que conocer con números y otros datos cualitativos, si es factible o no, emprender con el producto que se tiene estudiado; es decir si, en cuanto al mercado, con los requerimientos técnicos y el estudio económico, legal y ambiental, es posible conformar la empresa para la producción de ese nuevo producto o si, en una empresa ya existente, es posible ampliar la gama de productos.


    .row.align-items-end.bg3.h4.p-3.mt-5 Relación de los datos con los objetivos de análisis
    p.mt-3.mb-3 El siguiente es un ejemplo de cada una de las etapas y su aplicación en el proceso de la toma de decisiones por parte de la empresa:

    .row.justify-content-center
      .tarjeta
        .row.justify-content-center
          .col-sm-7.mb-3
            h4.mt-3 Introducción de la situación
            p.mt-5 Una panadería está interesada en conocer la razón de las bajas de sus ventas, observándose una disminución de la demanda, pero solo por presunciones de la gerencia. El monto de ventas es evidente en los estados de cuenta, pero la disminución de la demanda se ha observado en la merma de clientes en el local, y en mercancía perdida por tiempo de exposición, luego de la producción, especialmente los postres fríos. 
          .col-sm-5.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img4.png", alt="alt") 

    .row.mt-5
      h4 Etapa 1: Desarrollo
      p.mt-5.mb-5 El gerente, con la ayuda del administrador, emprende un proceso de investigación empresarial, con tres objetivos precisos:

    .row.justify-content-center.mt-5
      .col-md-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img5.png')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-4
            h5.text-center Etapa 1. Objetivos de análisis:
            ul.lista-ul    
              li
                i.lista-ul__vineta
                | Obtener información cuantitativa de producción y ventas.
              li
                i.lista-ul__vineta
                | Determinar las causas de la disminución de las ventas.
              li
                i.lista-ul__vineta
                | Generar estrategias para el incremento de las ventas. 

    h4.mt-5 Etapa 2: Diagnóstico y o propósito
    
    p.mt-5.mb-5 Es evidente que el logro de esos objetivos, amerita un proceso de diagnóstico, que inició por identificar: #[span.text-bold ¿Qué se quiere conocer?] Y para cada objetivo, se establecieron las variables o datos que debían ser recabados.

    .row.justify-content-center.mt-5
      .col-sm-12
        figure
          img(src="@/assets/curso/temas/tema1/img6.svg", alt="alt")   

    h4.mt-5 Etapa 3: Procesamiento de los datos
    p.mt-5.mb-5  Con los datos recolectados, se inicia la etapa de procesamiento de los datos que, como se observa, cuenta con un componente cuantitativo y otro cualitativo, obligando a integrar los datos para generar datos conjugados, es decir, información.              

    .row.justify-content-center.mt-5
      .col-md-9
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.tarjeta-rosa.p-4
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img7.png', alt='')
              
            h3.text-center.mb-5 Procesamiento de datos cuantitativos
            p #[span.text-bold Herramientas:] Procesadores de datos estadísticos, como Excel.
            p #[span.text-bold Dato 1: ] Establecimiento de frecuencias de ocurrencia de eventos.
            p #[span.text-bold Dato 2: ] Establecimiento de proporciones (%).
          .col-md.tarjeta.tarjeta-gris.p-4
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img8.png', alt='')
            h3.text-center.mb-5 Procesamiento de datos cualitativos
            p #[span.text-bold Herramientas:] Registros documentales / tablas de relación.
            p #[span.text-bold Dato 1: ] Opiniones del personal, en relación con las fallas.
            p #[span.text-bold Dato 2: ] Percepciones con respecto a la competencia.
            p #[span.text-bold Dato 3: ] Opiniones de los clientes, en cuanto a los atributos de calidad del producto.
            
    h4.mt-5 Etapa 3: Procesamiento de los datos


    .row.justify-content-center.mt-5
      .col-md-11
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.bloque-img-left(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.svg')})`}"
          )                             
          .bloque-texto-g__texto.bloque-text-rigth.p-3
            ul.lista-ul    
              li
                i.lista-ul__vineta
                span.text-small Integración de datos cuantitativos.
              li
                i.lista-ul__vineta
                span.text-small Integración de datos cuantitativos con cualitativos.
              li
                i.lista-ul__vineta
                span.text-small Análisis a profundidad de históricos empresariales internos. 
              li
                i.lista-ul__vineta
                span.text-small Proyecciones esperadas de crecimiento empresarial.
              li
                i.lista-ul__vineta
                span.text-small Orientación de las estrategias planteadas para la mejora.
              li
                i.lista-ul__vineta
                span.text-small Análisis de factibilidad organizacional para el desarrollo de las estrategias.
              li
                i.lista-ul__vineta
                span.text-small Análisis real del impacto de las estrategias en los indicadores de rentabilidad.

    h4.mt-5 Etapa 5: Conclusiones

    h5 Etapa 5
    p.mt-5.mb-5 Se prosigue con la generación de hallazgos, como etapa de cierre. En este ciclo, se debe asegurar el cumplimiento del objetivo.


    .row.justify-content-center.mt-5
      .col-md-9
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.tarjeta-rosa.p-4
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt='')
              
            h3.text-center.mb-5 Se planteó:
            ul.lista-ul    
              li
                i.lista-ul__vineta
                span Obtener información cuantitativa de producción y ventas.
              li
                i.lista-ul__vineta
                span Determinar las causas de la disminución de las ventas.
              li
                i.lista-ul__vineta
                span Generar estrategias para el incremento de las ventas. 

          .col-md.tarjeta.tarjeta-gris.p-4
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img11.png', alt='')
            h3.text-center.mb-5 Se logró:
            ul.lista-ul    
              li
                i.lista-ul__vineta
                span Conocer los datos históricos y actuales asociados con la producción y las ventas.
              li
                i.lista-ul__vineta
                span Conocer las causas de la disminución de las ventas, desde la perspectiva del cliente y del personal.
              li
                i.lista-ul__vineta
                span Proponer estrategias para el incremento de las ventas, con el aporte de clientes, personal y análisis de la competencia.
              li
                i.lista-ul__vineta
                span  Desarrollar un análisis de factibilidad de las propuestas.
              li
                i.lista-ul__vineta
                span  Desarrollar un análisis de impacto de las estrategias, en la rentabilidad.

    p.mt-5.mb-5 En el ejemplo anterior, se evidencia un proceso formal de obtención de hallazgos, a partir del procesamiento de datos, que se convierte en procedimiento y conocimiento empresarial (#[i know how]), y aporta a la veracidad, pertinencia y oportunidad de las decisiones gerenciales.

    <Separador></Separador>
    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2 Procesamiento tecnológico de los datos con base en las necesidades de información

    .row.justify-content-center
      .tarjeta
        .row.justify-content-center
          .col-sm-6.mb-3
            p.mt-5.mb-5 En cuanto a la complejidad de los cálculos matemáticos para el procesamiento de los datos estadísticos, se genera la necesidad de apoyarse en herramientas tecnológicas, de las cuales Excel, es la herramienta base, como hoja de cálculo. Sin embargo, vemos que han surgido en el mercado diversos #[i software] estadísticos especializados, con licencia propia, los cuales pueden ser adquiridos por las empresas, para el manejo de los datos. 
            .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
              .row.justify-content-center.p-4                
                p Asimismo, los sistemas de información empresarial, para la gerencia, las ventas, la producción o la logística, incorporan innumerables herramientas para el procesamiento de los datos y su conversión en información. 
          .col-sm-6.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema1/img12.png", alt="alt")

    p.mt-5.mb-5 Hoy en día, se estima que una empresa que se oriente hacia el desarrollo y crecimiento, debe tener un procesamiento tecnológico de los datos, aunque los procesos empíricos no dejan de existir. Sin embargo, es evidente el aporte que la tecnología ha impreso a la gestión de los datos en el mundo entero, en cualquier contexto y para diferentes utilidades.              

    .row.justify-content-md-center.mt-3
      .col-md-10
        .tarjeta.color-tarjeta-descargas.p-3.mt-5
          .row.justify-content-md-center
            .col-1.mt-3
                img(src="@/assets/curso/temas/tema1/img13.png")
            .col-md-8
                h5.mt-3.text-white Análisis de la minería de datos aplicada en empresas del sector retail
                p.text-small.text-white Profundice en este punto, estudiando con atención el anexo Análisis de la minería de datos aplicada en empresas del sector retail.

            .col-md-2.mt-4
                a.boton.color-acento-botones(href="https://repositorio.ucsp.edu.pe/bitstream/20.500.12590/16199/1/DONGO_POZO_ALD_MIN.pdf" target="_blank")
                  span Ver más 
                  i.fa.fa-link   
    p.mt-5.mb-5 En el transcurso del procesamiento tecnológico de los datos, se encuentran dos temas importantes: 

    .tarjeta.color-borde-slider.color-slider.p-3.mt-5
      SlyderA(tipo="b").bg5
        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Herramientas tecnológicas para el procesamiento de datos y generación de información
            p La necesidad de digitalización de los datos, es el punto de partida en la aparición de herramientas para el procesamiento y generación de datos estadísticos, hoy por hoy en su mayoría, condensados en los sistemas de gestión de la información empresarial. A medida que avanza el desarrollo industrial, prospera la tecnología, y viceversa. Surgen entonces estas herramientas, facilitando la gestión de los procesos, y haciendo más competitivas y productivas a las empresas, al poseer información de primera mano, oportuna y procesada, en función de las necesidades internas y particulares de cada empresa. 
            p El fundamento para el uso de herramientas en el procesamiento y generación de datos estadísticos, es la existencia de bases de datos empresariales, que ofrezcan los datos de entrada. Por lo tanto, la gerencia determina el direccionamiento estratégico de la información, demarcando, en cada proceso, la necesidad de datos de entrada, y el conjunto de datos de salida, que ofrezcan, en el momento requerido, la preparación de informes de desempeño empresarial de las personas y de los procesos. 
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img14.png", alt="alt")
          .row.justify-content-md-center              
            .col-md-11                         
              .tarjeta.color-tarjeta-descargas.p-3.mt-5
                .row.justify-content-md-center
                  .col-1.mt-3
                      img(src="@/assets/curso/temas/tema1/img13.png")
                  .col-md-8
                      h5.mt-3.text-white La Digitalización y la Industria 4.0
                      p.text-small.text-white Amplíe sus conocimientos en tecnologías de procesamiento de datos explorando el anexo La Digitalización y la Industria 4.0.

                  .col-md-2.mt-4
                    a.boton.color-acento-botones(href="https://industria.ccoo.es/4290fc51a3697f785ba14fce86528e10000060.pdf" target="_blank")
                      span Ver más 
                      i.fa.fa-link                

        .row
          .col-md-6.mb-4.mb-md-0.p-4
            h4 Visualización gráfica de los datos
            p El manejo de los datos amerita un proceso de organización, y la estadística descriptiva ofrece las herramientas básicas conocidas como tablas y gráficos, los cuales, además de la organización, favorecen la visualización gráfica, permitiendo una mejor comprensión del comportamiento de los datos. Los procesadores tecnológicos de datos, permiten la elaboración de ambos recursos, y para la estadística, su combinación es fundamental. 
            p En la empresa, es usual encontrar reportes de datos gráficos, debido a que las imágenes son un recurso esencial en la comunicación de la información empresarial, en cualquier área. Los gráficos de producción, las proyecciones de ventas, los resultados en rentabilidad, en su mayoría, son representados a través de visualizaciones estadísticas gráficas.            
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema1/img15.png", alt="alt")


    .row.justify-content-center.mt-5
      .col-md-9
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p De la calidad de los datos recabados, dependerá la utilidad y las contribuciones de las herramientas para el procesamiento y generación de datos estadísticos.

    .row.justify-content-center.bg4.mg-img.mt-5.mb-5.mg-img-final  
     .col-md-11          
        p.mt-5.mb-5 Además, para la familiarización con estas herramientas, se deben desarrollar capacidades tecnológicas por parte del analista. No obstante, la tendencia es que en las empresas se contrate personal especializado para los departamentos administrativos, o que se subcontrate el servicio, tal y como se acostumbra hacer con los procesos contables. Esto ha permitido que surjan empresas especialmente dedicadas al procesamiento de datos, o que profesionales independientes desempeñen esta función de asesoría tecnológica. 
        .row.justify-content-md-center              
          .col-md-11                         
            .tarjeta.color-tarjeta-descargas.p-3.mt-5
              .row.justify-content-md-center
                .col-md-1.mt-3
                    img(src="@/assets/curso/temas/tema1/img13.png")
                .col-md-8
                    h5.mt-3.text-white Los 7 mejores programas de #[i software] estadístico
                    p.text-small.text-white Conozca los #[i software] estadísticos más utilizados en las empresas, en función del buen manejo y mejores opciones de visualización y generación de informes de gestión; estudie a profundidad el anexo Los 7 mejores programas de #[i software] estadístico. 
                .col-md-2.mt-4
                  a.boton.color-acento-botones(href="https://canalinnova.com/los-7-mejores-programas-de-software-estadistico/" target="_blank")
                    span Ver más 
                    i.fa.fa-link        




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
