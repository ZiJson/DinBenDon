import { create } from 'zustand'

interface AuthStore {
  isAuthenticated: boolean
  setAuthenticated: (value: boolean) => void
  logout: () => void
  login: () => void
  reset: () => void
}

export const authStore = create<AuthStore>(set => ({
  isAuthenticated: false,
  setAuthenticated: value => set({ isAuthenticated: value }),
  logout: () => set({ isAuthenticated: false }),
  login: () => set({ isAuthenticated: true }),
  reset: () => set({ isAuthenticated: false })
}))
