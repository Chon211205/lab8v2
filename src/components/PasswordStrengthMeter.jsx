import { useState } from 'react'
import { getPasswordStrength } from '../utils/passwordStrength'

const strengthValues = {
  vacía: 0,
  débil: 25,
  media: 50,
  fuerte: 75,
  'muy fuerte': 100
}

export default function PasswordStrengthMeter () {
  const [password, setPassword] = useState('')

  const strength = getPasswordStrength(password)
  const progressValue = strengthValues[strength]

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

      <div
        aria-label="Fortaleza de contraseña"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progressValue}
        className="progress"
        role="progressbar"
      >
        <div
          className="progress-bar"
          style={{ width: `${progressValue}%` }}
        />
      </div>
    </section>
  )
}