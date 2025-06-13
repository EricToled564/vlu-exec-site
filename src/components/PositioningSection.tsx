
'use client'

import { Target, Users, Star, MapPin, Heart, Waves } from 'lucide-react'

export default function PositioningSection() {
  const positioningElements = {
    core: {
      statement: "Tu santuario exclusivo junto al lago para bienestar, recreación y experiencias auténticas de Morelos",
      tagline: "Un escape de fin de semana sin igual donde la tranquilidad del agua se encuentra con el lujo boutique",
      essence: "Tranquilidad Premium junto al Lago"
    },
    differentiation: [
      {
        factor: "Ubicación Única",
        description: "Único resort boutique directamente en las orillas del lago Tequesquitengo",
        advantage: "Experiencias acuáticas exclusivas",
        icon: MapPin,
        color: "blue"
      },
      {
        factor: "Experiencias Auténticas",
        description: "Conexión genuina con la cultura y naturaleza de Morelos",
        advantage: "Inmersión cultural diferenciada",
        icon: Heart,
        color: "red"
      },
      {
        factor: "Bienestar Integral",
        description: "Enfoque holístico en wellness físico, mental y espiritual",
        advantage: "Transformación personal completa",
        icon: Waves,
        color: "green"
      },
      {
        factor: "Lujo Boutique",
        description: "Servicio personalizado en ambiente íntimo y exclusivo",
        advantage: "Atención individualizada premium",
        icon: Star,
        color: "purple"
      }
    ],
    targetSegments: [
      {
        segment: "Profesionales Urbanos",
        description: "Ejecutivos y profesionales de CDMX buscando desconexión",
        needs: ["Escape del estrés", "Experiencias de calidad", "Proximidad"],
        positioning: "Tu refugio ejecutivo para recargar energías",
        size: "35%"
      },
      {
        segment: "Parejas Románticas",
        description: "Parejas celebrando ocasiones especiales o buscando reconexión",
        needs: ["Intimidad", "Experiencias románticas", "Memorias especiales"],
        positioning: "El escenario perfecto para tu historia de amor",
        size: "25%"
      },
      {
        segment: "Familias Premium",
        description: "Familias de ingresos altos buscando experiencias de calidad",
        needs: ["Actividades familiares", "Seguridad", "Entretenimiento"],
        positioning: "Donde las familias crean recuerdos inolvidables",
        size: "20%"
      },
      {
        segment: "Wellness Seekers",
        description: "Personas enfocadas en bienestar y crecimiento personal",
        needs: ["Relajación", "Actividades wellness", "Transformación"],
        positioning: "Tu santuario de transformación personal",
        size: "20%"
      }
    ],
    competitive: {
      vlu: {
        position: "Santuario Boutique junto al Lago",
        strengths: ["Ubicación única", "Experiencias acuáticas", "Servicio personalizado"],
        price: "Premium",
        experience: "Transformacional"
      },
      competitors: [
        {
          name: "Hoteles Boutique Urbanos",
          position: "Lujo en la Ciudad",
          weakness: "Sin conexión con naturaleza",
          price: "Premium+",
          experience: "Sofisticada"
        },
        {
          name: "Resorts de Playa",
          position: "Escape Tropical",
          weakness: "Distancia y masificación",
          price: "Premium",
          experience: "Relajante"
        },
        {
          name: "Airbnb Local",
          position: "Alojamiento Económico",
          weakness: "Sin servicios premium",
          price: "Económico",
          experience: "Básica"
        }
      ]
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200",
      red: "from-red-500 to-red-600 text-red-600 bg-red-50 border-red-200",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200"
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Posicionamiento Estratégico</h2>
      <p className="text-gray-600 mb-8">
        Definición integral de la propuesta de valor única y diferenciación competitiva de VLU Hospitality
      </p>

      {/* Core Positioning */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg mb-8 border-2 border-blue-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Posicionamiento Central</h3>
          <blockquote className="text-xl text-blue-900 font-medium italic mb-4">
            "{positioningElements.core.statement}"
          </blockquote>
          <p className="text-lg text-gray-700 mb-4">{positioningElements.core.tagline}</p>
          <div className="inline-block bg-white px-6 py-3 rounded-full border-2 border-blue-300">
            <span className="text-blue-900 font-bold">Esencia: {positioningElements.core.essence}</span>
          </div>
        </div>
      </div>

      {/* Differentiation Factors */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Factores de Diferenciación</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positioningElements.differentiation.map((factor, index) => {
            const Icon = factor.icon
            const colorClasses = getColorClasses(factor.color)
            
            return (
              <div key={index} className={`border-2 rounded-lg p-6 ${colorClasses.split(' ').slice(2).join(' ')}`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{factor.factor}</h4>
                </div>
                <p className="text-gray-700 mb-3">{factor.description}</p>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorClasses.split(' ')[2]} bg-white border`}>
                  {factor.advantage}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Target Segments Positioning */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Posicionamiento por Segmento</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {positioningElements.targetSegments.map((segment, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">{segment.segment}</h4>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {segment.size}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">{segment.description}</p>
              
              <div className="mb-4">
                <h5 className="font-medium text-gray-900 mb-2">Necesidades Clave:</h5>
                <div className="flex flex-wrap gap-2">
                  {segment.needs.map((need, needIndex) => (
                    <span key={needIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {need}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                <h5 className="font-medium text-blue-900 mb-1">Posicionamiento:</h5>
                <p className="text-blue-800 italic">"{segment.positioning}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Positioning Map */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Mapa de Posicionamiento Competitivo</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* VLU Position */}
            <div className="bg-blue-600 text-white p-4 rounded-lg">
              <h4 className="font-bold mb-2">VLU Hospitality</h4>
              <p className="text-sm mb-3">{positioningElements.competitive.vlu.position}</p>
              <div className="space-y-1">
                {positioningElements.competitive.vlu.strengths.map((strength, index) => (
                  <div key={index} className="text-xs bg-blue-500 px-2 py-1 rounded">
                    {strength}
                  </div>
                ))}
              </div>
              <div className="mt-3 text-xs">
                <div>Precio: {positioningElements.competitive.vlu.price}</div>
                <div>Experiencia: {positioningElements.competitive.vlu.experience}</div>
              </div>
            </div>

            {/* Competitors */}
            {positioningElements.competitive.competitors.map((competitor, index) => (
              <div key={index} className="bg-white border-2 border-gray-300 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">{competitor.name}</h4>
                <p className="text-sm text-gray-700 mb-3">{competitor.position}</p>
                <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded mb-3">
                  Debilidad: {competitor.weakness}
                </div>
                <div className="text-xs text-gray-600">
                  <div>Precio: {competitor.price}</div>
                  <div>Experiencia: {competitor.experience}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Pillars */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Pilares de Marca</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Waves className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Conexión con la Naturaleza</h4>
            <p className="text-gray-700 text-sm">
              Experiencias auténticas que conectan a los huéspedes con el entorno natural del lago y la región
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Bienestar Integral</h4>
            <p className="text-gray-700 text-sm">
              Enfoque holístico en el bienestar físico, mental y espiritual de cada huésped
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Excelencia Personalizada</h4>
            <p className="text-gray-700 text-sm">
              Servicio boutique que anticipa y supera las expectativas individuales de cada huésped
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
