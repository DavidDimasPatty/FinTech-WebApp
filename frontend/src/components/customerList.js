import React, { useEffect, useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import ProfileUi from 'react-profile-card';
import './customerList.css';

import { ReactSession } from 'react-client-session';
const CustomerList = () => {
 
    const [customer,setCustomer]=useState([]);
    useEffect(()=>{
        getAllCustomer();
    },[]);

    const getAllCustomer= async()=>{
        const response = await axios.get('http://localhost:5000/customerlist');
        console.log(response.data);
        setCustomer(response.data);

    }
    const token=ReactSession.get("login");
    console.log(token);
  
    if(token!="true"){
        window.location.href="/";
        return(<div style={'height:100'}></div>);
    }
  
    return (
         <div className='container'>    
              { customer.map((customers)=>(
              <Link className="link" to={`/profile/${customers.id}`}  >
                  <div > 
                  
                  <ProfileUi 
                    imgUrl='' 
                    name= {customers.name} 
                    designation={customers.email}
                  
                   />
                </div>
              </Link>

                ))}
                
            
    </div>
  )
}

export default CustomerList
