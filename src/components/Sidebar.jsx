import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact'
import { NavLink } from 'react-router-dom'

import supabase from '../utils/supabase.js'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const navigate = useNavigate()

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        overflow: 'scroll initial',
      }}
    >
      <CDBSidebar textColor="#ffffff" backgroundColor="#1976d2">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-small"></i>}>
          <span
            className="text-decoration-none"
            style={{ color: 'inherit', fontSize: '0.85rem' }}
          >
            Batangas State University
          </span>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/adv-soft-eng/" className="">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adv-soft-eng/labs" className="">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/adv-soft-eng/form" className="">
              <CDBSidebarMenuItem icon="file">Forms</CDBSidebarMenuItem>
            </NavLink>
            <CDBSidebarMenuItem
              onClick={async () => {
                const { error } = await supabase.auth.signOut()
                if (error) console.log(error)
                navigate('/adv-soft-eng/login')
              }}
              icon="lock"
            >
              Logout
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  )
}
