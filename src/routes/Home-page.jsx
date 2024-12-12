import Sidebar from '../components/Sidebar.jsx'
import LabCard from '../components/LabCard.jsx'

import { Button, Stack, Typography, Box} from '@mui/material'

import supabase from '../utils/supabase.js'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="p-4 flex-1 flex flex-col items-center">
          <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 2,
              }}
            >
              GLEAM
          </Typography>
          <Typography
              variant="h5"
              sx={{
                textAlign: 'center',
                marginBottom: 4,
              }}
            >
              ICT MANAGEMENT SYSTEM
          </Typography>

          <Stack gap={5}>
            <Stack direction="row" gap={5}>
              <LabCard
                labNum={1}
                labName={'Cisco Laboratoy'}
                numOfFunctional={30}
                numOfNotWorking={0}
              />
              <LabCard
                labNum={2}
                labName={'Multimedia Laboratory'}
                numOfFunctional={30}
                numOfNotWorking={0}
              />
              <LabCard
                labNum={3}
                labName={'Software Laboratory I'}
                numOfFunctional={30}
                numOfNotWorking={0}
              />
            </Stack>
            <Stack direction="row" gap={5}>
              <LabCard
                labNum={4}
                labName={'Software Laboratory II'}
                numOfFunctional={30}
                numOfNotWorking={0}
              />
              <LabCard
                labNum={5}
                labName={'Software Laboratory III'}
                numOfFunctional={30}
                numOfNotWorking={0}
              />
              <LabCard
                labNum={6}
                labName={'InfoTech Laboratory'}
                numOfFunctional={30}
                numOfNotWorking={0}
              />
            </Stack>
          </Stack>

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
              marginTop: 5,
              alignSelf: "flex-start"
            }}
          >
            Signout
          </Button>
        </div>
      </div>
    </>
  )
}
