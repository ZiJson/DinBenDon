import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATHS } from './paths'
import Layout from './layout'
import * as Page from '@pages'

const protectedRoutes = [
  {
    path: PATHS.ADMIN,
    element: <Page.Admin />,
    children: []
  }
]

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: PATHS.HOME,
        element: <Page.Home />,
        children: []
      },
      {
        path: PATHS.LOGIN,
        element: <Page.Login />
      },
      {
        path: PATHS.NOT_FOUND,
        element: <Page.NotFound />
      },
      ...protectedRoutes
    ]
  }
])

export const Routes = () => <RouterProvider router={router} />
