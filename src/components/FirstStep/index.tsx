export function FirstStep() {
  return (
    <>
      <header>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
      </header>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="e.g. Daniel Cazé" />
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="e.g. danielcaze@lorem.com" />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="e.g. +55 83 988979997" />
      </fieldset>
    </>
  )
}