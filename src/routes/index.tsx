import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PATHS } from './paths'
import * as Page from '@pages'

const router = createBrowserRouter([
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
  }
])

export const Routes = () => <RouterProvider router={router} />
