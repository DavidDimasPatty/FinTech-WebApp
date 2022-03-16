import React from 'react'
import {useState} from 'react'
import axios from "axios";
import { useHistory} from 'react-router-dom';

const AddUser = () => {
    const [username, setusername]=useState('');
    const [password, setpassword]=useState('');
    const history=useHistory();
    
    const checkusername = async (e)=>{
        await axios.post(`http://localhost:5000/usercheck`,{
           username:username
       }).then((respon)=>{
         console.log(respon.data);
          if(respon.data.length===0){
           saveUser();
          }
          else{
              window.alert('username already taken');
          }
       })
     }

    const saveUser = async (e)=>{
        await axios.post("http://localhost:5000/create",{
            username:username,
            password:password,
        })
        history.push("/");
    }
  return (
    <div>
                <div className='field'>
                    <label className='label'>Username</label>
                    <input className="input"
                     type="text"
                     placeholder="username"
                     value={username}
                     onChange={(e) =>setusername(e.target.value)}
                     ></input>
                </div>
                <div className='field'>
                    <label className='label'>Password</label>
                    <input className="input" 
                    type="password"
                     placeholder="password"
                     value={password}
                     onChange={(e) =>setpassword(e.target.value)}
                     ></input>
                </div>
               
                <div className='field'>
                        <button onClick={checkusername} className='button is-primary'>Save</button>
                 </div>
            
           
    </div>
  )
}

export default AddUser