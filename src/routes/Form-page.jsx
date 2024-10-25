// import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx"

import supabase from '../utils/supabase.js'
import { useForm, Controller } from "react-hook-form"

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Form() {
  const {
    control,
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (form_inputs) => {
    console.log(form_inputs)
    // const { data, error } = supabase.auth.signUp(form_inputs)
    // if (!error) console.log(data, error)
  }
    
  const signOut = () => {
    // const { error } = supabase.auth.signOut()
    // console.log(error)
  }
  
  // console.log(watch("email")) // watch input value by passing the name of it

  return(
    <>
      <div className='flex min-h-screen'>
        <Sidebar/>
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          <h1>Forms Page</h1>
          <form className='' onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("email")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  placeholder="Last name"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="lastName"
            />

            <TextField
              
              id="outlined-error-helper-text"
              label="Error"
              defaultValue="Hello World"
              helperText="Incorrect entry."
            />

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

            <input type="submit" />
          </form>
          
          <button onClick={signOut}>Sign Out</button>

        </div>
      </div>
    </>
  )
}