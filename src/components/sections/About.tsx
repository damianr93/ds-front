import React from 'react'

const About = () => {
  const stats = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "25+", label: "Clientes Satisfechos" },
    { number: "5+", label: "Años de Experiencia" },
    { number: "100%", label: "Compromiso con la Calidad" }
  ]

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovación",
      description: "Buscamos constantemente nuevas tecnologías y metodologías para ofrecer soluciones de vanguardia."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Calidad",
      description: "Nos comprometemos con la excelencia en cada proyecto, garantizando resultados superiores."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Colaboración",
      description: "Trabajamos en estrecha colaboración con nuestros clientes para entender y superar sus expectativas."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Puntualidad",
      description: "Entregamos proyectos a tiempo, respetando los plazos acordados y manteniendo la comunicación constante."
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quiénes Somos
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              En <span className="font-semibold text-primary-600">Duck Solution</span>, somos un equipo de profesionales apasionados por la tecnología y la innovación. 
              Nuestra misión es transformar ideas innovadoras en soluciones reales que impulsen el crecimiento de nuestros clientes.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Con años de experiencia en desarrollo de software, automatizaciones y consultoría tecnológica, 
              hemos ayudado a empresas de diversos sectores a digitalizar sus procesos y alcanzar sus objetivos comerciales.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                <img src="/logo.png" alt="Duck Solution Logo" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Nuestra Visión
              </h3>
              <p className="text-gray-700 text-center">
                Ser la empresa líder en soluciones informáticas, reconocida por nuestra innovación, 
                calidad y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

