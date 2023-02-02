import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { Header } from './Header'

export function ThirdStep() {
  const addOns = [
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

  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  function changeSelectedAddons(addon: string) {
    setSelectedAddOns((state) => {
      if (state.includes(addon)) {
        return state.filter((item) => item !== addon)
      }
      return [...state, addon]
    })
  }

  return (
    <>
      <Header
        title="Pick add-ons"
        subtitle="Add-ons help enhance your gaming experience."
      />
      {addOns.map((addOn) => (
        <Checkbox
          key={addOn.title}
          title={addOn.title}
          subtitle={addOn.subtitle}
          price={addOn.pricing}
          recurringType="monthly"
          toggleItem={changeSelectedAddons}
        />
      ))}
    </>
  )
}
