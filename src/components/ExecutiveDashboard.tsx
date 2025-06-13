
'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { TrendingUp, DollarSign, Users, Target, MapPin, Star, BarChart3, PieChart } from 'lucide-react'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function ExecutiveDashboard() {
  const [selectedView, setSelectedView] = useState('overview')

  const kpiCards = [
    {
      title: "Mercado Total (TAM)",
      value: "USD 1,868.5M",
      change: "+47.4%",
      period: "2024-2030",
      icon: DollarSign,
      color: "blue",
      description: "Mercado total direccionable proyectado para 2030"
    },
    {
      title: "Mercado Servible (SAM)",
      value: "USD 187M",
      change: "+6.8%",
      period: "CAGR",
      icon: Target,
      color: "green",
      description: "Mercado servible accesible en hospitalidad boutique"
    },
    {
      title: "Mercado Obtenible (SOM)",
      value: "USD 18.7M",
      change: "+10%",
      period: "Meta",
      icon: TrendingUp,
      color: "purple",
      description: "Participación de mercado realista objetivo"
    },
    {
      title: "Ocupación Actual",
      value: "45%",
      change: "→ 65%",
      period: "Meta 2026",
      icon: BarChart3,
      color: "orange",
      description: "Tasa de ocupación actual vs objetivo estratégico"
    }
  ]

  const competitiveData = {
    x: ['VLU Actual', 'Competencia Promedio', 'VLU Meta 2026', 'Líderes Mercado'],
    y: [7.9, 7.2, 8.5, 8.8],
    type: 'bar',
    marker: {
      color: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B']
    },
    name: 'Calificación General'
  }

  const marketShareData = {
    labels: ['VLU Hospitality', 'Competidores Directos', 'Airbnb Local', 'Otros'],
    values: [2.5, 15.5, 35, 47],
    type: 'pie',
    marker: {
      colors: ['#3B82F6', '#EF4444', '#F59E0B', '#6B7280']
    }
  }

  const revenueProjection = {
    x: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    y: [12.5, 15.8, 19.2, 23.1, 27.5, 32.2, 37.8],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'Proyección de Ingresos (M USD)',
    line: { color: '#3B82F6', width: 3 },
    marker: { size: 8, color: '#3B82F6' }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50",
      purple: "from-purple-500 to-purple-600 text-purple-600 bg-purple-50",
      orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50"
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <div className="space-y-8">
      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((kpi) => {
          const Icon = kpi.icon
          const colorClasses = getColorClasses(kpi.color)
          
          return (
            <div key={kpi.title} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.split(' ').slice(0, 2).join(' ')} text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${colorClasses.split(' ')[2]}`}>{kpi.change}</div>
                  <div className="text-xs text-gray-500">{kpi.period}</div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{kpi.title}</h3>
              <div className="text-2xl font-bold text-gray-900 mb-2">{kpi.value}</div>
              <p className="text-sm text-gray-600">{kpi.description}</p>
            </div>
          )
        })}
      </div>

      {/* Strategic Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Resumen Estratégico Ejecutivo</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contexto de Mercado</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900">Oportunidad de Crecimiento</h4>
                <p className="text-blue-800 text-sm mt-1">
                  El mercado de hospitalidad boutique en México muestra un crecimiento sostenido del 6.8% CAGR, 
                  impulsado por la demanda de experiencias auténticas y turismo de bienestar.
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900">Ventaja Competitiva</h4>
                <p className="text-green-800 text-sm mt-1">
                  VLU Tequesquitengo cuenta con ubicación privilegiada (8.4/10), calidad superior (7.9/10) 
                  y potencial de diferenciación en experiencias junto al lago.
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-900">Desafío Principal</h4>
                <p className="text-orange-800 text-sm mt-1">
                  Ocupación del 45% vs potencial del 65%+, con 670 propiedades Airbnb creando 
                  presión competitiva en precios y disponibilidad.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Objetivos Estratégicos 2025-2026</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Incremento de Ocupación</span>
                <span className="font-bold text-blue-600">45% → 65%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Mejora Percepción Valor</span>
                <span className="font-bold text-green-600">7.2 → 8.0+</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Aumento Reseñas</span>
                <span className="font-bold text-purple-600">120 → 360+</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">Reservas Directas</span>
                <span className="font-bold text-orange-600">15% → 25%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Competitive Position */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Posición Competitiva</h3>
          <Plot
            data={[competitiveData]}
            layout={{
              title: 'Calificación vs Competencia',
              xaxis: { title: 'Categoría' },
              yaxis: { title: 'Calificación (1-10)', range: [6.5, 9] },
              showlegend: false,
              margin: { l: 50, r: 50, t: 50, b: 100 }
            }}
            style={{ width: '100%', height: '300px' }}
            config={{ responsive: true, displayModeBar: false }}
          />
        </div>

        {/* Market Share */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Participación de Mercado</h3>
          <Plot
            data={[marketShareData]}
            layout={{
              title: 'Distribución del Mercado Local',
              showlegend: true,
              margin: { l: 50, r: 50, t: 50, b: 50 }
            }}
            style={{ width: '100%', height: '300px' }}
            config={{ responsive: true, displayModeBar: false }}
          />
        </div>
      </div>

      {/* Revenue Projection */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Proyección de Ingresos 2024-2030</h3>
        <Plot
          data={[revenueProjection]}
          layout={{
            title: 'Crecimiento Proyectado de Ingresos',
            xaxis: { title: 'Año' },
            yaxis: { title: 'Ingresos (Millones USD)' },
            showlegend: false,
            margin: { l: 50, r: 50, t: 50, b: 50 }
          }}
          style={{ width: '100%', height: '400px' }}
          config={{ responsive: true, displayModeBar: false }}
        />
      </div>

      {/* Strategic Priorities */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prioridades Estratégicas Inmediatas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="flex items-center mb-3">
              <Target className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-blue-900">Corto Plazo (0-6 meses)</h3>
            </div>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Implementar estrategia de comunicación integral</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Optimizar presencia digital y OTAs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Lanzar primeras 3 campañas segmentadas</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-6 h-6 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-green-900">Mediano Plazo (6-12 meses)</h3>
            </div>
            <ul className="space-y-2 text-green-800">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Alcanzar 55% de ocupación promedio</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Desarrollar experiencias diferenciadas</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Establecer partnerships estratégicos</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="flex items-center mb-3">
              <Star className="w-6 h-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-purple-900">Largo Plazo (12+ meses)</h3>
            </div>
            <ul className="space-y-2 text-purple-800">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Consolidar liderazgo en mercado local</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Expandir a mercados internacionales</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-sm">Desarrollar programa de lealtad premium</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
