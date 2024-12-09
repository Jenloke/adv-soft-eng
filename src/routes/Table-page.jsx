import { useLoaderData, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

import Sidebar from '../components/Sidebar.jsx'

import {
  Button,
  Card,
  CardHeader,
  CardContent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  // CircularProgress,
  Paper,
} from '@mui/material'

const strToDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD')
}

const labs = {
  sl1: 'Software Laboratory I',
  sl2: 'Software Laboratory II',
  sl3: 'Software Laboratory III',
  cl: 'Cisco Laboratory',
  ml: 'Multimedia Laboratory',
  itl: 'Info Tech Laboratory',
  storage: 'Storage',
}

const columnNames = [
  'Item No',
  'Property No',
  'Category',
  'Specification',
  'Date of Acquisition',
  'Status',
  'Location',
  'Campus',
  'Lab Tech',
  'Functions',
]

export default function Equipment() {
  const navigate = useNavigate()
  const tabledata = useLoaderData()

  return (
    <>
      <div className="flex min-h-[100vh] bg-[#e6e6e6]">
        <Sidebar />
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          <Stack gap={1}>
            <Button
              onClick={() => {
                navigate('/labs')
              }}
              variant="contained"
            >
              ALL
            </Button>
            {Object.entries(labs).map(([key, value]) => (
              <Button
                key={key}
                onClick={() => {
                  navigate(`/lab/${key}`)
                }}
                variant="contained"
                // style={{ margin: '5px' }} // Add some spacing for better layout
              >
                {value}
              </Button>
            ))}
          </Stack>
          <Card
            style={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
              margin: '1rem',
              minHeight: '90vh',
            }}
          >
            <CardHeader title="Equipment List" />
            <CardContent
              // ref={cardContentRef}
              sx={{ height: '83vh', overflowY: 'auto', padding: 0 }} // Scrollable container
            >
              {/* <Searchbar /> */}
              <TableContainer component={Paper}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      {columnNames.map((column, index) => (
                        <TableCell key={index} align="center">
                          {column}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tabledata.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="center">
                          {item?.propertyNumber}
                        </TableCell>
                        <TableCell align="center">{item?.category}</TableCell>
                        <TableCell>
                          <Typography>
                            <strong>Processor:</strong> {item?.processor} <br />
                            <strong>Motherboard:</strong> {item?.motherboard}{' '}
                            <br />
                            <strong>HDD:</strong> {item?.hdd} <br />
                            <strong>Memory:</strong> {item?.memory} <br />
                            <strong>Video Card:</strong> {item?.videoCard}{' '}
                            <br />
                            <strong>Display:</strong> {item?.display} <br />
                            <strong>Optical Drive:</strong> {item?.opticalDrive}{' '}
                            <br />
                            <strong>Casing:</strong> {item?.casing} <br />
                            <strong>Mouse:</strong> {item?.mouse} <br />
                            <strong>Keyboard:</strong> {item?.keyboard}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          {strToDate(item?.dateOfAcquisition)}
                        </TableCell>
                        <TableCell align="center">{item?.status}</TableCell>
                        <TableCell align="center">{item?.location}</TableCell>
                        <TableCell align="center">{item?.campus}</TableCell>
                        <TableCell align="center">{item?.labTech}</TableCell>
                        <TableCell align="center">
                          <Stack gap={0.75}>
                            <Button
                              onClick={() => {
                                navigate(`/equipment/${item.id}`)
                              }}
                              variant="contained"
                            >
                              Edit
                            </Button>
                            <Button onClick={() => {}} variant="contained">
                              Change Status
                            </Button>
                            <Button onClick={() => {}} variant="contained">
                              Change Laboratory Technician
                            </Button>
                            <Button onClick={() => {}} variant="contained">
                              Change Location
                            </Button>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* {loading && (
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  <CircularProgress />
                </div>
              )} */}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
