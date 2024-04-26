import { it, describe, expect } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { authStore } from '../authStore'

describe('authStore', () => {
  describe('setActionType', () => {
    it('should be "login" by default', () => {
      const { result } = renderHook(() => authStore())
      expect(result.current.actionType).toBe('login')
    })

    it('should be "register" when change the actionType to "register"', () => {
      const { result } = renderHook(() => authStore())
      expect(result.current.actionType).toBe('login')

      act(() => result.current.setActionType('register'))
      expect(result.current.actionType).toBe('register')
    })
  })
})
