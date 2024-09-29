import Sidebar from "../components/Sidebar.jsx";

export default function Home() {
  return(
    <>
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar/>
        <div style={{ flexGrow: 1, padding: '1rem' }}>
          {/* Other content goes here */}
          <h1>ICT MANAGEMENT SYSTEM</h1>
          <p>This is the rest of the screen content.</p>
        </div>
      </div>
    </>
  )
}