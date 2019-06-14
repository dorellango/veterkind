let products = [
  {
    title: 'Mesa Veterinaria Veterkind® 1200 Sirona',
    short_description: ' 1.20m de largo x 60cm de ancho. Elevación con ajuste hidráulico [...]',
    description: '.1.20m de largo x 60cm de ancho. -Altura regulable mediante sistema hidráulico: desde 60cm hasta 1.20m de altura. Estructura 100% metálica. Cubierta en acero inoxidable grado médico. Elevación con ajuste hidráulico hasta 45º (Trendelenburg). Canal diamantado y orificio de drenaje. Porta recipiente movible y desmontable. Recipiente de acero para fluidos. Porta bandeja mayo de 36cm x 27cm movible en 360º. Brazo acero para cogotera, altura regulable, desmontable. […]',
    image: 'mesa-sirona.jpg',
    is_new: true
  },
  {
    title: 'Mesa Veterinaria Veterkind® 3600 Eira',
    short_description: 'Elevación con ajuste hidráulico hasta 45º (Trendelenburg) [...]',
    description: 'Con canal diamantado y orificio de drenaje. Porta recipiente movible y desmontable. Recipiente de acero para fluidos . Porta bandeja movible en 360º . Bandeja de acero inoxidable para instrumentos quirúrgicos desmontable. Bandeja para ayudante desmontable. Brazo acero para cogotera, altura regulable, desmontable. Estructura 100% metálica . Porta suero con 4 ganchos desmontable […]',
    image: 'mesa-3600.jpg'
  },
  {
    title: 'Portasueros para Canil',
    short_description: 'Diseñados especialmente para la hospitalización [...]',
    description: 'Nuestro portasueros para canil están diseñados especialmente para la hospitalización, en nuestros 2 modelos, se ajustan a la rejilla del canil, otorgando un ajuste seguro y práctico para la administración de terapia de fluidos en nuestros pacientes hospitalizados. Estructura en perfil de 1.0mm. Pintura electroestática al horno. Sistema opcional con o sin bandeja. Sencillo sistema de anclaje, fácilmente desmontable y con ajuste seguro anticaída.',
    image: 'portasueros-canil.jpg'
  },
  {
    title: 'Mesa Veterinaria Veterkind® 2200 Eira',
    short_description: 'Cubierta en acero inoxidable grado médico, plegable [...]',
    description: 'Totalmente Plegable. Estructura 100% metálica, medidas 1.20 de largo x 60 de ancho y 85 de alto regulable hasta 1, 0 mt. Manijas laterales para fijación de paciente, manilla para traslado y canal diamantado y orificio de drenaje. Porta bandeja movible en 360º, porta suero con 4 ganchos desmontable, lámpara clínica con cuello flexible, recipiente de acero para fluidos. Lámpara clínica con cuello flexible todas las posiciones desmontable.',
    image: 'quirurgica-completa.jpg'
  },
  {
    title: 'Mesa Veterinaria Veterkind® 1200 Eira',
    short_description: 'Cubierta en acero inoxidable grado médico, plegable [...]',
    description: 'Totalmente Plegable. Estructura 100% metálica, medidas 1.20 de largo x 60 de ancho y 85 de alto regulable hasta 1, 0 mt. Manijas laterales para fijación de paciente, manilla para traslado y canal diamantado y orificio de drenaje. Regulador de alzador de funcionamiento independiente(en caso que la mesa esté ubicada en superficie irregular, lo que le a nos centímetros más de altura). Cubierta en acero inoxidable grado médico.',
    image: 'quirurgica-basica.jpg'
  },
  {
    title: 'Mesa Mayo (40X30)',
    short_description: 'Estructura en perfil cuadrado de 1.0 mm. [...]',
    description: 'Estructura en perfil cuadrado de 1.0 mm. Pintura Martillado grafito, bandeja de acero inoxidable y de altura regulable. Incluye ruedas con freno. Dimensiones  BANDEJA 40X30. Color GRIS.',
    image: 'mesa-mayo-2.jpg'
  },
  {
    title: 'Mesa Mayo (60X40)',
    short_description: 'Estructura en perfil cuadrado de 1.0 mm. [...]',
    description: 'Estructura en perfil cuadrado de 1.0 mm. Pintura Martillado grafito, bandeja de acero inoxidable y de altura regulable. Incluye ruedas con freno. Dimensiones  BANDEJA 60X40. Color GRIS.',
    image: 'mesa-mayo.jpg'
  },
  {
    title: 'Porta Sueros',
    short_description: 'Estructura en perfil cuadrado de 1.0 mm. [...]',
    description: 'Estructura en perfil cuadrado de 1.0 mm. Pintura Martillado grafito. Bandeja de acero inoxidable. Altura regulable. Dimensiones  BANDEJA 40X30. Color GRIS. Marca Veterkind ®, hecho en CHILE.',
    image: 'porta-sueros.jpg'
  },
  {
    title: 'Camilla Transporte Veterinaria Plegable',
    short_description: 'Mesa-camilla de exploración plegable con ruedas. [...]',
    description: 'Mesa-camilla de exploración plegable con ruedas. Estructura 100% metálica, ultra liviana, inoxidable. Resiste hasta 90 kilos. Superficie de lona ultra resistente, impermeable y lavable. Ruedas giratorias de alto tráfico con freno. Sujeción, correas con velcro para seguridad y control animal. Plegable para mayor comodidad. Garantía 1 año. Largo: 100cm, Ancho: 50cm, Alto: 80cm. Color según disponibilidad.',
    image: 'mesa-plegable-mayo.jpg'
  },
  {
    title: 'Mesa Veterinaria Veterkind® 2600 Eira',
    short_description: 'Mesa de cirugía y procedimiento modelo premium [...]',
    description: 'Totalmente plegable, tipo maleta, para trasladar cómodamente a terreno u operativos. Para uso en clínica, cirugía, procedimientos, baño sanitario. Ruedas para traslado cómodo. Arco de sujeción para baño sanitario apto peluquería, procedimientos y examen clínico. Cubierta de acero inoxidable en 1mm. Acero grado médico. Medidas: 1.20 x 60 cm. Altura regulable desde 85 cm a 1.0 mt. Con canal diamantado y orificio de drenaje. Recipiente para fluidos de acero, movible y desmontable. Porta bandejas movible en 360°. Bandeja de acero inoxidable, para instrumentos quirúrgicos desmontables […]',
    image: 'mesa-premium.jpg'
  },
  {
    title: 'Caniles Modulares',
    short_description: 'Caniles a medida cierre malla o galvanizado [...]',
    description: 'Caniles a medida cierre malla o galvanizado. Medidas a solicitud. Módulos apilables. Opción con ruedas en base. Perfil 30/20 - 20/20. Malla Soldgalv 3,4, en puerta y muros. Picaportes de seguridad. Pernos de montaje. Soldadura Mig. Bandeja recolectora en 1,5mm lavable. Opción 100% en acero inoxidable.',
    image: 'caniles-modulares.jpg'
  }
]

export default products
