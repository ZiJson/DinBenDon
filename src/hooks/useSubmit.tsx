export default function useSubmit<T>(callback: (values: T) => void) {
  return (event: React.FormEvent) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget as HTMLFormElement)
    return callback(Object.fromEntries(data.entries()) as T)
  }
}
