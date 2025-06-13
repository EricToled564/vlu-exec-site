
'use client'

import { useState } from 'react'
import { MapPin, Calendar, Target, TrendingUp, Users, DollarSign, Star, Zap, CheckCircle, Clock, AlertCircle } from 'lucide-react'

export default function RoadmapSection() {
  const [selectedPhase, setSelectedPhase] = useState('phase1')

  const roadmapPhases = [
    {
      id: 'phase1',
      title: 'Fase 1: Estabilización y Optimización',
      period: 'Meses 1-6 (Jun-Dic 2025)',
      status: 'in-progress',
      objective: 'Establecer bases sólidas y mejorar ocupación al 55%',
      budget: 'USD 180,000',
      color: 'blue',
      initiatives: [
        {
          name: 'Implementación Estrategia de Comunicación',
          description: 'Lanzamiento de las primeras 6 campañas segmentadas',
          timeline: 'Meses 1-6',
          budget: 'USD 139,000',
          kpis: ['Ocupación: 45% → 55%', 'Reseñas: 120 → 200', 'ROI: 280%+'],
          status: 'in-progress'
        },
        {
          name: 'Optimización Digital',
          description: 'Mejora de presencia en OTAs y desarrollo de canal directo',
          timeline: 'Meses 2-4',
          budget: 'USD 25,000',
          kpis: ['Reservas directas: 15% → 20%', 'Conversión web: +35%'],
          status: 'upcoming'
        },
        {
          name: 'Desarrollo de Experiencias',
          description: 'Creación de paquetes wellness y románticos diferenciados',
          timeline: 'Meses 3-6',
          budget: 'USD 16,000',
          kpis: ['Satisfacción: 7.9 → 8.2', 'Valor percibido: 7.2 → 7.6'],
          status: 'upcoming'
        }
      ]
    },
    {
      id: 'phase2',
      title: 'Fase 2: Crecimiento y Diferenciación',
      period: 'Meses 7-12 (Ene-Jun 2026)',
      status: 'upcoming',
      objective: 'Alcanzar liderazgo local y 65% de ocupación',
      budget: 'USD 220,000',
      color: 'green',
      initiatives: [
        {
          name: 'Expansión de Campañas',
          description: 'Implementación de las 8 campañas restantes con enfoque premium',
          timeline: 'Meses 7-12',
          budget: 'USD 175,000',
          kpis: ['Ocupación: 55% → 65%', 'Reseñas: 200 → 360+', 'ROI: 320%+'],
          status: 'upcoming'
        },
        {
          name: 'Programa de Lealtad',
          description: 'Lanzamiento de programa VIP para huéspedes recurrentes',
          timeline: 'Meses 8-10',
          budget: 'USD 30,000',
          kpis: ['Repeat rate: 25% → 40%', 'VIP members: 200+'],
          status: 'upcoming'
        },
        {
          name: 'Partnerships Estratégicos',
          description: 'Alianzas con spas, restaurantes y operadores de turismo',
          timeline: 'Meses 9-12',
          budget: 'USD 15,000',
          kpis: ['Revenue partnerships: USD 50K+', 'Cross-selling: +25%'],
          status: 'upcoming'
        }
      ]
    },
    {
      id: 'phase3',
      title: 'Fase 3: Consolidación y Expansión',
      period: 'Meses 13-18 (Jul 2026-Dic 2026)',
      status: 'upcoming',
      objective: 'Consolidar liderazgo y explorar expansión',
      budget: 'USD 300,000',
      color: 'purple',
      initiatives: [
        {
          name: 'Liderazgo de Mercado',
          description: 'Consolidación como destino #1 en la región',
          timeline: 'Meses 13-18',
          budget: 'USD 150,000',
          kpis: ['Market share: 5% → 8%', 'Brand awareness: +75%'],
          status: 'upcoming'
        },
        {
          name: 'Expansión Internacional',
          description: 'Atracción de turistas internacionales y mercados premium',
          timeline: 'Meses 15-18',
          budget: 'USD 100,000',
          kpis: ['Huéspedes internacionales: +40%', 'ADR: +20%'],
          status: 'upcoming'
        },
        {
          name: 'Innovación y Tecnología',
          description: 'Implementación de tecnologías avanzadas y experiencias digitales',
          timeline: 'Meses 16-18',
          budget: 'USD 50,000',
          kpis: ['Guest satisfaction: 8.5+', 'Operational efficiency: +30%'],
          status: 'upcoming'
        }
      ]
    }
  ]

  const milestones = [
    {
      date: 'Dic 2025',
      title: 'Ocupación 55%',
      description: 'Primera meta de ocupación alcanzada',
      status: 'upcoming',
      impact: 'Alto'
    },
    {
      date: 'Mar 2026',
      title: 'Liderazgo Regional',
      description: 'Posicionamiento como #1 en la región',
      status: 'upcoming',
      impact: 'Alto'
    },
    {
      date: 'Jun 2026',
      title: 'Ocupación 65%',
      description: 'Meta final de ocupación alcanzada',
      status: 'upcoming',
      impact: 'Alto'
    },
    {
      date: 'Sep 2026',
      title: 'Expansión Internacional',
      description: 'Primer mercado internacional establecido',
      status: 'upcoming',
      impact: 'Medio'
    },
    {
      date: 'Dic 2026',
      title: 'ROI 350%+',
      description: 'Superación de metas de retorno de inversión',
      status: 'upcoming',
      impact: 'Alto'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-500" />
      case 'upcoming':
        return <AlertCircle className="w-5 h-5 text-gray-400" />
      default:
        return <Calendar className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'in-progress':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      case 'upcoming':
        return 'bg-gray-50 border-gray-200 text-gray-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const getPhaseColor = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 border-blue-200",
      green: "from-green-500 to-green-600 bg-green-50 border-green-200",
      purple: "from-purple-500 to-purple-600 bg-purple-50 border-purple-200"
    }
    return colors[color as keyof typeof colors]
  }

  const selectedPhaseData = roadmapPhases.find(p => p.id === selectedPhase) || roadmapPhases[0]

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Hoja de Ruta Estratégica Dual</h2>
      <p className="text-gray-600 mb-8">
        Plan de implementación integral para los próximos 18 meses con fases claramente definidas
      </p>

      {/* Phase Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {roadmapPhases.map((phase) => {
          const colorClasses = getPhaseColor(phase.color)
          
          return (
            <button
              key={phase.id}
              onClick={() => setSelectedPhase(phase.id)}
              className={`text-left p-6 rounded-lg border-2 transition-all ${
                selectedPhase === phase.id
                  ? colorClasses.split(' ').slice(2).join(' ')
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{phase.title}</h3>
                {getStatusIcon(phase.status)}
              </div>
              <p className="text-sm text-gray-600 mb-2">{phase.period}</p>
              <p className="text-sm text-gray-700 mb-3">{phase.objective}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-900">{phase.budget}</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(phase.status)}`}>
                  {phase.status === 'completed' ? 'Completado' :
                   phase.status === 'in-progress' ? 'En Progreso' : 'Próximo'}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Selected Phase Details */}
      <div className={`border-2 rounded-lg mb-8 ${getPhaseColor(selectedPhaseData.color).split(' ').slice(2).join(' ')}`}>
        <div className={`p-6 bg-gradient-to-r ${getPhaseColor(selectedPhaseData.color).split(' ').slice(0, 2).join(' ')} text-white rounded-t-lg`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">{selectedPhaseData.title}</h3>
              <p className="text-lg opacity-90">{selectedPhaseData.period}</p>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90">Presupuesto</div>
              <div className="text-2xl font-bold">{selectedPhaseData.budget}</div>
            </div>
          </div>
          <p className="mt-4 text-lg">{selectedPhaseData.objective}</p>
        </div>

        <div className="p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Iniciativas Estratégicas</h4>
          <div className="space-y-6">
            {selectedPhaseData.initiatives.map((initiative, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">{initiative.name}</h5>
                    <p className="text-gray-700 mt-1">{initiative.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-sm text-gray-500">Presupuesto</div>
                    <div className="font-semibold text-gray-900">{initiative.budget}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">Timeline:</h6>
                    <p className="text-gray-700 text-sm">{initiative.timeline}</p>
                  </div>
                  <div>
                    <h6 className="font-medium text-gray-900 mb-2">KPIs Esperados:</h6>
                    <ul className="space-y-1">
                      {initiative.kpis.map((kpi, kpiIndex) => (
                        <li key={kpiIndex} className="text-gray-700 text-sm flex items-center">
                          <Target className="w-3 h-3 text-blue-600 mr-2 flex-shrink-0" />
                          {kpi}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(initiative.status)}`}>
                    {initiative.status === 'completed' ? 'Completado' :
                     initiative.status === 'in-progress' ? 'En Progreso' : 'Próximo'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Hitos Clave del Roadmap</h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg ${
                  milestone.status === 'completed' ? 'bg-green-500' :
                  milestone.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-400'
                }`}>
                  {getStatusIcon(milestone.status)}
                </div>
                
                {/* Milestone content */}
                <div className="ml-6 flex-1">
                  <div className={`p-4 rounded-lg border-2 ${getStatusColor(milestone.status)}`}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                        <p className="text-sm text-gray-600">{milestone.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        milestone.impact === 'Alto' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {milestone.impact}
                      </span>
                    </div>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Metrics Dashboard */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Métricas de Éxito del Roadmap</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">65%</span>
            </div>
            <h4 className="font-semibold text-gray-900">Ocupación Meta</h4>
            <p className="text-sm text-gray-600">vs 45% actual</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              <span className="text-2xl font-bold text-green-600">350%</span>
            </div>
            <h4 className="font-semibold text-gray-900">ROI Proyectado</h4>
            <p className="text-sm text-gray-600">18 meses</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-6 h-6 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">360+</span>
            </div>
            <h4 className="font-semibold text-gray-900">Reseñas Meta</h4>
            <p className="text-sm text-gray-600">vs 120 actual</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-6 h-6 text-orange-600" />
              <span className="text-2xl font-bold text-orange-600">8.5+</span>
            </div>
            <h4 className="font-semibold text-gray-900">Satisfacción Meta</h4>
            <p className="text-sm text-gray-600">vs 7.9 actual</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <h4 className="font-semibold text-blue-900 mb-2">Inversión Total del Roadmap</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-sm text-blue-700">Fase 1 (6 meses):</span>
              <div className="font-bold text-blue-900">USD 180,000</div>
            </div>
            <div>
              <span className="text-sm text-blue-700">Fase 2 (6 meses):</span>
              <div className="font-bold text-blue-900">USD 220,000</div>
            </div>
            <div>
              <span className="text-sm text-blue-700">Fase 3 (6 meses):</span>
              <div className="font-bold text-blue-900">USD 300,000</div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-blue-200">
            <span className="text-sm text-blue-700">Inversión Total (18 meses):</span>
            <div className="text-2xl font-bold text-blue-900">USD 700,000</div>
          </div>
        </div>
      </div>
    </div>
  )
}
