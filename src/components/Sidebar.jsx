import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          overflow: 'scroll initial',
        }}
      >
        <CDBSidebar textColor="#d1d1d1" backgroundColor="#c71a1a">
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
              <NavLink exact to="/" className="">
                <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/labs" className="">
                <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/form" className="">
                <CDBSidebarMenuItem icon="user">Forms</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/login" className="">
                <CDBSidebarMenuItem icon="user">Account</CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </>
  )
}
