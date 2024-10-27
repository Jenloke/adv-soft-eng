import Sidebar from "../components/Sidebar.jsx";

import supabase from '../utils/supabase.js'
// import { useState, useEffect } from 'react'

import Button from '@mui/material/Button';

export default function Home() {
  // const [lab, setLab] = useState([])

  // useEffect(() => {
  //   const getLab = async () => {
  //     const { data: Laboratory } = await supabase.from('Laboratory').select('*')
  //     return Laboratory
  //   }

  //   setLab(getLab())
  // }, [])


  return(
    <>
      {/* <button onClick={() => console.log(lab)}>123</button> */}
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar/>
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          {/* Other content goes here */}
          <h1>ICT MANAGEMENT SYSTEM</h1>
          <p>This is the rest of the screen content.</p>

          <Button 
            onClick={ async () => {
              const { data } = await supabase.auth.signInWithPassword({email: 'test@example.com', password: '12345'})
              console.log(data)
            }} 
            variant="contained"
          >
            LOGIN
          </Button>
        </div>
      </div>
    </>
  )
}