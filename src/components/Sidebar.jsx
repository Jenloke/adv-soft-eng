import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
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
        <CDBSidebar textColor="#d1d1d1" backgroundColor="#ff2e2e">
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
              <NavLink exact to="/" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/table" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/form" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Forms</CDBSidebarMenuItem>
              </NavLink>
              {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                            </NavLink> */}
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              style={{
                padding: '20px 5px',
              }}
            >
              <NavLink exact to="/login" activeClassName="activeClicked">
                Account
              </NavLink>
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </>
  )
}
