import React,{useState} from "react";
import { Carousel } from "react-responsive-carousel";

import "./style.scss";
const Carousel4 = () =>{

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
          src="https://media.fds.fi/product_image/800/42Hay_21_TH.jpg" 
        />
    
      </div>
      <div >
        <img
         
          alt=""
          src="https://media.fds.fi/product_image/800/42Hay_21_TH.jpg"
         
          
        />
      </div>
      <div >
        <img
           
          alt=""
          // src="https://ii1.pepperfry.com/media/catalog/product/c/i/800x880/citta-ergonomic-chair-in-olive-green-colour-by-workspace-interio-citta-ergonomic-chair-in-olive-gree-yc7ooe.jpg" 
          src="https://media.fds.fi/product_image/800/42Hay_21_TH.jpg"
         
        />
      </div>

      <div >
        <img
         
          alt=""
          src="https://media.fds.fi/product_image/800/42Hay_21_TH.jpg"
         
      
        />
      </div>
     
    </Carousel>
  </div>
);}

export default Carousel4;
