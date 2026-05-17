export function getPasswordStrength (password) {
  if (password.length === 0) {
    return 'vacía'
  }

  if (password.length < 8) {
    return 'débil'
  }

  const hasNumber = /\d/.test(password)
  const hasSymbol = /[^a-zA-Z0-9]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasUppercase = /[A-Z]/.test(password)
  const hasMixedCase = hasLowercase && hasUppercase

  if (hasNumber && hasSymbol) {
    return 'muy fuerte'
  }

  if (hasNumber && hasMixedCase) {
    return 'muy fuerte'
  }

  if (hasNumber) {
    return 'fuerte'
  }

  if (hasMixedCase) {
    return 'fuerte'
  }

  return 'media'
}