// import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar.jsx'

import supabase from '../utils/supabase.js'

import { Controller, useForm } from 'react-hook-form'
import React, { useState, useEffect, useRef } from 'react'

import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// Clear Buttn Text Field
// import InputAdornment from '@mui/material/InputAdornment';
// import { X } from 'lucide-react';

// Date Pickers
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export default function Form() {
  const [options, setOptions] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from('FormOptions').select()

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
        setOptions(formattedOptions)
      } catch (error) {
        console.error('Error fetching data: ', error)
      }
    }
    fetchData()
  }, [])

  const {
    control,
    handleSubmit,
    register,
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

  // console.log(watch("email")) // watch input value by passing the name of it

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
        <div className="mx-auto py-4">
          <h1 className="text-center">Add Equipment</h1>

          <form
            className="flex-col mx-auto w-3/5 space-y-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <input defaultValue="test" {...register("email")} /> */}
            {/* <input {...register("password", { required: true })} /> */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            <div className="flex-col space-y-3 p-4 border">
              <h4 className="text-center">Information</h4>
              <Controller
                name="propertyNumber"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Property Number"
                    error={!!errors.propertyNumber}
                    helperText={errors.propertyNumber?.message}
                    fullWidth
                    // autoFocus
                  />
                )}
              />
              <Controller
                name="category"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
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
                  rules={{
                    required: 'Input Required',
                  }}
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
                rules={{
                  required: 'Input Required',
                }}
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
                  />
                )}
              />
              <Controller
                name="campus"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
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
                  />
                )}
              />
              <Controller
                name="labtech"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
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
                  />
                )}
              />
            </div>

            <div className="flex-col space-y-3 p-4 border">
              <h4 className="text-center">ICT Equipment Specification</h4>

              <Controller
                name="processor"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['PROCESSOR']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Processor"
                        error={!!errors.processor}
                        helperText={errors.processor?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="motherboard"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['MOTHERBOARD']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Motherboard"
                        error={!!errors.motherboard}
                        helperText={errors.motherboard?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="hdd"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['HDD']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="HDD"
                        error={!!errors.hdd}
                        helperText={errors.hdd?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="memory"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['MEMORY']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Memory"
                        error={!!errors.memory}
                        helperText={errors.memory?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="videoCard"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['VIDEO CARD']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Video Card"
                        error={!!errors.videoCard}
                        helperText={errors.videoCard?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="display"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['DISPLAY']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Display"
                        error={!!errors.display}
                        helperText={errors.display?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="opticalDrive"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['OPTICAL DRIVE']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Optical Drive"
                        error={!!errors.opticalDrive}
                        helperText={errors.opticalDrive?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="casing"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['CASING']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Casing"
                        error={!!errors.casing}
                        helperText={errors.casing?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="mouse"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['MOUSE']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Mouse"
                        error={!!errors.mouse}
                        helperText={errors.mouse?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
              <Controller
                name="keyboard"
                control={control}
                rules={{
                  required: 'Input Required',
                }}
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    freeSolo
                    options={options['KEYBOARD']}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Keyboard"
                        error={!!errors.keyboard}
                        helperText={errors.keyboard?.message}
                      />
                    )}
                    onChange={(_, newValue) => field.onChange(newValue)}
                  />
                )}
              />
            </div>
            <Button type="submit" variant="contained">
              ADD Equipment
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
