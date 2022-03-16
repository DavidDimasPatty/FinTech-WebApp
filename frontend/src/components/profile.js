import React from 'react'
import {useState,useEffect} from 'react'
import axios from "axios";
import { useHistory,useParams} from 'react-router-dom';
import "./profile.css"
import { MDBContainer, MDBRow, MDBCol,
  MDBCard,MDBBtn } from "mdbreact";

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
    <div class="container column is-20" >
     <nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href="/home">Home</a></li>

    <li><a href="/customer">Customer List</a></li>
    <li><a href={`/profile/${id}`}>Detail</a></li>
    </ul>
    </nav>
    <MDBCard className='mt-5 column is-10'>
      <MDBCol>
      <MDBRow className='mb-2'>
        <center><MDBCol> <img src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png" width={90} height={100}></img></MDBCol></center>
      </MDBRow>
      <MDBRow>
      <center> <MDBCol><h3 className='is-size-2'>{name}</h3></MDBCol></center>
      </MDBRow>
      <MDBRow>
      <center>  <MDBCol><h3 className='is-size-2'>{email}</h3></MDBCol></center>
      </MDBRow>
     
      </MDBCol>
      </MDBCard>
      
  </div>
  )
}

export default Profile