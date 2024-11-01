import Sidebar from '../components/Sidebar.jsx'
import Searchbar from '../components/Searchbar.jsx'
import React, { useState, useEffect, useRef } from 'react'
import supabase from '../utils/supabase.js'

import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material'

export default function Equipment() {
  const [equipmentList, setEquipmentList] = useState([])
  const [currentRange, setCurrentRange] = useState(0)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const cardContentRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('Equipment')
          .select()
          .range(currentRange, currentRange + 2)
        console.log(data)
        setEquipmentList(data)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const cardElement = cardContentRef.current
    if (cardElement) {
      cardElement.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (cardElement) {
        cardElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [loading, hasMore])

  // Mock API call to fetch more data
  const loadMoreData = () => {
    setCurrentRange(currentRange + 3)
    setLoading(true)
    const fetchNewItems = async () => {
      try {
        const { data, error } = await supabase
          .from('Equipment')
          .select()
          .range(currentRange, currentRange + 2)
        setEquipmentList((prevList) => [...prevList, ...data])

        if (equipmentList.length < 3) setHasMore(false)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    setTimeout(() => {
      fetchNewItems()
      setLoading(false)
      // Stop loading more after a certain number of items for demo purposes
    }, 1500)
  }

  const handleScroll = () => {
    if (cardContentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = cardContentRef.current
      if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        hasMore &&
        !loading
      ) {
        loadMoreData()
      }
    }
  }

  useEffect(() => {
    const cardElement = cardContentRef.current
    if (cardElement) {
      cardElement.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (cardElement) {
        cardElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [loading, hasMore])

  return (
    <>
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: '#e6e6e6',
        }}
      >
        <Sidebar />
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          <Card
            style={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
              margin: '1rem',
              minHeight: '90vh',
            }}
          >
            <CardHeader title="Equipment List" />
            <CardContent
              ref={cardContentRef}
              sx={{ height: '83vh', overflowY: 'auto', padding: 0 }} // Scrollable container
            >
              <Searchbar />
              <TableContainer component={Paper}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Item No</TableCell>
                      <TableCell align="center">Property No</TableCell>
                      <TableCell align="center">Category</TableCell>
                      <TableCell>Specification</TableCell>
                      {/* <TableCell align="center">Date of Acquisition</TableCell> */}
                      <TableCell align="center">Status</TableCell>
                      <TableCell align="center">Location</TableCell>
                      <TableCell align="center">Campus</TableCell>
                      <TableCell align="center">Lab Tech</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {equipmentList.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">1</TableCell>
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
                        {/* <TableCell align="center">{item?.dateOfAcquisition}</TableCell> */}
                        <TableCell align="center">{item?.status}</TableCell>
                        <TableCell align="center">{item?.location}</TableCell>
                        <TableCell align="center">{item?.campus}</TableCell>
                        <TableCell align="center">{item?.labTech}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {loading && (
                <div style={{ textAlign: 'center', padding: '10px' }}>
                  <CircularProgress />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
