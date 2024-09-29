// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

// Pages
import Error from './routes/Error-page.jsx'
import Home from './routes/Home-page.jsx'
import Form from './routes/Form-page.jsx'
import Equipment from './routes/Table-page.jsx';

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
    element: <Equipment />,
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}