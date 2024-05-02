import { useMutation } from '@tanstack/react-query'

import { userStore } from '@stores'
import { useSubmit } from '@hooks'
import { getUserLoginInfo } from '@services/queries'
import { postUserRegisterInfo } from '@services/mutations'
import type { RegisterRequest } from '@services/types'
import type { ActionType } from '@stores/userStore'

const FeatureFlag = {
  register_confirm_password_field: false
}

enum FIELDS {
  ACCOUNT = 'account',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword'
}

const fields: FIELDS[] = FeatureFlag.register_confirm_password_field
  ? [FIELDS.ACCOUNT, FIELDS.PASSWORD, FIELDS.CONFIRM_PASSWORD]
  : [FIELDS.ACCOUNT, FIELDS.PASSWORD]

const display = {
  [FIELDS.ACCOUNT]: true,
  [FIELDS.PASSWORD]: true,
  [FIELDS.CONFIRM_PASSWORD]: false
}
const textKey: Record<FIELDS, string> = {
  account: '帳號',
  password: '密碼',
  confirmPassword: '確認密碼'
}
const typeKey: Record<FIELDS, string> = {
  account: 'text',
  password: 'password',
  confirmPassword: 'password'
}

const buttons: Record<ActionType, { id: 'button' | 'submit'; text: string }[]> =
  {
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
  }

function Login() {
  const { actionType, setActionType } = userStore()
  const mutation = useMutation({
    mutationFn: (payload: string | RegisterRequest) => {
      return actionType === 'login'
        ? getUserLoginInfo(payload as string)
        : postUserRegisterInfo(payload as RegisterRequest)
    }
  })

  const handleSubmit = useSubmit((data: Record<FIELDS, string>) => {
    if (actionType === 'login') {
      mutation.mutate(data.account)
    } else {
      mutation.mutate({
        account: data.account,
        passWord: data.password,
        level: 0
      })
    }
  })

  actionType === 'register'
    ? (display[FIELDS.CONFIRM_PASSWORD] = true)
    : (display[FIELDS.CONFIRM_PASSWORD] = false)

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-10"
      >
        {fields
          .filter((field) => display[field])
          .map((field) => (
            <label key={field}>
              <p>{textKey[field]}</p>
              <input
                id={field}
                className="border-2 border-slate-500"
                type={typeKey[field]}
                name={field}
              />
            </label>
          ))}
        <ul className="flex gap-10">
          {buttons[actionType].map(({ id, text }) => (
            <li key={id}>
              <button
                type={id}
                className="border-2 border-slate-500"
                onClick={() =>
                  id === 'button' &&
                  setActionType(actionType === 'login' ? 'register' : 'login')
                }
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </form>
    </main>
  )
}

export default Login
