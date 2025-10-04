import React, { useState, useEffect } from 'react'

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const teamMembers = [
    {
      id: 0,
      name: "Lic. Angel Damian Rodriguez",
      role: "Co-Fundador & Líder Técnico",
      description: "Desarrollador con vasta experiencia en entornos desafiantes. Lidera la innovación tecnológica y el desarrollo de soluciones complejas.",
      image: "/us/dr.jpeg",
      isDog: false
    },
    {
      id: 1,
      name: "Lic. Juan Cruz Sarno",
      role: "Co-Fundador & Director de Innovación",
      description: "Experto en marketing, sociedades y conducción de equipos. Con vasta experiencia en entornos empresariales y estrategias de crecimiento.",
      image: "/us/jcs.jpeg",
      isDog: false
    },
    {
      id: 2,
      name: "Genesis Abigail Mayorga",
      role: "Directora de RRHH & RRPP",
      description: "Especialista en recursos humanos y relaciones públicas. Se encarga de construir y mantener las relaciones con clientes y el equipo.",
      image: "/us/gam.jpg",
      isDog: false
    },
    {
      id: 3,
      name: "El Pato",
      role: "CEO Canino & Inspirador del Nombre",
      description: "El verdadero fundador de Duck Solution. Su sabiduría canina y su carisma único inspiraron el nombre de nuestra empresa. Especialista en motivación del equipo y en hacer que todos los días sean más divertidos.",
      image: "/us/pato.jpg",
      isDog: true
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [teamMembers.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length)
  }

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-max-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a las personas detrás de Duck Solution. Un equipo apasionado por la tecnología y la innovación.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carrusel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamMembers.map((member) => (
                <div key={member.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Imagen */}
                    <div className="flex items-center justify-center">
                      <div className="relative">
                        <div className={`w-80 h-80 rounded-full overflow-hidden shadow-lg ${
                          member.isDog ? 'ring-4 ring-secondary-400' : 'ring-4 ring-primary-400'
                        }`}>
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {member.isDog && (
                          <div className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            🐕 CEO
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Información */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                          member.isDog ? 'text-secondary-600' : 'text-gray-900'
                        }`}>
                          {member.name}
                        </h3>
                        <p className={`text-lg font-semibold mb-4 ${
                          member.isDog ? 'text-secondary-500' : 'text-primary-600'
                        }`}>
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {member.description}
                        </p>
                      </div>

                      {member.isDog && (
                        <div className="bg-secondary-50 rounded-lg p-4">
                          <p className="text-secondary-700 text-sm italic">
                            "¡Guau! ¡Guau! ¡Guau!" - El Pato, CEO Canino
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navegación */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center space-x-3 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-primary-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Información adicional */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ¿Por qué elegir nuestro equipo?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Equipo Multidisciplinario</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Experiencia Comprobada</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Pasión por la Innovación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
