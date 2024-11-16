// import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx'

import supabase from '../utils/supabase.js'

import { Controller, useForm } from 'react-hook-form'

import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { useLoaderData } from 'react-router-dom'

// Clear Buttn Text Field
// import InputAdornment from '@mui/material/InputAdornment';
// import { X } from 'lucide-react';

// Date Pickers
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const formatOptions = (data) => {
  const tempOptions = data.reduce((acc, item) => {
    const { classification, specification } = item
    if (!acc[classification]) {
      acc[classification] = new Set() // Initialize as a Set for unique values
    }
    acc[classification].add(specification) // Add specification to its classification
    return acc
  }, {})

  // Convert Sets to arrays for easier use in your options
  const formattedOptions = {}
  for (const key in tempOptions) {
    formattedOptions[key] = Array.from(tempOptions[key])
  }
  return formattedOptions
}

export default function Form() {
  const data = useLoaderData()
  const options = formatOptions(data)

  const {
    control,
    handleSubmit,
    // register,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      propertyNumber: '',
      category: '',
      dateOfAquisition: null,
      laboratory: '',
      campus: '',
      labtech: '',
      processor: '',
      motherboard: '',
      hdd: '',
      memory: '',
      videoCard: '',
      display: '',
      opticalDrive: '',
      casing: '',
      mouse: '',
      keyboard: '',
    },
  })

  // console.log(watch('laboratory')) // watch input value by passing the name of it

  const onSubmit = async (formInputs) => {
    console.log(formInputs)
    const submitInputs = {
      propertyNumber: formInputs.propertyNumber,
      category: formInputs.category,
      dateAquisition: formInputs.dateOfAquisition,
      location: formInputs.laboratory,
      campus: formInputs.campus,
      labTech: formInputs.labtech,

      processor: formInputs.processor,
      motherboard: formInputs.motherboard,
      hdd: formInputs.hdd,
      memory: formInputs.memory,
      videoCard: formInputs.videoCard,
      display: formInputs.display,
      opticalDrive: formInputs.opticalDrive,
      casing: formInputs.casing,
      mouse: formInputs.mouse,
      keyboard: formInputs.keyboard,
    }
    const { data, error } = await supabase
      .from('Equipment')
      .insert([{ ...submitInputs, status: 'Functional' }])
    console.log(data)
    console.log(error)
  }

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="mx-auto py-4 w-full px-4 md:px-10">
          <h1 className="text-center text-xl md:text-2xl font-bold mb-6">Add Equipment</h1>

          <form
            className="space-y-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
              <div className="flex-col space-y-3">
                <h4 className="text-center text-lg font-semibold">Information</h4>
                <Controller
                  name="propertyNumber"
                  control={control}
                  rules={{ required: 'Input Required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Property Number"
                      error={!!errors.propertyNumber}
                      helperText={errors.propertyNumber?.message}
                      fullWidth
                    />
                  )}
                />
                <Controller
                  name="category"
                  control={control}
                  rules={{ required: 'Input Required' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Category"
                      error={!!errors.category}
                      helperText={errors.category?.message}
                      fullWidth
                    />
                  )}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Controller
                    name="dateOfAquisition"
                    control={control}
                    rules={{ required: 'Input Required' }}
                    render={({ field }) => (
                      <DatePicker
                        className="w-full"
                        label="Select Date"
                        value={field.value}
                        onChange={(newValue) => field.onChange(newValue)}
                        slotProps={{
                          textField: {
                            error: !!errors.dateOfAquisition,
                            helperText: errors.dateOfAquisition?.message,
                          },
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
                <Controller
                  name="laboratory"
                  control={control}
                  rules={{ required: 'Input Required' }}
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      freeSolo
                      options={options['LOCATION']}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Laboratory"
                          error={!!errors.laboratory}
                          helperText={errors.laboratory?.message}
                        />
                      )}
                      onChange={(_, newValue) => field.onChange(newValue)}
                      onInputChange={(_, newValue) => field.onChange(newValue)}
                    />
                  )}
                />
                <Controller
                  name="campus"
                  control={control}
                  rules={{ required: 'Input Required' }}
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      freeSolo
                      options={options['CAMPUS']}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Campus"
                          error={!!errors.campus}
                          helperText={errors.campus?.message}
                        />
                      )}
                      onChange={(_, newValue) => field.onChange(newValue)}
                      onInputChange={(_, newValue) => field.onChange(newValue)}
                    />
                  )}
                />
                <Controller
                  name="labtech"
                  control={control}
                  rules={{ required: 'Input Required' }}
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      freeSolo
                      options={options['LAB TECH']}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="ICT Technician In Charge"
                          error={!!errors.labtech}
                          helperText={errors.labtech?.message}
                        />
                      )}
                      onChange={(_, newValue) => field.onChange(newValue)}
                      onInputChange={(_, newValue) => field.onChange(newValue)}
                    />
                  )}
                />
              </div>

              <div className="flex-col space-y-3">
                <h4 className="text-center text-lg font-semibold mb-3">ICT Equipment Specification</h4>
                {['processor', 'motherboard', 'hdd', 'memory', 'video Card', 'display', 'optical Drive', 'casing', 'mouse', 'keyboard'].map((spec) => (
                  <Controller
                    key={spec}
                    name={spec}
                    control={control}
                    rules={{ required: 'Input Required' }}
                    render={({ field }) => (
                      <Autocomplete
                        {...field}
                        freeSolo
                        options={options[spec.toUpperCase()]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={spec.charAt(0).toUpperCase() + spec.slice(1)}
                            error={!!errors[spec]}
                            helperText={errors[spec]?.message}
                          />
                        )}
                        onChange={(_, newValue) => field.onChange(newValue)}
                        onInputChange={(_, newValue) => field.onChange(newValue)}
                      />
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" variant="contained" className="w-full md:w-auto">
                ADD Equipment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
