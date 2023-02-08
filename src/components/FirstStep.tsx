import { useFormContext, Controller } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { Header } from './Header'
import { Input } from './Input'

export function FirstStep() {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <fieldset style={{ border: 'none' }}>
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Name"
              placeholder="e.g. Daniel Cazé"
              error={errors.name?.message as string}
            />
          )}
          name="name"
        />

        <Controller
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              label="Email Address"
              placeholder="e.g. danielcaze@lorem.com"
              error={errors.email?.message as string}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onBlur, onChange, value, ...inputProps } }) => (
            <ReactInputMask
              mask="+99 (99) 99999-9999"
              control={control}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            >
              {/* @ts-ignore */}
              {() => (
                <Input
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  {...inputProps}
                  type="tel"
                  label="Phone Number"
                  placeholder="e.g. +55 83 988979997"
                  error={errors.phone?.message as string}
                />
              )}
            </ReactInputMask>
          )}
          name="phone"
        />
      </fieldset>
    </>
  )
}
