import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useHistory,useParams} from 'react-router-dom';
import {Link} from "react-router-dom";
import { ReactSession } from 'react-client-session';


const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
   
    const token=ReactSession.get("login");
    console.log(token);
    const login = async (e)=>{
         await axios.post(`http://localhost:5000/user`,{
            username:username,
            password:password,
        }).then((respon)=>{
          console.log(respon.data);
           if(respon.data.length!==0){
            ReactSession.set("login", "true");
            window.location.href="/home"
           }
           else{
             
           }
        })
      }
     
      

    
    
    return (
        <div className="login-wrapper">
        <h1>Please Log In</h1>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit" onClick={login}>Submit</button>
          </div>
          <Link to={`/signup`} className='button is-small is-info'>Sign Up</Link>
      </div>
    )
  }


export default Login
