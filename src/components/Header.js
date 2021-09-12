import React,{useState} from 'react'
import {
    BrowserRouter as Router,Switch,
    Link
  } from "react-router-dom";
const Header = ({add,setAdd ,quantity,cond, valve,setValve}) => {

     const [input,setInput] = useState("");
     const [cancel,setCancel] = useState("");

     const handleChange5 = (e) =>{
         setInput(e.target.value);
     }

     const handleClick5 = () =>{
         setInput("");
     }
    return (
        <div className="head">
           
             <i className="fas fa-chair"></i>
           
             
            <input type="text" className="input-field" value={input} onChange={handleChange5}/>
            <i class="fas fa-search"></i>
            <span className="font-icon">
            <i className="far fa-heart"></i>
            {/* <button type="button" className="header-button" onClick={handleClick5}>X</button> */}
            <div className="add-count">
            <p className="add-cart cart">{add}</p>
            <i className="fas fa-cart-plus"></i>
            </div>
            </span>
        </div>
    );
};

export default Header;
