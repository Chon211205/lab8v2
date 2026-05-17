import { describe, expect, test } from 'vitest'
import { getPasswordStrength } from './passwordStrength'

describe('getPasswordStrength', () => {
  test('returns "vacía" when password is empty', () => {
    expect(getPasswordStrength('')).toBe('vacía')
  })

  test('returns "débil" when password has less than 8 characters', () => {
    expect(getPasswordStrength('abc')).toBe('débil')
  })

  test('returns "media" when password has 8 or more characters without numbers or symbols', () => {
    expect(getPasswordStrength('abcdefgh')).toBe('media')
  })

  test('returns "fuerte" when password has 8 or more characters and at least one number', () => {
    expect(getPasswordStrength('abcdefg1')).toBe('fuerte')
  })

  test('returns "muy fuerte" when password has 8 or more characters, a number, and a symbol', () => {
    expect(getPasswordStrength('abcdef1!')).toBe('muy fuerte')
  })

  test('exactly 8 characters without numbers is not weak', () => {
    expect(getPasswordStrength('abcdefgh')).not.toBe('débil')
  })

  test('exactly 7 characters is not medium', () => {
    expect(getPasswordStrength('abcdefg')).not.toBe('media')
  })

  test('only symbols with less than 8 characters is still weak', () => {
    expect(getPasswordStrength('!!!')).toBe('débil')
  })
})