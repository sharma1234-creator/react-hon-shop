import React,{useState} from 'react'
import {
  BrowserRouter as Router,Switch,
  Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
const Navbar = ({isWrong,setIsWrong,nam,setNam,tcolor,wish,setTcolor,setWish,setTruth,truth,isRight,setIsRight,add,setAdd,final,setFinal}) => {
  const history = useHistory();

  const logout = () =>{
    toast.success("Go to home page");
      // alert("Go to Home page");
      setIsWrong(0);
      setTcolor(0);
      setWish("wheat");
      setTruth(0);
      setIsRight(0);
      setAdd(0);
      
      history.push("/");

  }

  const SignUp = () =>{
      history.push("/signup");
  }
  
  const Login = () =>{
    history.push("/login");
  }
    return (
        <div className="navbar-main">
             <ul className="nav justify-content-center">

<li className="nav-item">
 <Link className="nav-link active" aria-current="page" to="/">CHAIRS</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/desks">DESKS</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/stores">STORAGES & ACCESSORIES</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="bundle" to="/bundles">BUNDLE</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/shop">SHOP BY SPACES</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/design">DESIGN YOUR HOME SERVICES</Link>
</li>

 <li className="nav-item">
  {/* <Link to="/login" ><i className="fas fa-user last-icon"></i></Link> */}
  {/* <div class="dropdown">
       <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
     </div>
 </div> */}
 {
   isWrong ? <div className="dropdown">
   
   <i className="fas fa-user last-icon"></i>
  <div className="dropdown-content">
    <a href="#">welcome {final} </a>
    
    <a href="#" onClick={logout}>Logout</a>
    
 </div>
</div>  :  <div className="dropdown">
   
       <i className="fas fa-user last-icon"></i>
      <div className="dropdown-content">
        <a href="#" onClick={Login}>Login</a>
        <a href="#" onClick={SignUp}>SignUp</a>
     
     </div>
 </div>
 }

</li> 
</ul> 
</div>
    )
}

export default Navbar;

