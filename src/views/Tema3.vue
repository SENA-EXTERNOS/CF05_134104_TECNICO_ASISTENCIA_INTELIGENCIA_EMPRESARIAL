<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg1.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Presentación formal de la información
    .row.justify-content-center
      .tarjeta
        .row.justify-content-center
          .col-sm-6.mb-3.mt-5
            figure
              img(src="@/assets/curso/temas/tema3/img1.png", alt="alt")        
          .col-sm-6.mb-3
            p.mt-5 Para concluir, llegamos al cierre del procesamiento de datos estadísticos, la presentación de las conclusiones, las cuales ofrecen la información, recordando que los datos se someten a procesamiento estadístico para la obtención de información, siendo que los datos por sí solos, no aportan información. Aunque de los sistemas informáticos para la gestión de la información se pueden obtener informes, el análisis del personal experto es fundamental para el cruce (triangulación) de información, comparación con informes históricos, detección de variables clave y puntos de control, identificación de falencias, orientación de nuevas decisiones, entre otros elementos que conforman un informe digital o impreso, producto del procesamiento estadístico de los datos.

    p.mt-5.mb-5 Lo invitamos a ver el siguiente video, donde se amplía la temática sobre la información y su presentación.
    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.align-items-end.bg3.h4.p-3.mt-5 Estructura básica de elementos para la elaboración de un informe  
    p.mt-5.mb-5 Y ¿cómo debe ser la estructura del informe que se presenta? A continuación, se exponen cada uno de los elementos.
    p.mb-5 Todo analista que amerite la elaboración de un informe, debe contemplar la siguiente estructura de elementos y sus aspectos de interés.

    .row.justify-content-center.mt-5    
      .col-md-8
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          .row.justify-content-center
            .col-sm-10  
              figure 
                img(src='@/assets/curso/temas/tema3/img2.png', alt='alt') 

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="41%" y="12%" numero="+")  
          .row.justify-content-center
            p Se presentan los datos de la institución/empresa, título de informe, tema de interés, autor y fecha de elaboración del informe.

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="79%" y="13%" numero="+")  
          .row.justify-content-center
            p Se presenta al lector, la generalidad del contenido que encontrará en cuanto al ordenamiento de la estructura, objetivo del informativo, qué se persigue con el informe. Se relacionan los usuarios de la información y las contribuciones de la misma.	Introducción
 
        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="68%" y="58%" numero="+")  
          .row.justify-content-center
            p Se organiza el contenido del informe en función de los objetivos de análisis, para que contengan un orden lógico secuencial de razonamiento de dicho proceso analítico. Con esto se quiere precisar que los resultados, en un informe, no se presentan de manera aleatoria, sino que deben ser parte de un hilo conductor. 
 
        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="52%" y="72%" numero="+")  
          .row.justify-content-center
            p Deben dar respuesta a los objetivos planteados. Es importante que las conclusiones dejen abierta la posibilidad de interés para ahondar más en el tema, y de la importancia que juega el informe en la gestión organizacional, en el caso que se trate de la empresa. Debe tenerse en cuenta que las conclusiones #[span.text-bold NO SON UN RESUMEN DE RESULTADOS,] sino que van orientadas a mostrar lo que se proyecta con base en los hallazgos. 
 
        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="23%" y="53%" numero="+")  
          .row.justify-content-center
            p Es de suma importancia referir las fuentes de la información que se hayan tomado como apoyo, desde la obtención de los datos, hasta el proceso de análisis y discusión de resultados.  

        .cajon.color-acento-botones.punto-caliente-second-color.px-5.py-4(x="24%" y="19%" numero="+")  
          .row.justify-content-center
            p En los anexos, se inserta cualquier información de apoyo que no sea propia del proceso de análisis emprendido. También se usan los anexos para referir tablas o figuras cuantiosas, que hacen perder el hilo conductor de la lectura del informe. Se suelen incluir imágenes u otros elementos gráficos que no son estrictamente requeridos en el texto principal, sino que juegan un rol de apoyo en la redacción. 

    p.mt-5.mb-5 En la elaboración de informes, se presentan algunos aspectos de interés que se deben tener en cuenta durante el proceso.
    p.mb-5  Estos aspectos son: 

    .row.justify-content-center.mt-5 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-gris.w-tarjeta-gris.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img3.png', alt='')
          h3.text-center La redacción
          p.text-center Debe ser en tercera persona singular, es decir, no redactar términos como: “según pensamos…”, “encontramos…”; por el contrario, se escribe: “se piensa o se considera que…” y, “se encontró o se ha encontrado que…”. Este es el elemento de la redacción que da el criterio de formalidad. Los coloquialismos, considerando la forma de escribir tal cual se habla en el argot cultural, son elementos que restan formalidad a un informe. 
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-gris.w-tarjeta-gris.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt='')
          h3.text-center La no inclusión de “juicios de valor”
          p.text-center Lo que se considera en términos coloquiales, “opinática”, corresponde a la emisión de juicios propios de las opiniones de quien redacta un informe. Si bien es cierto que la opinión y perspectiva del analista juega un rol fundamental, es necesaria la “fundamentación” o cientificidad de la información, lo que se logra con la respectiva confrontación de la información con fuentes fiables de referencia, las cuales provienen de entes formales, artículos científicos o trabajos académicos. 
                   
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-gris.w-tarjeta-gris.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema3/img5.png', alt='')
          h3.text-center La valía de la calidad por sobre la cantidad
          p.text-center La cantidad de páginas de un informe no lo hacen más o menos importante. En un informe se incluye toda la información necesaria para los objetivos de análisis planteados.

    .row.justify-content-md-center.mt-3
      .col-md-10
        .tarjeta.color-tarjeta-descargas.p-3.mt-5
          .row.justify-content-md-center
            .col-1.mt-3
                img(src="@/assets/curso/temas/tema1/img13.png")
            .col-md-8
                h5.mt-3.text-white Informe de gestión.
                p.text-small.text-white Para ampliar la información sobre la estructura y aspectos clave en la redacción de informes, lo invitamos a ver el video Informe de gestión.
            .col-md-1.mt-4
                a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Técnicas, herramientas e instrumentos de recolección de datos más utilizados en las empresas.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download 

    .row.align-items-end.bg3.h4.p-3.mt-5 La normalización en la elaboración de informes
    p.mt-5.mb-5 El producto final del proceso de manejo de hallazgos es, en síntesis, la preparación de informes de acuerdo con las políticas organizacionales. Estos informes deben contener la información que permita la resolución de los asuntos que dieron cabida a la necesidad de recolección de los datos. 
    .row.justify-content-md-center.mt-3
      .col-md-10
        .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
          .row.justify-content-center.p-4                
            p Sin embargo, la emisión de informes bajo normas técnicas, forma parte de las políticas organizacionales y del tipo de empresa. En la medida en que la empresa se encuentre más formalizada en sus procesos, y si la empresa trabaja bajo estándares nacionales de producción de bienes y servicios y también debe rendir los resultados de la gestión ante entes externos, el uso de las normas técnicas resulta obligatorio.

    p.mt-5.mb-5  Introducción	Y estas normas deben estar contenidas en la realización de los informes de gestión. 
    .tarjeta.color-borde-slider.color-slider.p-3.mt-5
      SlyderA(tipo="b").bg5
        .row
          .col-md-6.mb-4.mb-md-0.p-4                        
            p Si una empresa genera productos y servicios exportables, seguramente deberá cumplir ordenamientos técnicos de producción y calidad que tendrá que demostrar en sus informes de gestión, con normativas internacionales, además de normativas nacionales, que permitan la exportación.
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img6.png", alt="alt")

        .row
          .col-md-6.mb-4.mb-md-0.p-4                        
            p Cuando una empresa ha optado por la certificación de sus procesos y servicios, amerita la generación de informes bajo las normas técnicas del ente certificador. 
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img7.png", alt="alt")
          .row.justify-content-md-center              
            .col-md-11                         
              .tarjeta.color-tarjeta-descargas.p-3.mt-5
                .row.justify-content-md-center
                  .col-1.mt-3
                      img(src="@/assets/curso/temas/tema1/img13.png")
                  .col-md-8
                      h5.mt-3.text-white.text-small Responsabilidad Social Empresarial y certificación en calidad: una breve relación documental
                      p.text-small.text-white Para ampliar la información, lo invitamos a leer el documento Responsabilidad Social Empresarial y certificación en calidad: una breve relación documental, el cual se encuentra en el material complementario.
                  .col-md-1.mt-4
                      a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Técnicas, herramientas e instrumentos de recolección de datos más utilizados en las empresas.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-file-download 
        .row
          .col-md-6.mb-4.mb-md-0.p-4                        
            p En Colombia, la norma técnica para la emisión de informes empresariales, conocidos como Informes Ejecutivos, es la Guía Técnica Colombiana GTC-185 estipulada por el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC), ente certificador nacional para la elaboración de documentación organizacional. 
            p.mt-5 Para el caso de los informes, en el punto 9 de la GTC-185, se establecen las clases de informes, sus tipos de uso, además de las características de redacción y presentación. Como apoyo, el ICONTEC (2022), también ofrece un material didáctico para la comprensión y elaboración de estos informes, el cual puede visitar en el material complementario, con el nombre #[span.text-bold Normas Icontec: Guía 2022.]
          .col-md-6
            figure
              img(src="@/assets/curso/temas/tema3/img6.png", alt="alt") 

    .row.justify-content-md-center              
      .col-md-11                         
        .tarjeta.color-tarjeta-descargas.p-3.mt-5
          .row.justify-content-md-center
            .col-1.mt-3
                img(src="@/assets/curso/temas/tema1/img13.png")
            .col-md-8
                h5.mt-3.text-white Normas Icontec: Guía 2022.
                p.text-small.text-white Como apoyo, el ICONTEC (2022), también ofrece un material didáctico para la comprensión y elaboración de estos informes, el cual puede visitar en el material complementario, con el nombre Normas Icontec: Guía 2022.
            .col-md-1.mt-4
                a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Técnicas, herramientas e instrumentos de recolección de datos más utilizados en las empresas.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download

    .row.justify-content-center.bg4.mg-img.mt-5.mb-5.mg-img-final                   
      p.mt-5.mb-5  En el caso de los informes académicos, como apoyo para su aprendizaje, se recomienda la revisión de las Normas Internacionales APA, de la Asociación Americana de Psicología (American Psychological Association o APA en inglés). La importancia de esta norma es que es de uso internacional, y es la base de la mayoría de las normas de redacción de informes de las instituciones educativas. No obstante, la selección y uso de una norma específica para la redacción de un informe, debe poseer orientación organizacional.                                                                  
    
      .row.justify-content-md-center              
        .col-md-11                         
          .tarjeta.color-tarjeta-descargas.p-3.mt-5
            .row.justify-content-md-center
              .col-1.mt-3
                  img(src="@/assets/curso/temas/tema1/img13.png")
              .col-md-8
                  h5.mt-3.text-white Norma APA (2022)
                  p.text-small.text-white En el material complementario, se encuentra la última versión de la Norma APA (2022), como una base esencial y guía didáctica para el aprendiz.
              .col-md-1.mt-4
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/Técnicas, herramientas e instrumentos de recolección de datos más utilizados en las empresas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .row.justify-content-md-center.mt-5
        .col-md-11
          .cajon.tarjeta-radius.color-acento-contenido.cajon-second-color.p-3
            .row.justify-content-center.p-4                
              p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para hacerlo, diríjase al menú principal, donde encontrará la síntesis, material complementario, entre otros. Adicional, lo invitamos a desarrollar la actividad didáctica para reforzar los conceptos estudiados en el componente formativo.


</template>

<script>
export default {
  name: 'Tema3',
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
