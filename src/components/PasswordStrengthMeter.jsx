import { useState } from 'react'
import { getPasswordStrength } from '../utils/passwordStrength'

export default function PasswordStrengthMeter () {
  const [password, setPassword] = useState('')

  const strength = getPasswordStrength(password)

  return (
    <section>
      <div className="password-form">
        <label htmlFor="password">Contraseña</label>

        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Escribe tu contraseña"
        />
      </div>

      <p className="strength" aria-live="polite">{strength}</p>
    </section>
  )
}