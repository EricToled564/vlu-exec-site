
'use client'

import { Users, TrendingUp, DollarSign, MapPin, Heart, Briefcase, Baby, Leaf } from 'lucide-react'
import dynamic from 'next/dynamic'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function SegmentationSection() {
  const segments = [
    {
      id: 'professionals',
      name: 'Profesionales Urbanos',
      size: '35%',
      value: 'USD 6.5M',
      growth: '8.2%',
      icon: Briefcase,
      color: 'blue',
      demographics: {
        age: '28-45 años',
        income: '$50,000+ USD',
        location: 'CDMX, Guadalajara, Monterrey',
        lifestyle: 'Urbano, alto estrés'
      },
      psychographics: {
        values: ['Eficiencia', 'Calidad', 'Estatus'],
        interests: ['Wellness', 'Networking', 'Experiencias premium'],
        painPoints: ['Estrés laboral', 'Falta de tiempo', 'Necesidad de desconexión']
      },
      behavior: {
        bookingWindow: '2-4 semanas',
        stayDuration: '2-3 días',
        spendingPattern: 'Alto valor, experiencias premium',
        seasonality: 'Fines de semana largos'
      },
      strategy: {
        positioning: 'Tu refugio ejecutivo para recargar energías',
        channels: ['LinkedIn', 'Google Ads', 'Partnerships corporativos'],
        messaging: 'Escape del estrés urbano en un santuario de tranquilidad',
        offers: ['Paquetes ejecutivos', 'Retiros de wellness', 'Experiencias de networking']
      }
    },
    {
      id: 'couples',
      name: 'Parejas Románticas',
      size: '25%',
      value: 'USD 4.7M',
      growth: '12.5%',
      icon: Heart,
      color: 'red',
      demographics: {
        age: '25-50 años',
        income: '$40,000+ USD',
        location: 'Nacional e internacional',
        lifestyle: 'Celebraciones especiales'
      },
      psychographics: {
        values: ['Romance', 'Intimidad', 'Memorias'],
        interests: ['Experiencias únicas', 'Fotografía', 'Gastronomía'],
        painPoints: ['Rutina diaria', 'Falta de tiempo juntos', 'Búsqueda de conexión']
      },
      behavior: {
        bookingWindow: '4-8 semanas',
        stayDuration: '2-4 días',
        spendingPattern: 'Premium en experiencias románticas',
        seasonality: 'San Valentín, aniversarios, propuestas'
      },
      strategy: {
        positioning: 'El escenario perfecto para tu historia de amor',
        channels: ['Instagram', 'Pinterest', 'Wedding planners'],
        messaging: 'Crea recuerdos inolvidables en un entorno mágico',
        offers: ['Paquetes románticos', 'Lunas de miel', 'Propuestas de matrimonio']
      }
    },
    {
      id: 'families',
      name: 'Familias Premium',
      size: '20%',
      value: 'USD 3.7M',
      growth: '6.8%',
      icon: Baby,
      color: 'green',
      demographics: {
        age: '30-50 años (padres)',
        income: '$60,000+ USD',
        location: 'Ciudades principales',
        lifestyle: 'Familias con niños 5-15 años'
      },
      psychographics: {
        values: ['Familia', 'Seguridad', 'Educación'],
        interests: ['Actividades familiares', 'Naturaleza', 'Cultura'],
        painPoints: ['Tiempo de calidad familiar', 'Entretenimiento para niños', 'Seguridad']
      },
      behavior: {
        bookingWindow: '6-12 semanas',
        stayDuration: '3-5 días',
        spendingPattern: 'Moderado-alto, enfoque en actividades',
        seasonality: 'Vacaciones escolares, puentes'
      },
      strategy: {
        positioning: 'Donde las familias crean recuerdos inolvidables',
        channels: ['Facebook', 'Blogs familiares', 'Escuelas privadas'],
        messaging: 'Aventuras familiares en un entorno seguro y divertido',
        offers: ['Paquetes familiares', 'Kids club', 'Actividades educativas']
      }
    },
    {
      id: 'wellness',
      name: 'Wellness Seekers',
      size: '20%',
      value: 'USD 3.7M',
      growth: '15.3%',
      icon: Leaf,
      color: 'purple',
      demographics: {
        age: '35-65 años',
        income: '$45,000+ USD',
        location: 'Nacional e internacional',
        lifestyle: 'Enfocados en bienestar'
      },
      psychographics: {
        values: ['Salud', 'Mindfulness', 'Crecimiento personal'],
        interests: ['Yoga', 'Meditación', 'Nutrición', 'Spa'],
        painPoints: ['Estrés', 'Desequilibrio vida-trabajo', 'Búsqueda de propósito']
      },
      behavior: {
        bookingWindow: '3-6 semanas',
        stayDuration: '3-7 días',
        spendingPattern: 'Alto en servicios wellness',
        seasonality: 'Enero (propósitos), primavera, otoño'
      },
      strategy: {
        positioning: 'Tu santuario de transformación personal',
        channels: ['Wellness blogs', 'Yoga studios', 'Influencers wellness'],
        messaging: 'Reconecta contigo mismo en un oasis de tranquilidad',
        offers: ['Retiros wellness', 'Programas detox', 'Experiencias mindfulness']
      }
    }
  ]

  const segmentSizeData = {
    labels: segments.map(s => s.name),
    values: [35, 25, 20, 20],
    type: 'pie',
    marker: {
      colors: ['#3B82F6', '#EF4444', '#10B981', '#8B5CF6']
    }
  }

  const segmentValueData = {
    x: segments.map(s => s.name),
    y: [6.5, 4.7, 3.7, 3.7],
    type: 'bar',
    marker: {
      color: ['#3B82F6', '#EF4444', '#10B981', '#8B5CF6']
    },
    name: 'Valor del Segmento (M USD)'
  }

  const segmentGrowthData = {
    x: segments.map(s => s.name),
    y: [8.2, 12.5, 6.8, 15.3],
    type: 'bar',
    marker: {
      color: ['#3B82F6', '#EF4444', '#10B981', '#8B5CF6']
    },
    name: 'Crecimiento Anual (%)'
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
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Segmentación de Mercado Objetivo</h2>
      <p className="text-gray-600 mb-8">
        Análisis detallado de los segmentos de clientes prioritarios para VLU Hospitality
      </p>

      {/* Segment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {segments.map((segment) => {
          const Icon = segment.icon
          const colorClasses = getColorClasses(segment.color)
          
          return (
            <div key={segment.id} className={`border-2 rounded-lg p-6 ${colorClasses.split(' ').slice(2).join(' ')}`}>
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white mr-3`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{segment.name}</h3>
                  <p className="text-sm text-gray-600">{segment.size} del mercado</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Valor:</span>
                  <span className="font-semibold text-gray-900">{segment.value}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Crecimiento:</span>
                  <span className={`font-semibold ${colorClasses.split(' ')[2]}`}>{segment.growth}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribución por Tamaño</h3>
          <Plot
            data={[segmentSizeData]}
            layout={{
              showlegend: true,
              margin: { l: 20, r: 20, t: 20, b: 20 }
            }}
            style={{ width: '100%', height: '250px' }}
            config={{ responsive: true, displayModeBar: false }}
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Valor por Segmento</h3>
          <Plot
            data={[segmentValueData]}
            layout={{
              xaxis: { title: '' },
              yaxis: { title: 'Millones USD' },
              showlegend: false,
              margin: { l: 50, r: 20, t: 20, b: 80 }
            }}
            style={{ width: '100%', height: '250px' }}
            config={{ responsive: true, displayModeBar: false }}
          />
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Crecimiento Anual</h3>
          <Plot
            data={[segmentGrowthData]}
            layout={{
              xaxis: { title: '' },
              yaxis: { title: 'Porcentaje (%)' },
              showlegend: false,
              margin: { l: 50, r: 20, t: 20, b: 80 }
            }}
            style={{ width: '100%', height: '250px' }}
            config={{ responsive: true, displayModeBar: false }}
          />
        </div>
      </div>

      {/* Detailed Segment Analysis */}
      <div className="space-y-8">
        {segments.map((segment) => {
          const Icon = segment.icon
          const colorClasses = getColorClasses(segment.color)
          
          return (
            <div key={segment.id} className={`border-2 rounded-lg ${colorClasses.split(' ').slice(2).join(' ')}`}>
              <div className={`p-4 bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white rounded-t-lg`}>
                <div className="flex items-center">
                  <Icon className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">{segment.name}</h3>
                  <div className="ml-auto text-right">
                    <div className="text-sm opacity-90">Participación</div>
                    <div className="text-lg font-bold">{segment.size}</div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Demographics */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Demografía</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600">Edad:</span>
                        <div className="font-medium">{segment.demographics.age}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Ingresos:</span>
                        <div className="font-medium">{segment.demographics.income}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Ubicación:</span>
                        <div className="font-medium text-sm">{segment.demographics.location}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Estilo de vida:</span>
                        <div className="font-medium text-sm">{segment.demographics.lifestyle}</div>
                      </div>
                    </div>
                  </div>

                  {/* Psychographics */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Psicografía</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600">Valores:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {segment.psychographics.values.map((value, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {value}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Intereses:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {segment.psychographics.interests.map((interest, index) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Behavior */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Comportamiento</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600">Reserva:</span>
                        <div className="font-medium text-sm">{segment.behavior.bookingWindow}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Estadía:</span>
                        <div className="font-medium text-sm">{segment.behavior.stayDuration}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Gasto:</span>
                        <div className="font-medium text-sm">{segment.behavior.spendingPattern}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Temporada:</span>
                        <div className="font-medium text-sm">{segment.behavior.seasonality}</div>
                      </div>
                    </div>
                  </div>

                  {/* Strategy */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Estrategia</h4>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm text-gray-600">Posicionamiento:</span>
                        <div className="font-medium text-sm italic">"{segment.strategy.positioning}"</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Canales:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {segment.strategy.channels.map((channel, index) => (
                            <span key={index} className={`px-2 py-1 rounded text-xs text-white bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')}`}>
                              {channel}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Strategy Details */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Mensaje Clave:</h5>
                      <p className="text-gray-700 text-sm italic">"{segment.strategy.messaging}"</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Ofertas Principales:</h5>
                      <ul className="space-y-1">
                        {segment.strategy.offers.map((offer, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-center">
                            <span className={`w-2 h-2 rounded-full mr-2 bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')}`}></span>
                            {offer}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Strategic Recommendations */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recomendaciones Estratégicas por Segmento</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Prioridad Alta (Profesionales + Wellness)</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <TrendingUp className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Desarrollar paquetes ejecutivos de wellness para profesionales estresados</span>
              </li>
              <li className="flex items-start">
                <Users className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Crear retiros de fin de semana enfocados en desconexión digital</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Implementar pricing premium para experiencias transformacionales</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Crecimiento (Parejas + Familias)</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Heart className="w-4 h-4 text-red-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Expandir ofertas románticas con experiencias junto al lago</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Desarrollar actividades familiares educativas y de aventura</span>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Crear partnerships con wedding planners y escuelas privadas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
