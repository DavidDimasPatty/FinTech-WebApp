import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom';
import ProfileUi from 'react-profile-card';
import './customerList.css';
import {
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBRow,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from 'mdbreact';
import { ReactSession } from 'react-client-session';

const CustomerList = () => {

  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    getAllCustomer();
  }, []);

  const history = useHistory();

  const getAllCustomer = async () => {
    const devEnv = process.env.NODE_ENV !== "production";
    const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env;
    const response = await axios.get(`${devEnv  ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}/customer`);
    console.log(response.data);
    setCustomer(response.data);
  }
  // <MDBBtn href={`/profile/${customers.id}`}>Go to Profile</MDBBtn>
  
  const token = ReactSession.get("login");
  console.log(token);
  
  if (token != "true") {
    history.push('/')
    return (<div style={'height:100'}></div>);
  }
  
  return (

  <div class="container column is-20">

    <nav class="breadcrumb" aria-label="breadcrumbs">

      <ul>
        <li><Link to={`/home`}>Home</Link></li>
        <li><Link to={`/customers`}>Customer List</Link></li>
      </ul>
      
    </nav>

    <div className='containers'>

      {customer.map((customers) => (

        <MDBCard className='customerCard m-3 pb-2'>
          
          <img src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"/>
          
          <MDBCol>
            
            <div class="cardInfo">
              {customers.name}
            </div>

            <div class="cardInfo">
              {customers.email}
            </div>

            <div class="cardInfo">
              Status:
            </div>

            <div class="cardInfo">
              Pending
            </div>

            <div class="cardButton">
              <Link to={`/customers/${customers.id}`} className='button is-small is-info'>Detail</Link>
            </div>

          </MDBCol>
        
        </MDBCard>

      ))}
    
    </div>
  
  </div>
  
  )

}

export default CustomerList