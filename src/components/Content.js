// import { getQueriesForElement } from '@testing-library/react';
import React,{useState,useEffect} from 'react'
// import { Alert } from 'react-bootstrap';
import AddWishList from "./AddWishlist";
import AddedWishList from './AddedWishList';
import {
    BrowserRouter as Router,Switch,
    Link
  } from "react-router-dom";
import "./style.scss";
const Content = ({add,setAdd,quantity,setQuantity,review,setReview,cond,setCond, afterWish,setAfterWish, valve,setValve ,logic, setLogic} ) => {
   
    const [color,setColor] = useState("");
    const [price,setPrice] = useState("");
    const [item,setItem] = useState("");
    const [wish,setWish] = useState(0);
    const [truth,setTruth] = useState(0);
    const [isRight,setIsRight] = useState(0);
    const [tcolor,setTcolor] = useState(0);
  
    useEffect(() => {
      handleClick("black");
    }, [])

    const handleWish = () =>{
        if(!tcolor ){
        setWish("red");
        setTcolor(true);
        }
        else{
            setWish("wheat");
            setTcolor(false);
        }
        setCond(true);
    }
    const handleClick = (event) =>{
        if(event === "khaki"){
          setColor("khaki");
          setPrice("$500.00");
          setItem("#300000");
             
        } else if(event === "red"){
            setColor("red");
            setPrice("$600.00");
            setItem("#400000");
        } else if(event === "yellow"){
            setColor("yellow");
            setPrice("$700.00");
            setItem("#600000");
            // setRound("green");
        } else{
            setColor("black");
            setPrice("$900.00");
            setItem("#900000");
        }
     
    }

    const handleClick1 = (e) =>{
        if(!truth){
           setAdd(quantity );
           setTruth(true);
           setIsRight(true);
        }
        else{
        setAdd("0");
        setTruth(false);
        setIsRight(false);
        }
       
        setQuantity("");
    }
    return (
        <div className="main-content">
            <h1 className="content-header">Traction</h1>
            <h5 className="content-para">High-Back Executive Chair</h5><br/>
            <h6 className="content-para2">Produced by HON </h6>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <span className="content-add">{review} reviews</span>
            <a href="#review" className="anchor-review adidas" onClick={()=>setLogic(true)}><span className="adidas">Add a review</span></a><br/><br/>
            <h5 className="content-color">Color: <span>{color}</span></h5>

        {/* <Link to="/car1"><a href="#img4" > <i className={`fas fa-circle circle1  ${color === "black" && "active-color"}`} name="black" onClick={()=>handleClick("black")} ></i></a></Link>*/}
        <Link to="/car1" onClick={()=>handleClick("black")} ><i className={`fas fa-circle circle1  ${color === "black" && "active-color"}`} name="black" ></i></Link>    
      {/* <Link to="/car2"><a href="#img3"><i className={`fas fa-circle circle2 ${color === "red" && "active-color"}`} name="red" onClick={()=>handleClick("red")}></i></a></Link>      */}
      {/* <Link to="/car2"><i className={`fas fa-circle circle2 ${color === "red" && "active-color"}`} name="red" onClick={()=>handleClick("red")}></i></Link>      */}
     <Link to="/car2" onClick={()=>handleClick("red")}><i className={`fas fa-circle circle2 ${color === "red" && "active-color"}`} name="red" ></i></Link>     
        <Link to="/car3" onClick={()=>handleClick("yellow")}><i className={`fas fa-circle circle3 ${color === "yellow" && "active-color"}`} name="yellow" ></i></Link> 
         {/* <Link to="/car4"><a href="#img1"><i className={`fas fa-circle circle4 ${color === "khaki" && "active-color"}`} name="khaki" onClick={()=>handleClick("khaki")}></i> </a><br/><br/><br/></Link>    */}
         <Link to="/car4" onClick={()=>handleClick("khaki")}><i className={`fas fa-circle circle4 ${color === "khaki" && "active-color"}`} name="khaki" ></i> </Link> 
           
           <h6 className="content-price">Retail Price</h6>
           <h4 className="content-price">{price}</h4>
           <h6 className="content-item">item {item}</h6>
           {/* className="btn btn-secondary" */}
           {/* btn btn-outline-secondary */}
           <hr className="content-horizontal"></hr><br/>
           <div className="content-quantity">
            <h6>Quantity</h6>
           <select name="cars" className="dropdown-content" id="cars" value={quantity} placeholder="add" onChange={(e)=>setQuantity(e.target.value)}>
               <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
           </select>
           </div>
           <div>
           {/* <button type="button" className={isRight ? " btn btn2-secondary" : " btn btn-outline-secondary"} onClick={handleClick1} >{truth ? "remove from cart" : "Add To Cart"}</button><br/> */}
           <button type="button" class="button-cart button11" style={{color:"white"}} className={isRight ? " btn btn2-secondary" : " btn btn-outline-secondary"} onClick={handleClick1}>{truth ? "remove from cart" : "Add To Cart"}</button><br/>
           {/* <button type="button"  className={isRight ? " btn btn2-secondary" : " btn btn-secondary"} onClick={handleClick1}></button><br/> */}
           <i class="fas fa-heart far5" style={{color:wish}}></i>
           <a type='button'  className="wishlist"  onClick={handleWish}>{tcolor ? "ADDED TO WISHLIST" : "ADD TO WISHLIST"}</a>
           </div>
        </div>
    )
}

export default Content;
