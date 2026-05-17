import PasswordStrengthMeter from './components/PasswordStrengthMeter'

export default function App () {
  return (
    <main>
      <section className="password-card">
        <h1>Medidor de Fortaleza de Contraseña</h1>
        <PasswordStrengthMeter />
      </section>
    </main>
  )
}