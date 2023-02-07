import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox } from './Checkbox'
import { Header } from './Header'

export const addOns = [
  {
    title: 'Online service',
    subtitle: 'Access to mulyiplayer games',
    pricing: '1',
  },
  {
    title: 'Larger storage',
    subtitle: 'Extra 1TB of cloud save',
    pricing: '2',
  },
  {
    title: 'Customizable profile',
    subtitle: 'Custom theme on your profile',
    pricing: '2',
  },
]

export function ThirdStep() {
  const { control } = useFormContext()

  return (
    <>
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      {addOns.map((addOn) => (
        <Controller
          key={addOn.title}
          control={control}
          name="addOns"
          render={({ field }) => (
            <Checkbox
              {...field}
              title={addOn.title}
              subtitle={addOn.subtitle}
              price={addOn.pricing}
            />
          )}
        />
      ))}
    </>
  )
}
