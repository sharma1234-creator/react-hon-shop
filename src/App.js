import React,{useState} from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Carousel1 from "./components/Carousel1";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FooterPage from "./components/FooterPage";
import ContentReview from "./components/ContentReview";
import Content from "./components/Content";
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
// import Home from "./components/Home";
import Desk from "./NavComponents/Desk";
import Chairs from "./NavComponents/Chairs";
import Store from "./NavComponents/Store";
import Bundle from "./NavComponents/Bundle";
import Shop from "./NavComponents/Shop";
import Design from "./NavComponents/Design";
import Login from "./components/Login";
// import ValidatedLoginForm from "./components/ValidatedLoginForm";

import Page404 from "./components/Page404";
import AboutUs from "./FooterComponents/AboutUs";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home from "./components/Home";
import LoginLand from "./components/LoginLand";
import ValidatedLoginForm from "./components/ValidatedLoginForm";
import Signup from "./components/Signup";
import './App.css';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// new user login and register form
import SignIn from "./User/SignIn";
import SignUp from "./User/SignUp";
import SignIn1 from "./User/SignIn1";
function App() {
 
  const [add,setAdd] = useState(0);
  const [quantity,setQuantity] = useState(0);
  const [review, setReview] = useState(0);
  const [truth,setTruth] = useState(0);
  const [isRight,setIsRight] = useState(0);
  
  const [cond,setCond] = useState(0);
  const [afterWish,setAfterWish] = useState("");
  const [valve,setValve] = useState(0);
  const [logic,setLogic] = useState(0);

  const [ user, setLoginUser] = useState({})

  
  const [tcolor,setTcolor] = useState(0);
  const [wish,setWish] = useState(0);
  const [isWrong, setIsWrong] = useState();
  const [nam,setNam] = useState();
  const [final,setFinal] = useState();

  // const [name, setName] = useState();
  return (
   <>
    <Router>
    <div className="App">
        {/* <Banner />
        <Header add={add} setAdd={setAdd}/><br/>
        <div className="App">
        <Navbar /><br/>
        </div> */}
        
        {/* <div>
        <Carousel1/><br/><br/>
        <Content add={add} setAdd={setAdd} quantity={quantity} setQuantity={setQuantity}/><br/>
        <ContentReview />
        </div>
        <div className="final-footer">
        <FooterPage />
        </div> */}
     
        <div className="content-router">
          <Switch>
           
          <Route exact path="/">
          <Banner />
        <Header add={add} setAdd={setAdd} quantity={quantity} setQuantity={setQuantity} valve={valve} setValve={setValve}/><br/>
        <div className="App">
        <Navbar isWrong={isWrong} setIsWrong={setIsWrong} name={nam} setNam={setNam} tcolor={tcolor} wish={wish} setTcolor={setTcolor} setWish={setWish} truth={truth} setTruth={setTruth} isRight={isRight} setIsRight={setIsRight} add={add} setAdd={setAdd} final={final} setFinal={setFinal}/><br/>
        </div> 
        <div>
        <Carousel1/><br/><br/>
        
        <Content logic={logic} setLogic={setLogic} review={review} setReview={setReview} add={add} setAdd={setAdd} quantity={quantity} setQuantity={setQuantity} cond={cond} setCond={setCond} afterWish={afterWish} setAfterWish={setAfterWish}  valve={valve} setValve={setValve} tcolor={tcolor} wish={wish} setTcolor={setTcolor} setWish={setWish} truth={truth} setTruth={setTruth} isRight={isRight} setIsRight={setIsRight}/><br/>
        <ContentReview logic={logic} setLogic={setLogic} review={review} setReview={setReview}/>
        {/* <Bundle/> */}
        </div>
        {/* <div className="final-footer"> */}
        <FooterPage />
            {/* <div className="render-chair"> */}
           
            {/* <div className="App"> */}
            {/* <Navbar /><br/> */}
            {/* </div> */}
            {/* <div className="nav-final"> */}
             {/* <Chairs /> */}
             {/* </div> */}
             {/* <div className="footer-router"> */}
             {/* <FooterPage /> */}
             {/* </div> */}
             {/* </div> */}
            </Route>

            <Route exact path="/desks">
              <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
            <Desk />
            </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>


            <Route exact path="/stores">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             <Store />
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>

            <Route path="/bundles">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             <Bundle />
             {/* <h1>hello 404</h1> */}
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>

            <Route exact path="/shop">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             <Shop />
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>

            <Route exact path="/design">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             <Design />
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>

            {/* <Route exact path="/loginland">
            {
              user && user._id ? <LoginLand setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
            </Route> */}

            {/* <Route exact path="/log">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
          
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route> */}
            
            <Route exact path="/login">
            
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             {/* <ValidatedLoginForm  setLoginUser={setLoginUser} tcolor={tcolor} wish={wish} setTcolor={setTcolor} setWish={setWish} isWrong={isWrong} setIsWrong={setIsWrong}/> */}
             <SignIn  setLoginUser={setLoginUser} tcolor={tcolor} wish={wish} setTcolor={setTcolor} setWish={setWish} isWrong={isWrong} setIsWrong={setIsWrong}/>
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>


            <Route exact path="/login1">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             {/* <Login  setLoginUser={setLoginUser} truth={truth} setTruth={setTruth} isRight={isRight} setIsRight={setIsRight} add={add} setAdd={setAdd} quantity={quantity} setQuantity={setQuantity} isWrong={isWrong} setIsWrong={setIsWrong}/> */}
             <SignIn1 setLoginUser={setLoginUser} truth={truth} setTruth={setTruth} isRight={isRight} setIsRight={setIsRight} add={add} setAdd={setAdd} quantity={quantity} setQuantity={setQuantity} isWrong={isWrong} setIsWrong={setIsWrong}/>
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>


            <Route exact path="/signup">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             {/* <Signup name={nam} setNam={setNam} final={final} setFinal={setFinal}/> */}
             <SignUp name={nam} setNam={setNam} final={final} setFinal={setFinal}/>
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>


            <Route exact path="/error">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             <Page404 />
             </div>
             <div className="footer-router">
             <FooterPage />
             </div>
             </div>
            </Route>


            <Route exact path="/about">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            {/* <div className="nav-final"> */}
             <AboutUs />
             {/* </div> */}
             {/* <div className="footer-router"> */}
             <FooterPage />
             {/* </div> */}
             </div>
            </Route>


            <Route exact path="/GoBack">
            <div>
            {/* <Banner />
            <Header add={add} setAdd={setAdd}/><br/> */}
            <div className="App">
            {/* <Navbar /><br/> */}
            </div>
            <div className="nav-final">
             <Chairs />
             </div>
             <div className="footer-router">
             {/* <FooterPage /> */}
             </div>
             </div>
            </Route>



            <Route exact path="/car1">
            <div className="render-chair">
           
            <div className="App">
            {/* <Navbar /><br/> */}
            </div>
            <div className="nav-final">
             <Home tcolor={tcolor} wish={wish} setTcolor={setTcolor} setWish={setWish}/>
             </div>
             <div className="footer-router">
             {/* <FooterPage /> */}
             </div>
             </div>
            </Route>


            <Route exact path="/car2">
            <div className="render-chair">
           
            <div className="App">
            {/* <Navbar /><br/> */}
            </div>
            <div className="nav-final">
             <Home1 />
             </div>
             <div className="footer-router">
             {/* <FooterPage /> */}
             </div>
             </div>
            </Route>


           


            <Route exact path="/car3">
            <div className="render-chair">
           
            <div className="App">
            {/* <Navbar /><br/> */}
            </div>
            <div className="nav-final">
             <Home2 />
             </div>
             <div className="footer-router">
             {/* <FooterPage /> */}
             </div>
             </div>
            </Route>



            <Route exact path="/car4">
            <div className="render-chair">
           
            <div className="App">
            {/* <Navbar /><br/> */}
            </div>
            <div className="nav-final">
             <Home3 />
             </div>
             <div className="footer-router">
             {/* <FooterPage /> */}
             </div>
             </div>
            </Route>
          </Switch>
        </div>

    </div>
    </Router>
    <ToastContainer
                    position="top-right"
                    hideProgressBar={false}
                    autoClose={2000}
                    newestOnTop={true}
                    closeOnClick={false}
                    draggable={false}
                    rtl={false}
                
                  />
  </>
    
  );
}

export default App;

// import React from 'react'
// import Navbar from "./components/Navbar";
// import "./App.css";
// const App = () => {
//   return (
//     <div>
//       <Navbar />
//     </div>
//   )
// }

// export default App

