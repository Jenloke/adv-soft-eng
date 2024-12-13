import './App.css'

import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'

import supabase from './utils/supabase.js'

// Pages
import Error from './routes/Error-page.jsx'
import Home from './routes/Home-page.jsx'
import Form from './routes/Form-page.jsx'
import EditEquipment from './routes/Edit-Equipment-page.jsx'
import Equipment from './routes/Table-page.jsx'
import Login from './routes/Login-page.jsx'

// FETCH FROM SUPA BASE
const getFormOptions = async () => {
  // const { data, error } = await supabase.from('FormOptions').select()
  const { data } = await supabase.from('FormOptions').select()
  return data
}
const getTableData = async () => {
  try {
    // const { data, error } = await supabase
    const { data } = await supabase.from('Equipment').select('*')
    return data
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
const getLabEquipments = async (id) => {
  const labs = {
    sl1: 'Software Laboratory I',
    sl2: 'Software Laboratory II',
    sl3: 'Software Laboratory III',
    cl: 'Cisco Laboratory',
    ml: 'Multimedia Laboratory',
    itl: 'Info Tech Laboratory',
  }
  try {
    // const { data, error } = await supabase
    const { data } = await supabase
      .from('Equipment')
      .select('*')
      .eq('location', labs[id])
    // console.log(data)
    return data
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
const getEquipmentData = async (id) => {
  try {
    // const { data, error } = await supabase
    const { data } = await supabase.from('Equipment').select('*').eq('id', id)
    // console.log(data)
    return data
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
const getLabData = async () => {
  try {
    const { data } = await supabase.from('Equipment').select('status, location')
    // console.log(data)

    const normalizedData = data.map((item) => ({
      status: item.status.trim(),
      location: item.location.trim(),
    }))

    // Reduce to group by location and count statuses
    const counts = normalizedData.reduce((acc, item) => {
      const location = item.location
      const statusKey =
        item.status === 'Functional' ? 'Functional' : 'Not Working'

      if (!acc[location]) {
        acc[location] = { Functional: 0, NotWorking: 0 }
      }
      acc[location][statusKey]++
      return acc
    }, {})

    // console.log(counts)

    return counts
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}

// ROUTES
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      loader: async () => {
        const { data } = await supabase.auth.getSession()
        if (!data.session) {
          return redirect('/login')
        }
        return getLabData()
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
        return getFormOptions()
      },
    },
    {
      path: '/labs',
      element: <Equipment />,
      loader: async () => {
        const { data } = await supabase.auth.getSession()
        if (!data.session) {
          return redirect('/login')
        }
        return getTableData()
      },
    },
    {
      path: '/lab/:labID',
      element: <Equipment />,
      loader: async ({ params }) => {
        const { data } = await supabase.auth.getSession()
        if (!data.session) {
          return redirect('/login')
        }
        return getLabEquipments(params.labID)
      },
    },
    {
      path: '/equipment/:id',
      element: <EditEquipment />,
      loader: async ({ params }) => {
        const { data } = await supabase.auth.getSession()
        if (!data.session) {
          return redirect('/login')
        }
        return getEquipmentData(params.id)
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
  ],
  { basename: import.meta.env.DEV ? '/' : '/adv-soft-eng/' }
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
