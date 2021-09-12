import React from 'react'
import {
    BrowserRouter as Router,Switch,
    Link
  } from "react-router-dom";
  import "./style.scss";
const Page404 = () => {
    return (
        < >
            <div className="page-main">
                <h1 className="page-head">
                    Sorry,we cant 
                </h1>
                <h1 className="page-head1">
                   find your page.
                </h1>
                <hr className="page-hori"></hr>
                <p className="page-para">
                    The page you are looking for is no  longer available or has moved .please try our improved site search to find what your are looking for.
                </p>
                
              <Link to="/GoBack"><button class="error-button button1">Go Back</button></Link>  
                </div>
        </>
    )
}

export default Page404;
