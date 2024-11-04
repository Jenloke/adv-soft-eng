import Sidebar from '../components/Sidebar.jsx'

import { Button, Stack } from '@mui/material'

import supabase from '../utils/supabase.js'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        {/* <div style={{ flexGrow: 1, padding: '1rem' }}> */}
        <div className="p-4">
          <h1>ICT MANAGEMENT SYSTEM</h1>

          <Stack gap={3}>
            <Button
              onClick={async () => {
                const { data, error } = await supabase.auth.signInWithPassword({
                  email: 'test@example.com',
                  password: '123456',
                })
                if (error) console.error(error)
                console.log(data)
              }}
              variant="contained"
            >
              LOGIN
            </Button>
            <Button
              onClick={async () => {
                const { data, error } = await supabase.auth.getSession()
                if (data.session == null) {
                  console.log('no user')
                  console.log(error)
                } else {
                  console.log(data)
                }
                // if (error) console.error(error)
              }}
              variant="contained"
            >
              Retrieve User
            </Button>
            <Button
              onClick={async () => {
                const { error } = await supabase.auth.signOut()
                if (error) console.log(error)
                navigate('/login')
              }}
              variant="contained"
            >
              Signout
            </Button>
          </Stack>
        </div>
      </div>
    </>
  )
}
