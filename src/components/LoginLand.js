import React from "react";
import {
    BrowserRouter as Router,Switch,
    Link
  } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./Sign_Login.css"


const LoginLand = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <h1>Hello Login Landing Page</h1>
          <Link to="/login" className="button" onClick={() => setLoginUser("/login")} >Logout</Link>  
             {/* <div className="button" onClick={() => history.push("/login")} >Logout</div> */}
        </div>
    )
}

export default LoginLand;