<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
    .tarjeta
      .row.justify-content-left
        .col-sm-4.mb-3.mt-5
          figure
            img(src="@/assets/curso/temas/introduccion.png", alt="alt")
        .col-sm-8.mb-3
          p.mt-5 Apreciado aprendiz, bienvenido a este componente formativo, donde se trabajará sobre la obtención de hallazgos y la interpretación y presentación de la información para la empresa. También podrá encontrar las respuestas en cuanto a cómo, dónde y cuándo, obtener datos que lleven a la generación de hallazgos, que aporten utilidad para el proceso de la toma de decisiones de una situación empresarial cualquiera, o de una situación analítica general, en cualquier contexto. Se debe recordar siempre la premisa que dice: la clave para la obtención de los hallazgos, es la precisión y asertividad del proceso de interpretación, con apoyo en los métodos estadísticos, lo que aprenderá en este componente, y le permitirá obtener la preparación y presentación oportuna y pertinente, de los hallazgos en documentos formales para la empresa, bajo sus propios parámetros técnicos y normativos.

    p.mb-5.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video        
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
