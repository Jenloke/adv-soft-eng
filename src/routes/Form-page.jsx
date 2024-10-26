// import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx"

import supabase from '../utils/supabase.js'

import { Controller, useForm } from "react-hook-form"

import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Date Pickers
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Form() {
  const {
    control,
    handleSubmit,
    register,
    // watch,
    formState: { errors },
  } = useForm()

  // console.log(watch("email")) // watch input value by passing the name of it

  const onSubmit = async (formInputs) => {
    const submitInputs = {
      PropertyNumber: formInputs.propertyNumber,
      Category: formInputs.category,
      DateAquisition: formInputs.dateOfAquisition,
      Location: formInputs.room,
      Campus: formInputs.campus,
      LabTech: formInputs.officer,
    }
    const { data, error } = await supabase
      .from('Equipment')
      .insert([
        { ...submitInputs, Status: "Functional" },
      ])
    await console.log(data)
    await console.log(error)    
  }
  
  return(
    <>
      <div className='flex min-h-screen'>
        <Sidebar/>
        <div className="m-auto w-1/5">
          <Button onClick={ async () => {
            const { data } = await supabase.auth.signInWithPassword({email: 'test@example.com', password: '12345'})
            await console.log(data)
          }} 
          variant="contained">
            LOGIN
          </Button>
          <h1>Add Equipment</h1>
          <form className='flex-col space-y-4' onSubmit={handleSubmit(onSubmit)}>
            {/* <input defaultValue="test" {...register("email")} /> */}
            {/* <input {...register("password", { required: true })} /> */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            
            <TextField
              className='w-full'
              {...register("propertyNumber", { required: true })}
              label="Property Number"
              error={errors.exampleRequired}
              helperText={errors.exampleRequired && "Input Required"}
            />
            <TextField
              className='w-full'
              {...register("category", { required: true })}
              label="Category"
              error={errors.exampleRequired}
              helperText={errors.exampleRequired && "Input Required"}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name="dateOfAquisition"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    className='w-full'
                    label="Select Date"
                    value={field.value}
                    onChange={(newValue) => field.onChange(newValue)} // Pass new value to field's onChange
                  />
                )}
              />
            </LocalizationProvider>
            <Autocomplete
              freeSolo
              options={['Cisco Laboratory', 'Multimedia Laboratory', 'Software Laboratory 1', 'Software Laboratory 2', 'Software Laboratory 3', 'Info-tech Laboratory']}
              renderInput={
                (params) => 
                  <TextField 
                    {...register("room", { required: true })} {...params} label="Laboratory" 
                  />
              }
            />
            <Autocomplete
              freeSolo
              options={['Alangilan', 'Pablo Borbon']}
              renderInput={
                (params) => 
                  <TextField 
                    {...register("campus", { required: true })} {...params} label="Campus" 
                  />
              }
            />
            <Autocomplete
              freeSolo
              options={['Jaycee C. Aurelio', 'John Pol M. Jalapan', 'Alain Micko C. Moreno']}
              renderInput={
                (params) => 
                  <TextField 
                    {...register("officer", { required: true })} {...params} label="ICT Officer In Charge" 
                  />
              }
            />
            <Button type="submit" variant="contained">
              SUBMIT
            </Button>
          </form>
          

        </div>
      </div>
    </>
  )
}