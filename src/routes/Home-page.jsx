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
              sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '20px', // Rounded borders
                border: '1px solid #000', // Light gray border
                padding: '3px 8px',
                fontSize: '0.8rem',
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Slightly darker white on hover
                },
              }}
            >
              Signout
            </Button>
          </Stack>
        </div>
      </div>
    </>
  )
}
