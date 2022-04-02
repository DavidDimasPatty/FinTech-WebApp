import React, {useState, useEffect} from "react";
import {ReactSession} from "react-client-session";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import "./profile.css";

const Profile = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const {id} = useParams();
    const history=useHistory();
    
    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = async () => {
      const devEnv = process.env.NODE_ENV !== "production";
      const {REACT_APP_DEV_URL, REACT_APP_PROD_URL} = process.env;
      const response = await axios.get(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}/customer/${id}`,)
      // console.log(response.status);
      // console.log(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setBirth(response.data.birth);
      setCountry(response.data.country);
    }

    const token = ReactSession.get("login");
    // console.log(token);
  
    if(token != "true") {
      history.push("/");
      return(
        <div style={"height:100"}></div>
      );
    }
    
    return (

    <div className="container column is-20">

      <nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/customers">Customer List</a></li>
          <li><a href={`/customers/${id}`}>Detail</a></li>
        </ul>
      </nav>

      <div className="cardContainer mt-5 column is-10">

        <center>
          <img className="profileImage" src="https://freepikpsd.com/file/2019/10/default-profile-image-png-1-Transparent-Images.png"/>
          <div className="is-size-2">{name}</div>
          <div className="is-size-2">{email}</div>
          <div className="is-size-2">{birth}</div>
          <div className="is-size-2">{country}</div>
        </center>
        
      </div>
    
    </div>

    )

}

export default Profile