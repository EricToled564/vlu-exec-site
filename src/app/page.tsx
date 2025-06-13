
'use client'

import { useState } from 'react'
import { BarChart3, Target, TrendingUp, Users, MapPin, DollarSign, Shield, Zap, AlertTriangle, CheckCircle } from 'lucide-react'
import MarketAnalysisSection from '@/components/MarketAnalysisSection'
import SWOTSection from '@/components/SWOTSection'
import PositioningSection from '@/components/PositioningSection'
import SegmentationSection from '@/components/SegmentationSection'
import RoadmapSection from '@/components/RoadmapSection'
import ExecutiveDashboard from '@/components/ExecutiveDashboard'

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard')

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard Ejecutivo', icon: BarChart3 },
    { id: 'market', label: 'Análisis de Mercado', icon: TrendingUp },
    { id: 'swot', label: 'Análisis FODA', icon: Shield },
    { id: 'positioning', label: 'Posicionamiento', icon: Target },
    { id: 'segmentation', label: 'Segmentación', icon: Users },
    { id: 'roadmap', label: 'Hoja de Ruta Dual', icon: MapPin },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Executive Header */}
      <header className="bg-white shadow-xl border-b-4 border-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                VLU Hospitality
              </h1>
              <p className="text-xl text-gray-600 mt-2">
                Estrategia General Ejecutiva - Análisis Integral
              </p>
              <div className="flex items-center mt-4 space-x-8">
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  Tequesquitengo, Morelos
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Mercado: USD 1,267.4M → USD 1,868.5M
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-xl shadow-lg">
                <div className="text-sm font-medium">CAGR Proyectado</div>
                <div className="text-3xl font-bold">6.8%</div>
                <div className="text-sm opacity-90">2024-2030</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Executive Navigation */}
          <div className="w-72 flex-shrink-0">
            <nav className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Análisis Estratégico</h3>
              <ul className="space-y-3">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all ${
                          activeSection === item.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5 mr-3" />
                        {item.label}
                      </button>
                    </li>
                  )
                })}
              </ul>

              {/* Quick Stats */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Métricas Clave</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">TAM</span>
                    <span className="font-medium">$1.87B</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">SAM</span>
                    <span className="font-medium">$187M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">SOM</span>
                    <span className="font-medium">$18.7M</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ocupación</span>
                    <span className="font-medium">45% → 65%</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeSection === 'dashboard' && <ExecutiveDashboard />}
            {activeSection === 'market' && <MarketAnalysisSection />}
            {activeSection === 'swot' && <SWOTSection />}
            {activeSection === 'positioning' && <PositioningSection />}
            {activeSection === 'segmentation' && <SegmentationSection />}
            {activeSection === 'roadmap' && <RoadmapSection />}
          </div>
        </div>
      </div>
    </div>
  )
}
