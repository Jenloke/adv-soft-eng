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
    console.log(formInputs)
    const submitInputs = {
      PropertyNumber: formInputs.propertyNumber,
      Category: formInputs.category,
      DateAquisition: formInputs.dateOfAquisition,
      Location: formInputs.room,
      Campus: formInputs.campus,
      LabTech: formInputs.officer,
    }
    // const { data, error } = await supabase
    //   .from('Equipment')
    //   .insert([
    //     { ...submitInputs, Status: "Functional" },
    //   ])
    // console.log(data)
    // console.log(error)    
  }
  
  return(
    <>
      <div className='flex min-h-screen'>
        <Sidebar/>
        <div className="mx-auto">
          <Button 
            onClick={ async () => {
              const { data } = await supabase.auth.signInWithPassword({email: 'test@example.com', password: '12345'})
              console.log(data)
            }} 
            variant="contained"
          >
            LOGIN
          </Button>

          <h1>Add Equipment</h1>

          <form className='flex-col space-y-10' onSubmit={handleSubmit(onSubmit)}>
            {/* <input defaultValue="test" {...register("email")} /> */}
            {/* <input {...register("password", { required: true })} /> */}
            {/* {errors.exampleRequired && <span>This field is required</span>} */}
            
            <div className='space-y-3'>
              <h4 className='text-center'>
                Information
              </h4>
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
                      onChange={(newValue) => field.onChange(newValue)} 
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
                      className='w-full'
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
                      className='w-full'
                      {...register("campus", { required: true })} {...params} label="Campus" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['Jaycee C. Aurelio', 'Lohren Joshua L. Geron', 'John Pol M. Jalapan', 'Alain Micko C. Moreno']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-full'
                      {...register("officer", { required: true })} {...params} label="ICT Officer In Charge" 
                    />
                }
              />
            </div>

            <div className='space-y-3'>
              <h4 className='text-center'>
                Device Specification
              </h4>
              <Autocomplete
                freeSolo
                options={['INTEL CORE I7-12700 2.10 GHz (12Cores)', 'INTEL CORE I5-7400 3.00 GHz (4Cores)']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("processor", { required: true })} {...params} label="Processor" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['XITRIX XPN-H610M2', 'ASUS PRIME B250M-A']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("motherboard", { required: true })} {...params} label="Motherboard" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['1TB + 250GB SSD', '1TB']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("hdd", { required: true })} {...params} label="HDD" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['16GB DDR4', 'KINGSTON 4G DDR4']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("memory", { required: true })} {...params} label="Memory" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['NVIDIA GeForce GTX 1660 SUPER', 'INTEL HD GRAPHICS 630']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("videoCard", { required: true })} {...params} label="Video Card" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['G24 24" 165Hz Curved XITRIX Monitor', 'AOC 19.53" LED MONITOR']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("display", { required: true })} {...params} label="Display" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['HAVE', 'NONE']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("opticalDrive", { required: true })} {...params} label="Optical Drive" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['XITRIX Mid Tower RGB Chassis w/ Tempered', 'COOLERMASTER']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("casing", { required: true })} {...params} label="Casing" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['Xitrix Ergonomic Design USB Mouse', 'A4TECH USB']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("mouse", { required: true })} {...params} label="Mouse" 
                    />
                }
              />
              <Autocomplete
                freeSolo
                options={['Xitrix Ergonomic Design USB Keyboard', 'A4TECH USB']}
                renderInput={
                  (params) => 
                    <TextField 
                      className='w-1/5'
                      {...register("keyboard", { required: true })} {...params} label="Keyboard" 
                    />
                }
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