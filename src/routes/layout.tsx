import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <main className="w-screen h-screen container mx-auto">
        <Outlet />
      </main>
    </>
  )
}
