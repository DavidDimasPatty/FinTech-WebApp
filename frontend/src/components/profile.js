import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios";
import { useHistory,useParams} from 'react-router-dom';
import "./profile.css"

import { ReactSession } from 'react-client-session';

const Profile = () => {
    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const {id}=useParams();

   

    useEffect(()=>{
        getProfile();
    },[]);

    const getProfile = async ()=>{
        const response= await axios.get(`http://localhost:5000/profile/${id}`);
        console.log(response.data[0]);
        setName(response.data[0].name);
        setEmail(response.data[0].email);
    }
    const token=ReactSession.get("login");
    console.log(token);
  
    if(token!="true"){
        window.location.href="/";
        return(<div style={'height:100'}></div>);
    }
  return (
      
    <div class="card">
    
    <div class="cont">
        <img src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png" width={90} height={100}></img>
      <h4><b>{name}</b></h4> 
      <p>{email}</p> 
    </div>
    </div>
  )
}

export default Profile