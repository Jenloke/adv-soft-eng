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
          <Stack
            direction="row"
            spacing={2}
            sx={{
              width: '90%', // Only takes up the space it needs
              marginTop: '2rem',
              marginBottom: '1.5rem',
              marginLeft: '.5rem',
            }}
          >
            <Button
              onClick={() => {
                navigate('/labs')
              }}
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '20px', // Rounded borders
                border: '1px solid #000', // Light gray border
                padding: '3px 8px',
                fontSize: '0.7rem',
                '&:hover': {
                  backgroundColor: '#f0f0f0', // Slightly darker white on hover
                },
              }}
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
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  borderRadius: '20px', // Rounded borders
                  border: '1px solid #000', // Light gray border
                  padding: '3px 8px',
                  fontSize: '0.75rem',
                  '&:hover': {
                    backgroundColor: '#f0f0f0', // Slightly darker white on hover
                  },
                }}
                // style={{ margin: '5px' }} // Add some spacing for better layout
              >
                {value}
              </Button>
            ))}
          </Stack>
          <Card
            style={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
              margin: '1.5rem 1rem 1rem 1.75rem',
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
                            {/* <strong>Optical Drive:</strong> {item?.opticalDrive}{' '} */}
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
                          <Stack gap={2}>
                            <Button
                              onClick={() => {
                                navigate(`/equipment/${item.id}`)
                              }}
                              variant="contained"
                              sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: '20px', // Rounded borders
                                border: '1px solid #000', // Light gray border
                                padding: '5px 0px',
                                fontSize: '0.80rem',
                                '&:hover': {
                                  backgroundColor: '#f0f0f0', // Slightly darker white on hover
                                },
                              }}
                            >
                              Edit
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

{
  /* <Button onClick={() => {}} variant="contained"
                              sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: '20px', // Rounded borders
                                border: '1px solid #000', // Light gray border
                                padding: '3px 5px',
                                fontSize: '0.70rem',
                                '&:hover': {
                                  backgroundColor: '#f0f0f0', // Slightly darker white on hover
                                },
                              }}>
                              Change Status
                            </Button>
                            <Button onClick={() => {}} variant="contained"
                              sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: '20px', // Rounded borders
                                border: '1px solid #000', // Light gray border
                                padding: '3px 0px',
                                fontSize: '0.70rem',
                                '&:hover': {
                                  backgroundColor: '#f0f0f0', // Slightly darker white on hover
                                },
                              }}>
                              Change Laboratory Technician
                            </Button>
                            <Button onClick={() => {}} variant="contained"
                              sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderRadius: '20px', // Rounded borders
                                border: '1px solid #000', // Light gray border
                                padding: '3px 4px',
                                fontSize: '0.75rem',
                                '&:hover': {
                                  backgroundColor: '#f0f0f0', // Slightly darker white on hover
                                },
                              }}>
                              Change Location
                            </Button> */
}
