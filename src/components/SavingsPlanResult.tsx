import { ArrowLeftCircle, PiggyBank, TrendingUp, DollarSign } from 'lucide-react'
import { SavingsPlan } from '../types'

interface SavingsPlanResultProps {
  plan: SavingsPlan
  onReset: () => void
}

export default function SavingsPlanResult({ plan, onReset }: SavingsPlanResultProps) {
  const savingsPercentage = (plan.monthlySavingsTarget / plan.monthlyIncome) * 100

  const tips = [
    "Create a detailed monthly budget",
    "Cut unnecessary subscriptions",
    "Cook meals at home more often",
    "Use automated transfers for savings",
    "Look for ways to increase your income"
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-blue-600" />
              <h3 className="font-medium">Monthly Target</h3>
            </div>
            <p className="text-2xl font-bold text-blue-600">
              ${plan.monthlySavingsTarget.toFixed(2)}
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <PiggyBank className="h-5 w-5 text-green-600" />
              <h3 className="font-medium">Total Goal</h3>
            </div>
            <p className="text-2xl font-bold text-green-600">
              ${plan.savingsGoal.toFixed(2)}
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <h3 className="font-medium">Of Monthly Income</h3>
            </div>
            <p className="text-2xl font-bold text-purple-600">
              {savingsPercentage.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Optimization Tips</h3>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onReset}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeftCircle className="h-5 w-5" />
        Create New Plan
      </button>
    </div>
  )
}
