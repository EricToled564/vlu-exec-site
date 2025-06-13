
'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { TrendingUp, DollarSign, Globe, MapPin, Users, BarChart3 } from 'lucide-react'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

export default function MarketAnalysisSection() {
  const [selectedAnalysis, setSelectedAnalysis] = useState('tam-sam-som')

  const marketData = {
    tam: {
      value: "USD 1,868.5M",
      growth: "6.8% CAGR",
      year: "2030",
      description: "Mercado total de hospitalidad boutique en México"
    },
    sam: {
      value: "USD 187M",
      growth: "10% del TAM",
      year: "2030",
      description: "Mercado servible en región centro-sur"
    },
    som: {
      value: "USD 18.7M",
      growth: "10% del SAM",
      year: "2030",
      description: "Participación realista de VLU"
    }
  }

  const marketGrowthData = {
    x: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    y: [1267.4, 1353.2, 1445.1, 1543.4, 1648.4, 1760.5, 1868.5],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'TAM (Millones USD)',
    line: { color: '#3B82F6', width: 4 },
    marker: { size: 10, color: '#3B82F6' }
  }

  const samGrowthData = {
    x: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    y: [126.7, 135.3, 144.5, 154.3, 164.8, 176.1, 187.0],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'SAM (Millones USD)',
    line: { color: '#10B981', width: 4 },
    marker: { size: 10, color: '#10B981' }
  }

  const somGrowthData = {
    x: ['2024', '2025', '2026', '2027', '2028', '2029', '2030'],
    y: [12.7, 13.5, 14.5, 15.4, 16.5, 17.6, 18.7],
    type: 'scatter',
    mode: 'lines+markers',
    name: 'SOM (Millones USD)',
    line: { color: '#F59E0B', width: 4 },
    marker: { size: 10, color: '#F59E0B' }
  }

  const segmentData = {
    labels: ['Turismo de Bienestar', 'Escapadas Románticas', 'Turismo Familiar', 'Turismo de Aventura', 'Turismo Gastronómico', 'Otros'],
    values: [28, 22, 20, 15, 10, 5],
    type: 'pie',
    marker: {
      colors: ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#6B7280']
    }
  }

  const competitiveData = {
    x: ['Precio Promedio', 'Calificación', 'Ubicación', 'Servicios', 'Experiencia'],
    y: [7.2, 7.9, 8.4, 7.5, 7.8],
    type: 'bar',
    name: 'VLU Tequesquitengo',
    marker: { color: '#3B82F6' }
  }

  const competitorAvgData = {
    x: ['Precio Promedio', 'Calificación', 'Ubicación', 'Servicios', 'Experiencia'],
    y: [7.8, 7.2, 7.0, 7.3, 7.1],
    type: 'bar',
    name: 'Promedio Competencia',
    marker: { color: '#EF4444' }
  }

  const trends = [
    {
      title: "Crecimiento del Turismo de Bienestar",
      impact: "Alto",
      description: "Incremento del 15% anual en demanda de experiencias wellness y spa",
      color: "green"
    },
    {
      title: "Digitalización de Reservas",
      impact: "Medio",
      description: "85% de reservas se realizan a través de plataformas digitales",
      color: "blue"
    },
    {
      title: "Turismo Sustentable",
      impact: "Alto",
      description: "Preferencia creciente por destinos eco-friendly y responsables",
      color: "green"
    },
    {
      title: "Experiencias Personalizadas",
      impact: "Alto",
      description: "Demanda de experiencias únicas y personalizadas según perfil del huésped",
      color: "purple"
    },
    {
      title: "Competencia de Airbnb",
      impact: "Alto",
      description: "670 propiedades locales creando presión en precios y disponibilidad",
      color: "red"
    }
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Alto': return 'bg-red-100 text-red-800'
      case 'Medio': return 'bg-yellow-100 text-yellow-800'
      case 'Bajo': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Análisis Integral de Mercado</h2>
      <p className="text-gray-600 mb-8">
        Evaluación exhaustiva del mercado de hospitalidad boutique: TAM, SAM, SOM y tendencias competitivas
      </p>

      {/* TAM/SAM/SOM Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
          <div className="flex items-center mb-3">
            <Globe className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-blue-900">TAM - Mercado Total</h3>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{marketData.tam.value}</div>
          <div className="text-sm text-blue-700 mb-2">{marketData.tam.growth} | {marketData.tam.year}</div>
          <p className="text-blue-800 text-sm">{marketData.tam.description}</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
          <div className="flex items-center mb-3">
            <MapPin className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-900">SAM - Mercado Servible</h3>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">{marketData.sam.value}</div>
          <div className="text-sm text-green-700 mb-2">{marketData.sam.growth} | {marketData.sam.year}</div>
          <p className="text-green-800 text-sm">{marketData.sam.description}</p>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
          <div className="flex items-center mb-3">
            <BarChart3 className="w-6 h-6 text-orange-600 mr-2" />
            <h3 className="text-lg font-semibold text-orange-900">SOM - Mercado Obtenible</h3>
          </div>
          <div className="text-3xl font-bold text-orange-600 mb-2">{marketData.som.value}</div>
          <div className="text-sm text-orange-700 mb-2">{marketData.som.growth} | {marketData.som.year}</div>
          <p className="text-orange-800 text-sm">{marketData.som.description}</p>
        </div>
      </div>

      {/* Market Growth Projection */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Proyección de Crecimiento del Mercado 2024-2030</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <Plot
            data={[marketGrowthData, samGrowthData, somGrowthData]}
            layout={{
              title: 'Evolución TAM/SAM/SOM (Millones USD)',
              xaxis: { title: 'Año' },
              yaxis: { title: 'Valor del Mercado (Millones USD)' },
              showlegend: true,
              legend: { x: 0, y: 1 }
            }}
            style={{ width: '100%', height: '400px' }}
            config={{ responsive: true, displayModeBar: false }}
          />
        </div>
      </div>

      {/* Market Segmentation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Segmentación del Mercado</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Plot
              data={[segmentData]}
              layout={{
                title: 'Distribución por Tipo de Turismo (%)',
                showlegend: true,
                margin: { l: 50, r: 50, t: 50, b: 50 }
              }}
              style={{ width: '100%', height: '300px' }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Análisis Competitivo</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Plot
              data={[competitiveData, competitorAvgData]}
              layout={{
                title: 'VLU vs Competencia (Calificación 1-10)',
                xaxis: { title: 'Factores' },
                yaxis: { title: 'Calificación', range: [6, 9] },
                showlegend: true,
                barmode: 'group'
              }}
              style={{ width: '100%', height: '300px' }}
              config={{ responsive: true, displayModeBar: false }}
            />
          </div>
        </div>
      </div>

      {/* Market Trends */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tendencias Clave del Mercado</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trends.map((trend, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900 text-sm">{trend.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(trend.impact)}`}>
                  {trend.impact}
                </span>
              </div>
              <p className="text-gray-700 text-sm">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Market Opportunities */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Oportunidades de Mercado Identificadas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Oportunidades Inmediatas</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <TrendingUp className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Capturar 28% del mercado de turismo de bienestar</span>
              </li>
              <li className="flex items-start">
                <Users className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Diferenciación en experiencias junto al lago</span>
              </li>
              <li className="flex items-start">
                <DollarSign className="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Premium pricing por ubicación única</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Ventajas Competitivas</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Ubicación excepcional (8.4/10 vs 7.0 promedio)</span>
              </li>
              <li className="flex items-start">
                <BarChart3 className="w-4 h-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Calidad superior (7.9/10 vs 7.2 promedio)</span>
              </li>
              <li className="flex items-start">
                <Globe className="w-4 h-4 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Potencial de expansión a mercados internacionales</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
