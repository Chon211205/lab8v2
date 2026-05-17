import { useState } from 'react'
import { getPasswordStrength } from '../utils/passwordStrength'

export default function PasswordStrengthMeter () {
  const [password, setPassword] = useState('')

  const strength = getPasswordStrength(password)

  return (
    <section>
      <label htmlFor="password">Contraseña</label>

      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <p aria-live="polite">{strength}</p>
    </section>
  )
}