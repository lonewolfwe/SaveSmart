import { useState } from 'react'
import { DollarSign, Calendar, Target } from 'lucide-react'
import { SavingsPlan } from '../types'

interface SavingsPlanFormProps {
  onSubmit: (plan: SavingsPlan) => void
}

export default function SavingsPlanForm({ onSubmit }: SavingsPlanFormProps) {
  const [formData, setFormData] = useState({
    monthlyIncome: '',
    savingsGoal: '',
    timelineMonths: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const income = parseFloat(formData.monthlyIncome)
    const goal = parseFloat(formData.savingsGoal)
    const months = parseInt(formData.timelineMonths)
    
    const monthlySavingsTarget = goal / months

    const plan: SavingsPlan = {
      monthlyIncome: income,
      savingsGoal: goal,
      timelineMonths: months,
      monthlySavingsTarget,
      currentDate: new Date().toISOString()
    }

    onSubmit(plan)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Monthly Income
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              required
              min="1"
              value={formData.monthlyIncome}
              onChange={(e) => setFormData(prev => ({ ...prev, monthlyIncome: e.target.value }))}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="3000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Savings Goal
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Target className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              required
              min="1"
              value={formData.savingsGoal}
              onChange={(e) => setFormData(prev => ({ ...prev, savingsGoal: e.target.value }))}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="10000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Timeline (months)
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              required
              min="1"
              max="120"
              value={formData.timelineMonths}
              onChange={(e) => setFormData(prev => ({ ...prev, timelineMonths: e.target.value }))}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="12"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate Savings Plan
        </button>
      </div>
    </form>
  )
}
