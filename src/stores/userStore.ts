import { create } from 'zustand'

export type ActionType = 'login' | 'register'
interface State {
  actionType: ActionType
}
interface Actions {
  setActionType: (value: ActionType) => void
  reset: () => void
}

const initialState: State = {
  actionType: 'login'
}

export const userStore = create<State & Actions>((set) => ({
  ...initialState,
  setActionType: (value: ActionType) => set({ actionType: value }),
  reset: () => set({ ...initialState })
}))
