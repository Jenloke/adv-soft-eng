import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import dayjs from 'dayjs'

import { Button, Stack } from '@mui/material'

const strToDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD')
}

export default function EditEquipment() {
  const loaderEquipmentData = useLoaderData()
  const [equipmentData] = useState(loaderEquipmentData[0])

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-grow flex-col justify-center items-center">
        <div className="w-[80%] max-w-3xl bg-white border border-gray-300 rounded-lg shadow-lg p-6 mb-4">
          <h1 className="text-xl font-bold mb-4 text-center">Equipment</h1>
          <div className="mb-4">
            Property Number: {equipmentData.propertyNumber}
          </div>
          <div className="mb-2">Category: {equipmentData.category}</div>
          <div className="mb-2">
            <div>Processor: {equipmentData.processor}</div>
            <div>Motherboard: {equipmentData.motherboard}</div>
            <div>HDD: {equipmentData.hdd}</div>
            <div>Memory: {equipmentData.memory}</div>
            <div>Video Card: {equipmentData.videoCard}</div>
            <div>Display: {equipmentData.display}</div>
            <div>Optical Drive: {equipmentData.opticalDrive}</div>
            <div>Casing: {equipmentData.casing}</div>
            <div>Mouse: {equipmentData.mouse}</div>
            <div>Keyboard: {equipmentData.keyboard}</div>
          </div>
          <div className="mb-2">
            Date of Aquisition: {strToDate(equipmentData.dateOfAcquisition)}
          </div>
          <div className="mb-2">Status: {equipmentData.status}</div>
          <div className="mb-2">Location: {equipmentData.location}</div>
          <div className="mb-2">Campus: {equipmentData.campus}</div>
          <div className="mb-2">Lab Technician: {equipmentData.labTech}</div>
        </div>

        <Stack
          gap={2}
          direction="row"
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onClick={() => {}}
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '20px', // Rounded borders
              border: '2px solid #000', // Light gray border
              padding: '3px 12px',
              fontSize: '0.80rem',
              '&:hover': {
                backgroundColor: '#f0f0f0', // Slightly darker white on hover
              },
            }}
          >
            Change Status
          </Button>
          <Button
            onClick={() => {}}
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '20px', // Rounded borders
              border: '2px solid #000', // Light gray border
              padding: '3px 12px',
              fontSize: '.80rem',
              '&:hover': {
                backgroundColor: '#f0f0f0', // Slightly darker white on hover
              },
            }}
          >
            Change Laboratory Technician
          </Button>
          <Button
            onClick={() => {}}
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              borderRadius: '20px', // Rounded borders
              border: '2px solid #000', // Light gray border
              padding: '3px 12px',
              fontSize: '0.80rem',
              '&:hover': {
                backgroundColor: '#f0f0f0', // Slightly darker white on hover
              },
            }}
          >
            Change Location
          </Button>
        </Stack>
      </div>
    </div>
  )
}
