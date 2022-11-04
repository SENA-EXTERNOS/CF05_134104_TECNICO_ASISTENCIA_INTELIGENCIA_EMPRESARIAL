export default {
  global: {
    componenteFormativo:
      'Hallazgos, interpretación y presentación de la información',
    descripcionCurso:
      'Este componente, formula la procedencia y utilidad de los hallazgos en función de las necesidades estratégicas de la empresa. Resalta la importancia de la visión de procesos en la obtención, interpretación y presentación de hallazgos, como también la formalidad en la entrega de la información, a partir de informes estructurados y siguiendo los parámetros técnicos y normativos de cada organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Obtención y ordenamiento de datos en un proceso de análisis',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Relación de los datos con los objetivos de análisis',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Procesamiento tecnológico de los datos con base en las necesidades de información',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La interpretación de los hallazgos - Procesos y conclusiones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Presentación formal de la información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Procesamiento tecnológico de datos con base en las necesidades de información',
      referencia:
        'Dongo, A. y Silva, X. (2020). <i>Análisis de la minería de datos aplicada en empresas del sector retail</i> (Tesis de Grado, Universidad Católica San Pablo). Repositorio UCSP. ',
      tipo: 'PDF',
      link:
        'https://repositorio.ucsp.edu.pe/bitstream/20.500.12590/16199/1/DONGO_POZO_ALD_MIN.pdf',
    },
    {
      tema:
        'Procesamiento tecnológico de datos con base en las necesidades de información',
      referencia:
        'CCOO Industria. (2017). <i>La Digitalización y la Industria 4.0. Impacto industrial y laboral.</i>',
      tipo: 'PDF',
      link:
        'https://industria.ccoo.es/4290fc51a3697f785ba14fce86528e10000060.pdf ',
    },
    {
      tema:
        'Procesamiento tecnológico de datos con base en las necesidades de información',
      referencia:
        'Canal Innova. (s.f.). <i>Los 7 mejores programas de software estadístico. Características, ventajas.</i>',
      tipo: 'Página web',
      link:
        'https://canalinnova.com/los-7-mejores-programas-de-software-estadistico/ ',
    },
    {
      tema: 'Presentación formal de la información',
      referencia:
        'Berrío, D., Higuita, S., Echeverri, M., López, E. & Valencia, S. (2020). Responsabilidad Social Empresarial y certificación en calidad: una breve relación documental. <i>Revista Contabilidad y Finanzas, 24</i>(1). p.1-10. ',
      tipo: 'Artículo',
      link:
        'https://revistas.udea.edu.co/index.php/adversia/article/view/343084 ',
    },
    {
      tema: 'Presentación formal de la información',
      referencia:
        'Normas Icontec. (2022). <i>Normas Icontec: Guía (2022).</i> ',
      tipo: 'Página web',
      link: 'https://normasicontec.co/ ',
    },
    {
      tema: 'Presentación formal de la información',
      referencia:
        'Normas APA actualizadas (7ª edición). (2022). <i>Norma APA 2022.</i> ',
      tipo: 'Página web',
      link: 'https://normas-apa.org/etiqueta/normas-apa-2022/ ',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de datos',
      significado:
        'se refiere al proceso de analizar conjuntos de datos para hallar tendencias y extraer conclusiones sobre la información que incluyen; se entregan los resultados, así como se dieron durante la investigación. ',
    },
    {
      termino: 'Conclusión',
      significado:
        'con los datos recaudados, las decisiones se toman sobre la base de los hallazgos; los hallazgos generan las conclusiones, y las conclusiones que estos datos originan, orientan a la toma de decisiones.',
    },
    {
      termino: 'Dato',
      significado:
        'representación de una variable cualitativa o cuantitativa; puede provenir de la realidad y facilitar una evidencia o deducción científica.',
    },
    {
      termino: 'Hallazgos',
      significado:
        'resultados parciales o totales de un proceso de recolección de datos. Los hallazgos son considerados información. ',
    },
    {
      termino: 'Información',
      significado:
        'resultado del procesamiento de datos cuantitativos a través de métodos estadísticos o de datos cualitativos, mediante procesos de interpretación. La información se refiere a datos procesados. ',
    },
    {
      termino: 'Informe',
      significado:
        'documento que contiene información reunida y previamente analizada, según ciertos criterios. El informe, por lo tanto, acopia información y eventos confirmados y estudiados, por quien lo elaboró.',
    },
    {
      termino: 'Interpretación',
      significado:
        'es un proceso de pensamiento y razonamiento, que hoy día cuenta con el apoyo de <i>software</i> que llegan a emitir conclusiones, a partir de la integración de datos. ',
    },
    {
      termino: 'Presentación de la información',
      significado:
        'proceso de preparación de documentación digital o física, material de apoyo o cualquier recurso, a través del cual se muestran los resultados de un proceso de análisis de datos y obtención de resultados. ',
    },
    {
      termino: 'Recolección de datos',
      significado:
        'es el proceso por medio del cual, los observadores aprehenden la información que solicitan, con el objetivo de llevar a cabo un estudio. La recolección de datos es una fase necesaria, preliminar a la ejecución de un estudio estadístico.',
    },
    {
      termino: 'Referencias',
      significado:
        'fuentes de la información que se han tomado como apoyo, desde la obtención de los datos, hasta el proceso de análisis y debate del resultado.',
    },
  ],
  referencias: [
    {
      referencia:
        'CCOO Industria. (2017). <i>La Digitalización y la Industria 4.0. Impacto industrial y laboral.</i>',
      link:
        'https://industria.ccoo.es/4290fc51a3697f785ba14fce86528e10000060.pdf',
    },
    {
      referencia:
        'López, J. (2020). <i>La importancia y necesidad de las certificaciones en el proceso de innovación. Revista Forbes.</i>',
      link:
        'https://www.forbes.com.mx/la-importancia-y-necesidad-de-las-certificaciones-en-el-proceso-de-innovacion/ ',
    },
    {
      referencia:
        'Normas APA actualizadas (7ª edición). (2022). <i>Norma APA 2022.</i>',
      link: 'https://normas-apa.org/etiqueta/normas-apa-2022/',
    },
    {
      referencia: 'Normas Icontec. (2022). <i>Normas Icontec: Guía (2022).</i>',
      link: 'https://normasicontec.co/ ',
    },
    {
      referencia:
        'Villarreal, J., Rosales, Y. & Rodrigo, A. (2018). La perspectiva hermenéutica y el sentido de la comunicación en el contexto de la sociocultura. <i>Anagramas - Rumbos y sentidos de la comunicación, 16(32). p.85-93.</i>',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S1692-25222018000100085 ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
