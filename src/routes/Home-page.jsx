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
          <h1>GLEAM</h1>
          <h1>ICT MANAGEMENT SYSTEM</h1>

          <Stack gap={3}>
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
