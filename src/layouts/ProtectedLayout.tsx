import { Outlet } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

function ProtectedLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  )
}

export default ProtectedLayout
