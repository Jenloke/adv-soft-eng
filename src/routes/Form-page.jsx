// import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx"

import supabase from '../utils/supabase.js'
import { useForm } from "react-hook-form"

export default function Form() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (form_inputs) => {
    console.log(form_inputs)
    const { data, error } = supabase.auth.signUp(form_inputs)
    if (!error) console.log(data, error)
  }
    
  const signOut = () => {
    const { error } = supabase.auth.signOut()
    console.log(error)
  }
  
  // console.log(watch("email")) // watch input value by passing the name of it

  return(
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar/>
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          <h1>Forms Page</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="test" {...register("email")} />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("password", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
          
          <button onClick={signOut}>Sign Out</button>

        </div>
      </div>
    </>
  )
}