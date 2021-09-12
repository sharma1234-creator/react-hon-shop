import React,{useState} from "react";
import { Carousel } from "react-responsive-carousel";

import "./style.scss";
const Carousel3 = () =>{

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
          src="https://m.media-amazon.com/images/I/611pW5iHcYL._SL1178_.jpg" 
        />
    
      </div>
      <div >
        <img
         
          alt=""
          src="https://m.media-amazon.com/images/I/611pW5iHcYL._SL1178_.jpg"
         
          
        />
      </div>
      <div >
        <img
           
          alt=""
          // src="https://ii1.pepperfry.com/media/catalog/product/c/i/800x880/citta-ergonomic-chair-in-olive-green-colour-by-workspace-interio-citta-ergonomic-chair-in-olive-gree-yc7ooe.jpg" 
          src="https://m.media-amazon.com/images/I/611pW5iHcYL._SL1178_.jpg"
         
        />
      </div>

      <div >
        <img
         
          alt=""
          src="https://m.media-amazon.com/images/I/611pW5iHcYL._SL1178_.jpg"
         
      
        />
      </div>
     
    </Carousel>
  </div>
);}

export default Carousel3;
