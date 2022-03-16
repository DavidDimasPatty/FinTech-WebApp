import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { ReactSession } from 'react-client-session';

const Home = () => {
    const token=ReactSession.get("login");
    console.log(token);
 
    if(token!="true"){
        window.location.href="/";
        return(<div style={'height:100'}></div>);
    }
     
    return (
      <div className='container'>    
       <center><h2>Welcome</h2></center>
    </div>
  )
}

export default Home
