import './App.css'

import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

import supabase from './utils/supabase.js'

// Pages
import Error from './routes/Error-page.jsx'
import Home from './routes/Home-page.jsx'
import Form from './routes/Form-page.jsx'
import Equipment from './routes/Table-page.jsx'
import Login from './routes/Login-page.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    loader: async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session) {
        return redirect('/login')
      }
      return null
    },
  },
  {
    path: '/form',
    element: <Form />,
    loader: async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session) {
        return redirect('/login')
      }
      return null
    },
  },
  {
    path: '/table',
    element: <Equipment />,
    loader: async () => {
      const { data } = await supabase.auth.getSession()
      if (!data.session) {
        return redirect('/login')
      }
      return null
    },
  },
  {
    path: '/login',
    element: <Login />,
    loader: async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        return redirect('/')
      }
      return null
    },
  },
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
