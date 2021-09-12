import React,{useState} from "react";
import { Carousel } from "react-responsive-carousel";

import "./style.scss";
const Carousel2 = () =>{

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
          src="https://m.media-amazon.com/images/I/51U3ogfpl3L._SL1000_.jpg" 
        />
    
      </div>
      <div >
        <img
         
          alt=""
          src="https://cdn.shopify.com/s/files/1/0044/1208/0217/products/NOVELLA07_STAINLESS_STEEL_BRIGHT_RED_NS07SSBRD_01_2000x.jpg?v=1580126184"
         
           
        />
      </div>
      <div >
        <img
           
          alt=""
          // src="https://ii1.pepperfry.com/media/catalog/product/c/i/800x880/citta-ergonomic-chair-in-olive-green-colour-by-workspace-interio-citta-ergonomic-chair-in-olive-gree-yc7ooe.jpg" 
          src="https://cdn.shopify.com/s/files/1/0018/3219/0061/products/novella-08-red-chairs.png?v=1565158863"
         
        />
      </div>

      <div >
        <img
         
          alt=""
          src="https://cdn.shopify.com/s/files/1/0044/1208/0217/products/NOVELLA07_STAINLESS_STEEL_BRIGHT_RED_NS07SSBRD_04_2000x.jpg?v=1580126184"
         
      
        />
      </div>
     
    </Carousel>
  </div>
);}

export default Carousel2;
