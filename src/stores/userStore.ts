import { create } from 'zustand'

interface UserStore {
  isAuthenticated: boolean
  setAuthenticated: (value: boolean) => void
  reset: () => void
}

export const userStore = create<UserStore>(set => ({
  isAuthenticated: false,
  setAuthenticated: value => set({ isAuthenticated: value }),
  reset: () => set({ isAuthenticated: false })
}))
