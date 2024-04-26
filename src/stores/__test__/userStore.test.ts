import { it, describe, expect } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { userStore } from '@stores/userStore'

describe('authStore', () => {
  describe('setActionType', () => {
    it('should be "login" by default', () => {
      const { result } = renderHook(() => userStore())
      expect(result.current.actionType).toBe('login')
    })

    it('should be "register" when change the actionType to "register"', () => {
      const { result } = renderHook(() => userStore())
      expect(result.current.actionType).toBe('login')

      act(() => result.current.setActionType('register'))
      expect(result.current.actionType).toBe('register')
    })
  })
})
