import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarContent,SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './dashboard.css'

const Dashboard = ({  collapsed, toggled, handleToggleSidebar }) => {
   
  
    return (
        <div className='sidebar'>
                <ProSidebar
                  collapsed={collapsed}
                  toggled={toggled}
                  breakPoint="md"
                  onToggle={handleToggleSidebar}>
                <Menu iconShape="square">
                    <MenuItem >CustomerList
                    <Link to="/customer" />       
                    </MenuItem>
                    <MenuItem >Onboard Customer</MenuItem>
                    <MenuItem >Home
                    <Link to="/home" />       
                    </MenuItem>
                    <MenuItem >Profile
                    <Link to="/profile" />       
                    </MenuItem>
                    <MenuItem >Log Out
                    <Link to="/" />       
                    </MenuItem>
                </Menu>
                </ProSidebar>  
    </div>
  )
}

export default Dashboard
