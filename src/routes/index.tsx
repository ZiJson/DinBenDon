import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATHS } from './paths'
import ProtectedLayout from '@layouts/ProtectedLayout'
import * as Page from '@pages'

const router = createBrowserRouter([
  {
    path: PATHS.LOGIN,
    element: <Page.Login />
  },
  {
    element: <ProtectedLayout />,
    children: [
      {
        path: PATHS.HOME,
        element: <Page.Home />,
        children: []
      },
      {
        path: PATHS.ADMIN,
        element: <Page.Admin />,
        children: []
      }
    ]
  },
  {
    path: PATHS.NOT_FOUND,
    element: <Page.NotFound />
  }
])

export const Routes = () => <RouterProvider router={router} />
