import { useState, useEffect } from 'react'
import './index.css'
import SavingsPlanForm from './components/SavingsPlanForm'
import SavingsPlanResult from './components/SavingsPlanResult'
import { SavingsPlan } from './types'

function App() {
  const [savingsPlan, setSavingsPlan] = useState<SavingsPlan | null>(() => {
    const saved = localStorage.getItem('savingsPlan')
    return saved ? JSON.parse(saved) : null
  })

  useEffect(() => {
    if (savingsPlan) {
      localStorage.setItem('savingsPlan', JSON.stringify(savingsPlan))
    }
  }, [savingsPlan])

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Savings Plan Generator
          </h1>
          <p className="text-gray-600">
            Create your personalized savings strategy
          </p>
        </header>

        {!savingsPlan ? (
          <SavingsPlanForm onSubmit={setSavingsPlan} />
        ) : (
          <SavingsPlanResult 
            plan={savingsPlan} 
            onReset={() => {
              setSavingsPlan(null)
              localStorage.removeItem('savingsPlan')
            }}
          />
        )}
      </div>
    </div>
  )
}

export default App
