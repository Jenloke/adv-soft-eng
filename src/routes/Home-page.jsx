import Sidebar from '../components/Sidebar.jsx'
import LabCard from '../components/LabCard.jsx'

import { Stack, Typography } from '@mui/material'

export default function Home() {
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
        </div>
      </div>
    </>
  )
}
