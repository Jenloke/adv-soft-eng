import { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
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
    <div className="flex">
      <Sidebar />
      <div>
        <h1>Equipment</h1>
        <div>Property Number: {equipmentData.propertyNumber}</div>
        <div>Category: {equipmentData.category}</div>
        <div>
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
        <div>
          Date of Aquisition: {strToDate(equipmentData.dateOfAcquisition)}
        </div>
        <div>Status: {equipmentData.status}</div>
        <div>Location: {equipmentData.location}</div>
        <div>Campus: {equipmentData.campus}</div>
        <div>Lab Technician: {equipmentData.labTech}</div>
      </div>

      <Stack gap={0.5}>
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
    </div>
  )
}
