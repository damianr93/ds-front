import React from 'react'

const Clients = () => {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart",
      content: "Duck Solution transformó completamente nuestros procesos. Su equipo de desarrollo creó una solución que aumentó nuestra eficiencia en un 40%.",
      avatar: "MG"
    },
    {
      name: "Carlos Rodríguez",
      position: "Director IT, InnovateCorp",
      content: "La automatización que implementaron nos ahorró miles de horas de trabajo manual. Profesionales excepcionales y resultados superiores.",
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      position: "Fundadora, DigitalFlow",
      content: "Su consultoría tecnológica nos ayudó a tomar las decisiones correctas. Ahora tenemos una infraestructura robusta y escalable.",
      avatar: "AM"
    }
  ]

  const clientLogos = [
    { name: "TechStart", logo: "TS" },
    { name: "InnovateCorp", logo: "IC" },
    { name: "DigitalFlow", logo: "DF" },
    { name: "CloudTech", logo: "CT" },
    { name: "DataSolutions", logo: "DS" },
    { name: "FutureApps", logo: "FA" }
  ]

  return (
    <section id="clients" className="section-padding bg-gray-50">
      <div className="container-max-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas de diversos sectores confían en nosotros para transformar sus ideas en soluciones tecnológicas exitosas.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Empresas que Confían en Nosotros
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-lg group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  {client.logo}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Lo que Dicen Nuestros Clientes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-700 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-secondary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Únete a las empresas que ya transformaron su negocio con nuestras soluciones.
            </p>
            <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Comenzar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients

