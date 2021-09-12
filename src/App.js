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
// import Login from "./components/Login";
// import ValidatedLoginForm from "./components/ValidatedLoginForm";
import Signup from "./components/Signup";
import Page404 from "./components/Page404";
import AboutUs from "./FooterComponents/AboutUs";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home from "./components/Home";
import './App.css';
import ValidatedLoginForm from "./components/ValidatedLoginForm";

function App() {
 

  const [add,setAdd] = useState(0);
  const [quantity,setQuantity] = useState(0);
  
  
  return (
   
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
            {/* <div className="render-chair"> */}
           
            {/* <div className="App"> */}
            {/* <Navbar /><br/> */}
            {/* </div> */}
            {/* <div className="nav-final"> */}
             <Chairs />
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

            <Route exact path="/login">
            <div>
            <Banner />
            <Header add={add} setAdd={setAdd}/><br/>
            <div className="App">
            <Navbar /><br/>
            </div>
            <div className="nav-final">
             <ValidatedLoginForm />
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
             <Signup />
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
             <Home />
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

