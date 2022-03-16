import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarContent,SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './dashboard.css'

import { ReactSession } from 'react-client-session';

function logout() {
  ReactSession.set("login", "false");
}

const Dashboard = ({  collapsed, toggled, handleToggleSidebar }) => {
   
  
    return (

<div id="app" >   
<section class="main-content columns is-fullheight ">

  <aside class="column is-narrow-mobile is-fullheight section is-hidden-mobile pr-4">

    <p class="menu-label is-hidden-touch">Navigation</p>
    <ul class="menu-list">
      <li>
        <a href="/home" class="is-active">
          <span class="icon"><i class="fa fa-home"></i></span> Home
        </a>
      </li>
      <li>
        <a href="/customer" class="">
          <span class="icon"><i class="fa fa-table"></i></span> Customer List
        </a>
      </li>
      <li>
        <a href="#" class="">
          <span class="icon"><i class="fa fa-info"></i></span> Profile
        </a>
      </li>
      
      <li>
        <a href="/" class="">
          <span class="icon"><i class="fa fa-info"></i></span> Log Out
        </a>
      </li>
    </ul>

  </aside>
  </section>
  </div>
  
  )
}

export default Dashboard
