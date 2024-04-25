import { useState } from 'react'

type METHOD = 'login' | 'register'
type BUTTON = 'button' | 'submit'

const fields: Record<METHOD, { id: string; label: string }[]> = {
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
}

const buttons: Record<METHOD, { id: BUTTON; text: string }[]> = {
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
  const [method, setMethod] = useState<METHOD>('login')

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <form className="flex flex-col items-center justify-center gap-10">
        {fields[method].map(({ id, label }) => (
          <label key={id}>
            <p>{label}</p>
            <input id={id} className="border-2 border-slate-500" type="text" />
          </label>
        ))}
        <ul className="flex gap-10">
          {buttons[method].map(({ id, text }) => (
            <li key={id}>
              <button
                type={id}
                className="border-2 border-slate-500"
                onClick={() =>
                  id === 'button' &&
                  setMethod(method === 'login' ? 'register' : 'login')
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
