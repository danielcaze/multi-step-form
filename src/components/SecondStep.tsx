import { Header } from './Header'
import { RadioGroup } from './RadioGroup'
import ArcadeIcon from '../assets/images/icon-arcade.svg'
import AdvancedIcon from '../assets/images/icon-advanced.svg'
import ProIcon from '../assets/images/icon-pro.svg'
import { Switch } from './Switch'
import { Controller, useFormContext } from 'react-hook-form'

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

  const { control, watch } = useFormContext()

  const recurringType = watch('recurringType')

  return (
    <>
      <Header
        title="Select your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <fieldset style={{ border: 'none' }}>
        <Controller
          name="plan"
          control={control}
          render={({ field }) => (
            <RadioGroup
              {...field}
              items={plans}
              recurringType={recurringType}
            />
          )}
        />
      </fieldset>
      <Controller
        name="recurringType"
        control={control}
        render={({ field }) => (
          <Switch {...field} leftItem="Monthly" rightItem="Yearly" />
        )}
      />
    </>
  )
}
