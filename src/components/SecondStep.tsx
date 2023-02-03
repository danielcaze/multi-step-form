import { Header } from './Header'
import { RadioGroup } from './RadioGroup'
import ArcadeIcon from '../assets/images/icon-arcade.svg'
import AdvancedIcon from '../assets/images/icon-advanced.svg'
import ProIcon from '../assets/images/icon-pro.svg'
import { useState } from 'react'
import { Switch } from './Switch'

export function SecondStep() {
  const plans = [
    {
      icon: ArcadeIcon,
      title: 'Arcade',
      pricing: '9',
    },
    {
      icon: AdvancedIcon,
      title: 'Advanced',
      pricing: '12',
    },
    {
      icon: ProIcon,
      title: 'Pro',
      pricing: '15',
    },
  ]

  const [selectedPlan, setSelectedPlan] = useState(plans[0].title)
  const [isYear, setIsYear] = useState(false)
  const recurringType = isYear ? 'yearly' : 'monthly'

  function handleChangePlan(plan: string) {
    setSelectedPlan(plan)
  }

  function handleChangeRecurringType(recurringType: boolean) {
    setIsYear(recurringType)
  }

  return (
    <>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <fieldset style={{ border: 'none' }}>
        <RadioGroup
          items={plans}
          recurringType={recurringType}
          changePlan={handleChangePlan}
          plan={selectedPlan}
        />
      </fieldset>
      <Switch
        leftItem="Monthly"
        rightItem="Yearly"
        toggleSwitch={handleChangeRecurringType}
        switchValue={isYear}
      />
    </>
  )
}