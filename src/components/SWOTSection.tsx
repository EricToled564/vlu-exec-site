
'use client'

import { Shield, TrendingUp, AlertTriangle, Zap } from 'lucide-react'

export default function SWOTSection() {
  const swotData = {
    strengths: [
      {
        title: "Ubicación Excepcional",
        description: "Calificación de 8.4/10 en ubicación, junto al lago Tequesquitengo",
        impact: "Alto"
      },
      {
        title: "Calidad Superior",
        description: "Calificación general de 7.9/10, superior al promedio de competencia (7.2)",
        impact: "Alto"
      },
      {
        title: "Limpieza Destacada",
        description: "Calificación de 8.4/10 en limpieza, factor crítico post-COVID",
        impact: "Medio"
      },
      {
        title: "Experiencia Única",
        description: "Actividades acuáticas y experiencias junto al lago diferenciadas",
        impact: "Alto"
      },
      {
        title: "Proximidad a CDMX",
        description: "Ubicación estratégica a 1.5 horas de la Ciudad de México",
        impact: "Alto"
      }
    ],
    weaknesses: [
      {
        title: "Baja Ocupación",
        description: "Tasa de ocupación del 45% vs potencial del 65%+",
        impact: "Alto"
      },
      {
        title: "Percepción de Valor",
        description: "Calificación de 7.2/10 en relación calidad-precio",
        impact: "Medio"
      },
      {
        title: "Presencia Digital Limitada",
        description: "Solo 120 reseñas a pesar de alta satisfacción",
        impact: "Medio"
      },
      {
        title: "Dependencia de OTAs",
        description: "85% de reservas a través de plataformas externas",
        impact: "Medio"
      },
      {
        title: "Estacionalidad",
        description: "Variaciones significativas en ocupación por temporada",
        impact: "Medio"
      }
    ],
    opportunities: [
      {
        title: "Crecimiento del Mercado",
        description: "Mercado de hospitalidad boutique creciendo 6.8% CAGR",
        impact: "Alto"
      },
      {
        title: "Turismo de Bienestar",
        description: "Segmento de wellness tourism en expansión (28% del mercado)",
        impact: "Alto"
      },
      {
        title: "Turismo Sustentable",
        description: "Creciente demanda por experiencias eco-friendly",
        impact: "Medio"
      },
      {
        title: "Digitalización",
        description: "Oportunidades de optimización en canales digitales",
        impact: "Medio"
      },
      {
        title: "Experiencias Personalizadas",
        description: "Demanda creciente de experiencias únicas y customizadas",
        impact: "Alto"
      },
      {
        title: "Mercados Internacionales",
        description: "Potencial de expansión a turistas extranjeros",
        impact: "Medio"
      }
    ],
    threats: [
      {
        title: "Competencia Airbnb",
        description: "670 propiedades locales creando presión en precios",
        impact: "Alto"
      },
      {
        title: "Volatilidad Económica",
        description: "Sensibilidad del turismo a cambios económicos",
        impact: "Medio"
      },
      {
        title: "Nuevos Competidores",
        description: "Entrada de cadenas hoteleras boutique en la región",
        impact: "Medio"
      },
      {
        title: "Cambios Regulatorios",
        description: "Posibles cambios en regulaciones turísticas y ambientales",
        impact: "Bajo"
      },
      {
        title: "Dependencia Climática",
        description: "Impacto de condiciones climáticas en actividades acuáticas",
        impact: "Medio"
      }
    ]
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Alto': return 'bg-red-100 text-red-800 border-red-200'
      case 'Medio': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Bajo': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'strengths': return 'from-green-500 to-green-600 bg-green-50 border-green-200'
      case 'weaknesses': return 'from-red-500 to-red-600 bg-red-50 border-red-200'
      case 'opportunities': return 'from-blue-500 to-blue-600 bg-blue-50 border-blue-200'
      case 'threats': return 'from-orange-500 to-orange-600 bg-orange-50 border-orange-200'
      default: return 'from-gray-500 to-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'strengths': return Shield
      case 'weaknesses': return AlertTriangle
      case 'opportunities': return TrendingUp
      case 'threats': return Zap
      default: return Shield
    }
  }

  const sections = [
    { key: 'strengths', title: 'Fortalezas', data: swotData.strengths },
    { key: 'weaknesses', title: 'Debilidades', data: swotData.weaknesses },
    { key: 'opportunities', title: 'Oportunidades', data: swotData.opportunities },
    { key: 'threats', title: 'Amenazas', data: swotData.threats }
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Análisis FODA Estratégico</h2>
      <p className="text-gray-600 mb-8">
        Evaluación integral de factores internos y externos que impactan la posición competitiva de VLU Hospitality
      </p>

      {/* SWOT Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {sections.map((section) => {
          const Icon = getSectionIcon(section.key)
          const colorClasses = getSectionColor(section.key)
          
          return (
            <div key={section.key} className={`border-2 rounded-lg ${colorClasses.split(' ').slice(2).join(' ')}`}>
              <div className={`p-4 bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white rounded-t-lg`}>
                <div className="flex items-center">
                  <Icon className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {section.data.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getImpactColor(item.impact)}`}>
                          {item.impact}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Strategic Implications */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Implicaciones Estratégicas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-900 mb-3">Estrategias FO (Fortalezas-Oportunidades)</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Aprovechar ubicación única para capturar mercado de wellness tourism</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Desarrollar experiencias sustentables diferenciadas junto al lago</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Expandir a mercados internacionales basado en calidad superior</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blue-900 mb-3">Estrategias DO (Debilidades-Oportunidades)</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Mejorar presencia digital para capturar crecimiento del mercado</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Desarrollar canal directo para reducir dependencia de OTAs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Crear experiencias personalizadas para mejorar percepción de valor</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-orange-900 mb-3">Estrategias FA (Fortalezas-Amenazas)</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Usar calidad superior para diferenciarse de competencia Airbnb</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Aprovechar ubicación única para crear barreras de entrada</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Desarrollar lealtad de clientes basada en experiencias únicas</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-red-900 mb-3">Estrategias DA (Debilidades-Amenazas)</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Mejorar ocupación para resistir presión competitiva de precios</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Diversificar canales para reducir vulnerabilidad económica</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm">Fortalecer propuesta de valor para competir con nuevos entrantes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Priority Matrix */}
      <div className="mt-8 bg-white border-2 border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Matriz de Prioridades Estratégicas</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">Prioridad Alta</h4>
            <ul className="space-y-1 text-sm text-red-800">
              <li>• Aumentar ocupación del 45% al 65%</li>
              <li>• Mejorar presencia digital</li>
              <li>• Diferenciarse de competencia Airbnb</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-2">Prioridad Media</h4>
            <ul className="space-y-1 text-sm text-yellow-800">
              <li>• Mejorar percepción de valor</li>
              <li>• Desarrollar canal directo</li>
              <li>• Crear experiencias personalizadas</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Prioridad Baja</h4>
            <ul className="space-y-1 text-sm text-green-800">
              <li>• Expansión internacional</li>
              <li>• Diversificación de servicios</li>
              <li>• Alianzas estratégicas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
