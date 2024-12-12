import Sidebar from '../components/Sidebar.jsx'
import LabCard from '../components/LabCard.jsx'

import { Stack, Typography } from '@mui/material'

import { useLoaderData } from 'react-router-dom'

export default function Home() {
  const data = useLoaderData()

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
                numOfFunctional={data['Cisco Laboratory']['Functional']}
                numOfNotWorking={data['Cisco Laboratory']['NotWorking']}
              />
              <LabCard
                labNum={2}
                labName={'Multimedia Laboratory'}
                numOfFunctional={data['Multimedia Laboratory']['Functional']}
                numOfNotWorking={data['Multimedia Laboratory']['NotWorking']}
              />
              <LabCard
                labNum={3}
                labName={'Software Laboratory I'}
                numOfFunctional={data['Software Laboratory I']['Functional']}
                numOfNotWorking={data['Software Laboratory I']['NotWorking']}
              />
            </Stack>
            <Stack direction="row" gap={5}>
              <LabCard
                labNum={4}
                labName={'Software Laboratory II'}
                numOfFunctional={data['Software Laboratory II']['Functional']}
                numOfNotWorking={data['Software Laboratory II']['NotWorking']}
              />
              <LabCard
                labNum={5}
                labName={'Software Laboratory III'}
                numOfFunctional={data['Software Laboratory III']['Functional']}
                numOfNotWorking={data['Software Laboratory III']['NotWorking']}
              />
              <LabCard
                labNum={6}
                labName={'Info Tech Laboratory'}
                numOfFunctional={data['Info Tech Laboratory']['Functional']}
                numOfNotWorking={data['Info Tech Laboratory']['NotWorking']}
              />
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  )
}
