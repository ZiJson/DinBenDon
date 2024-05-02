import { userStore } from '@stores'
import type { ActionType } from '@stores/userStore'

const fields: Record<ActionType, { id: string; name: string }[]> = {
  login: [
    {
      id: 'account',
      name: '帳號'
    },
    {
      id: 'password',
      name: '密碼'
    }
  ],
  register: [
    {
      id: 'account',
      name: '帳號'
    },
    {
      id: 'password',
      name: '密碼'
    },
    {
      id: 'confirmPassword',
      name: '確認密碼'
    }
  ]
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

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-10"
      >
        {fields[actionType].map(({ id, name }) => (
          <label key={id}>
            <p>{name}</p>
            <input id={id} className="border-2 border-slate-500" type="text" />
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
