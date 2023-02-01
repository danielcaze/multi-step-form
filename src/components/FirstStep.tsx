import { Header } from './Header'
import { Input } from './Input'

export function FirstStep() {
  return (
    <>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <fieldset style={{ border: 'none' }}>
        <Input type="text" label="Name" placeholder="e.g. Daniel Cazé" />
        <Input
          type="email"
          label="Email Address"
          placeholder="e.g. danielcaze@lorem.com"
        />
        <Input
          type="tel"
          label="Phone Number"
          placeholder="e.g. +55 83 988979997"
        />
      </fieldset>
    </>
  )
}
