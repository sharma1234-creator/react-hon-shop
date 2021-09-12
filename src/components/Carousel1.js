import React,{useState} from "react";
import { Carousel } from "react-responsive-carousel";

import "./style.scss";
const Carousel1 = () =>{

  const [imag, setImag] = useState();

  const handleImage = () =>{
    setImag("blue");
  }
return (

  <div className="image">
    
    <Carousel autoplay>
      <div>
        <img 
      
          alt=""
          src="https://www.ulcdn.net/images/products/304248/original/Barry_Study_Chair_New_Black_LP.jpg?1604985316"
        />
    
      </div>
      <div >
        <img
         
          alt=""
          src="https://www.ulcdn.net/images/products/304248/original/Barry_Study_Chair_New_Black_LP.jpg?1604985316"
         
         
        />
      </div>
      <div >
        <img
           
          alt=""
          // src="https://ii1.pepperfry.com/media/catalog/product/c/i/800x880/citta-ergonomic-chair-in-olive-green-colour-by-workspace-interio-citta-ergonomic-chair-in-olive-gree-yc7ooe.jpg" 
          src="https://www.ulcdn.net/images/products/304248/original/Barry_Study_Chair_New_Black_LP.jpg?1604985316"
          
        />
      </div>

      <div >
        <img
         
          alt=""
          src="https://www.ulcdn.net/images/products/304248/original/Barry_Study_Chair_New_Black_LP.jpg?1604985316"
         
        
        />
      </div>
     
    </Carousel>
  </div>
);}

export default Carousel1;



