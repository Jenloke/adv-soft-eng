// import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

export default function Form() {
  return(
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar/>
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          <h1>Forms Page</h1>
          
        </div>
      </div>
    </>
  )
}