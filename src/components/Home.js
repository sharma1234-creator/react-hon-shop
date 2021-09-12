import React,{useState} from "react";
import Banner from "./Banner";
import Header from "./Header";
import Navbar from "./Navbar";
import Carousel1 from "./Carousel1";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FooterPage from "./FooterPage";
import ContentReview from "./ContentReview";
import Content from "./Content";
// import Bundle from "./NavComponents/Bundle";

// import './App.css';
function Home() {
 

  const [add,setAdd] = useState(0);
  const [quantity,setQuantity] = useState(0);
  const [review, setReview] = useState(0);
  
  const [cond,setCond] = useState(0);
  const [afterWish,setAfterWish] = useState("");
  const [valve,setValve] = useState(0);
  const [logic,setLogic] = useState(0);
  return (
   
    
    <div className="App">
        <Banner />
        <Header add={add} setAdd={setAdd} quantity={quantity} setQuantity={setQuantity} valve={valve} setValve={setValve}/><br/>
        <div className="App">
        <Navbar /><br/>
        </div> 
        <div>
        <Carousel1/><br/><br/>
        
        <Content logic={logic} setLogic={setLogic} review={review} setReview={setReview} add={add} setAdd={setAdd} quantity={quantity} setQuantity={setQuantity} cond={cond} setCond={setCond} afterWish={afterWish} setAfterWish={setAfterWish}  valve={valve} setValve={setValve}/><br/>
        <ContentReview logic={logic} setLogic={setLogic} review={review} setReview={setReview}/>
        {/* <Bundle/> */}
        </div>
        {/* <div className="final-footer"> */}
        <FooterPage />
        {/* </div> */}
    </div>
   
  );
}

export default Home;
