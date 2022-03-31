import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'
import 'bulma/css/bulma.min.css'
import './signup.css'

const AddUser = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const history = useHistory();
  const date_create = moment().format("DD-MM-YYYY hh:mm:ss")

  const checkusername = async (e) => {

    const devEnv = process.env.NODE_ENV !== "production";
    const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env;

    await axios.get(`${devEnv  ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}/user`, {
      params: {
        username:username
      }
    }).then((respon) => {
      // console.log(respon.data);
      if(respon.data.length === 0) {
        if(username.length>0){
          if(password.length>0){
            if(email.length>0){
              saveUser();
            }
            else{
              window.alert('email can`t be empty');
            }
          }
          else{
            window.alert('password can`t be empty');
          }
        }
        else {
          window.alert('password can`t be empty');
        }
      }
      else{
        window.alert('username, password, or email has been taken');
      }

    })

  }

  const saveUser = async (e) => {

    const devEnv = process.env.NODE_ENV !== "production";
    const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env;

    await axios.post(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}/user`, {
      username:username,
      password:password,
      email:email,
      createdAt:date_create,
      updatedAt:date_create
    })

    history.push("/");

  }
  
  return (
    
    <center>
      
      <div className='signupContainer'>
        <div className='signupTitle'>Sign Up</div>
          <form>
            <div className='signupLabel'>Username</div>
            <div className='signupInput'>
              <input type="text" onChange={e => setusername(e.target.value)} placeholder="username" spellCheck="false" required/>
            </div>
            <div className='signupLabel'>Email</div>
            <div className='signupInput'>
              <input type="email" onChange={e => setemail(e.target.value)} placeholder="email" spellCheck="false" required/>
            </div>
            <div className='signupLabel'>Password</div>
            <div className='signupInput'>
              <input type="password" onChange={e => setpassword(e.target.value)} placeholder="password" required/>
            </div>
            <div><input type="submit" onClick={checkusername} value="Sign Up" className="signupButton"/></div>
          </form>
      </div>
    
    </center>
  
  )

}

export default AddUser