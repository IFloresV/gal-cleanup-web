// Configuración del sitio en JavaScript (en lugar de JSON)
export const siteConfigData = {
   site: {
      name: 'Gal-Cleanup',
      title: 'Gal-Cleanup | Limpieza Profesional en CDMX',
      description:
         'Gal-Cleanup ofrece servicios profesionales de limpieza residencial, comercial y de oficinas en Ciudad de México. Personal capacitado, productos ecológicos y resultados garantizados.',
      keywords:
         'limpieza profesional, limpieza residencial, limpieza comercial, limpieza de oficinas, limpieza CDMX, servicio de limpieza Ciudad de México, limpieza post-obra, empresa de limpieza México',
      author: 'Gal-Cleanup',
      locale: 'es_MX',
      language: 'es',
   },
   urls: {
      production: 'https://gal-cleanup.com.mx/',
      staging: 'https://stage.gal-cleanup.com.mx',
      development: 'http://localhost:7001',
   },
   social: {
      instagram: 'https://www.instagram.com/gal_cleanup/',
   },
   contacto: {
      WHATSAPP: '+5215636663808',
      EMAIL: 'atencion_clientes@gal-cleanup.com.mx',
      TELEFONO: '+525636663808',
      DIRECCION: 'CDMX, Alvaro Obregón. San Bartolo Ameyalco, Cda de Cedros # 34B',
   },
   footer: {
      COPYRIGHT: 'Gal-Cleanup © - Todos Los Derechos Reservados - 2026',
   },
   assets: {
      logo: ' /img/LogoTxt.png',
      logoshort: ' /img/Logo.png',
      defaultOgImage: '/img/default-og-image.jpg',
      favicon: '/img/ico-gal-cleanup.ico',
   },
   business: {
      country: 'Mexico',
      serviceType: 'Servicios',
      availableLanguage: 'Spanish',
   },
   seo: {
      robots: {
         staging: 'noindex, nofollow',
         production: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },
      themeColor: '#1a365d',
   },
};
