export default function Home() {
  return(
    <>
      <h1>
        ICT Management System
      </h1>
      
      <nav>
        <ul>
          <li>
            <a href={`/table`}>Table</a>
          </li>
          <li>
            <a href={`/form`}>Form</a>
          </li>
        </ul>
      </nav>
    </>
  )
}