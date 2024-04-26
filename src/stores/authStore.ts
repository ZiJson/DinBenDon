import { create } from 'zustand'

export type ActionType = 'login' | 'register'
type BUTTON = 'button' | 'submit'

interface State {
  fields: Record<ActionType, { id: string; label: string }[]>
  buttons: Record<ActionType, { id: BUTTON; text: string }[]>
  actionType: ActionType
}
interface Actions {
  setActionType: (value: ActionType) => void
  reset: () => void
}

const initialState: State = {
  fields: {
    login: [
      {
        id: 'account',
        label: '帳號'
      },
      {
        id: 'password',
        label: '密碼'
      }
    ],
    register: [
      {
        id: 'account',
        label: '帳號'
      },
      {
        id: 'password',
        label: '密碼'
      },
      {
        id: 'confirmPassword',
        label: '確認密碼'
      }
    ]
  },
  buttons: {
    login: [
      {
        id: 'button',
        text: '前往註冊'
      },
      {
        id: 'submit',
        text: '登陸'
      }
    ],
    register: [
      {
        id: 'button',
        text: '返回登陸'
      },
      {
        id: 'submit',
        text: '註冊'
      }
    ]
  },
  actionType: 'login'
}

export const authStore = create<State & Actions>((set) => ({
  ...initialState,
  setActionType: (value: ActionType) => set({ actionType: value }),
  reset: () => set({ ...initialState })
}))
