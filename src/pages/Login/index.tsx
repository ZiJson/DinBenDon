import { authStore } from '@stores'

function Login() {
  const { fields, buttons, actionType, setActionType } = authStore()

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center justify-center gap-10"
      >
        {fields[actionType].map(({ id, label }) => (
          <label key={id}>
            <p>{label}</p>
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
