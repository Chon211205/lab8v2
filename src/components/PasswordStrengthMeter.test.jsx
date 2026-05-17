import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PasswordStrengthMeter from './PasswordStrengthMeter'

describe('PasswordStrengthMeter', () => {
  test('renders a password input', () => {
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  test('the password input is accessible by its label', () => {
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })

  test('renders the initial strength as "vacía"', () => {
    render(<PasswordStrengthMeter />)

    expect(screen.getByText('vacía')).toBeInTheDocument()
  })

  test('shows "débil" when user types a short password', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abc')

    expect(screen.getByText('débil')).toBeInTheDocument()
  })

  test('shows "media" when user types 8 or more characters without numbers or symbols', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdefgh')

    expect(screen.getByText('media')).toBeInTheDocument()
  })

  test('shows "fuerte" when user types 8 or more characters with at least one number', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdefg1')

    expect(screen.getByText('fuerte')).toBeInTheDocument()
  })

  test('shows "muy fuerte" when user types 8 or more characters with number and symbol', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdef1!')

    expect(screen.getByText('muy fuerte')).toBeInTheDocument()
  })

  test('returns to "vacía" when the password is completely cleared', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdef1!')
    await user.clear(input)

    expect(screen.getByText('vacía')).toBeInTheDocument()
  })

  test('exactly 8 characters without numbers should not be considered weak', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdefgh')

    expect(screen.queryByText('débil')).not.toBeInTheDocument()
    expect(screen.getByText('media')).toBeInTheDocument()
  })

  test('exactly 7 characters should not be considered medium', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdefg')

    expect(screen.queryByText('media')).not.toBeInTheDocument()
    expect(screen.getByText('débil')).toBeInTheDocument()
  })

  test('only symbols with less than 8 characters should still be weak', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, '!!!')

    expect(screen.getByText('débil')).toBeInTheDocument()
  })

  test('renders a progress bar for the password strength', () => {
    render(<PasswordStrengthMeter />)

    const progressBar = screen.getByRole('progressbar', {
      name: /fortaleza de contraseña/i
    })

    expect(progressBar).toBeInTheDocument()
    expect(progressBar).toHaveAttribute('aria-valuemin', '0')
    expect(progressBar).toHaveAttribute('aria-valuemax', '100')
    expect(progressBar).toHaveAttribute('aria-valuenow', '0')
  })

  test('progress bar shows 25 when password is weak', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abc')

    const progressBar = screen.getByRole('progressbar', {
      name: /fortaleza de contraseña/i
    })

    expect(progressBar).toHaveAttribute('aria-valuenow', '25')
  })

  test('progress bar shows 50 when password is medium', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdefgh')

    const progressBar = screen.getByRole('progressbar', {
      name: /fortaleza de contraseña/i
    })

    expect(progressBar).toHaveAttribute('aria-valuenow', '50')
  })

  test('progress bar shows 75 when password is strong', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdefg1')

    const progressBar = screen.getByRole('progressbar', {
      name: /fortaleza de contraseña/i
    })

    expect(progressBar).toHaveAttribute('aria-valuenow', '75')
  })

  test('progress bar shows 100 when password is very strong', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdef1!')

    const progressBar = screen.getByRole('progressbar', {
      name: /fortaleza de contraseña/i
    })

    expect(progressBar).toHaveAttribute('aria-valuenow', '100')
  })

  test('progress bar returns to 0 when password is cleared', async () => {
    const user = userEvent.setup()
    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/^contraseña$/i)

    await user.type(input, 'abcdef1!')
    await user.clear(input)

    const progressBar = screen.getByRole('progressbar', {
      name: /fortaleza de contraseña/i
    })

    expect(progressBar).toHaveAttribute('aria-valuenow', '0')
    expect(screen.getByText('vacía')).toBeInTheDocument()
  })
})