import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// Pages
import Error from './routes/Error-page.jsx'
import Home from './routes/Home-page.jsx'
import Form from './routes/Form-page.jsx'
import Table from './routes/Table-page.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/form',
    element: <Form />,
  },
  {
    path: '/table',
    element: <Table />,
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}