import React,{useState} from "react";
import validator from 'validator';
import Subscribe from "./Subscribe";
import {
  BrowserRouter as Router,Switch,
  Link
} from "react-router-dom";
import "./style.scss"

function FooterPage() {
    const [email,setEmail] = useState("");

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         
          <div className="col col2">
            <h4>QUICK LINKS</h4>
            <ui className="list-unstyled main-div">
              <li>Desks</li>
              <li>Chairs</li>
              <li className="storage-main">Storage & Accesories</li>
              <li className="shop-main">Shop by Space</li>
            </ui>
          </div>
         
          <div className="col col1">
            <h4>About Company</h4>
            <ui className="list-unstyled">
            <Link className="link-footer" to="/about" href="#imge"><li className="footer-main">About Us</li></Link>
              <li className="footer-customer">Customer Services</li>
              <li className="footer-customer">Orders and Returns</li>
              <li className="footer-privacy">Privacy and Cookie policy</li>
            </ui>
          </div>
        </div>
       
        <i class="fas fa-chair footer-logo"></i>
        <div className="input-subscribe">
  <p className="mail-para">JOIN OUR MAILING LIST</p>

  <form type="submit" onSubmit={()=>alert("Thanks for subscribing us!")}>
  <input type="email" placeholder="Enter the email" value={email} pattern="[^ @]*@[^ @]*" className="footer-mail" onChange={(e)=> 
    setEmail(e.target.value)} required/>
  <button className="subscribe-btn" type="submit" value="Submit" >Subscribe</button>
  </form>

  </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
