import React, {useEffect, useState} from 'react'
import {ReactSession} from 'react-client-session'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useHistory, useParams} from 'react-router-dom'
import ProfileUi from 'react-profile-card'
import {MDBContainer, MDBBtn, MDBCard, MDBRow, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol} from 'mdbreact'
import './customerList.css'

const CustomerList = () => {

  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    getAllCustomer();
  }, []);

  const history = useHistory();

  const getAllCustomer = async () => {
    const devEnv = process.env.NODE_ENV !== "production";
    const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env;
    const response = await axios.get(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}/customer`);
    // console.log(response.data);
    setCustomer(response.data);
  }
  // <MDBBtn href={`/profile/${customers.id}`}>Go to Profile</MDBBtn>
  
  const token = ReactSession.get("login");
  // console.log(token);
  
  if(token != "true") {
    history.push('/')
    return (
      <div style={'height:100'}></div>
    );
  }
  
  return (

  <div className="container column is-20">

    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><Link to={`/home`}>Home</Link></li>
        <li><Link to={`/customers`}>Customer List</Link></li>
      </ul>
    </nav>

    <div className='containers'>
      
      {customer.map((customers) => 
        <div key={customers.id}>{
          <MDBCard className='customerCard m-3 pb-2'>
            <img src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"/>
            <MDBCol>
              <div className="cardInfo">{customers.name}</div>
              <div className="cardInfo">{customers.email}</div>
              <div className="cardInfo">Status:</div><div className="cardInfo">Pending</div>
              <div className="cardButton"><Link to={`/customers/${customers.id}`} className='button is-small is-info'>Detail</Link></div>
            </MDBCol>
          </MDBCard>
        }</div>
      )}
        
    </div>
  
  </div>
  
  )

}

export default CustomerList