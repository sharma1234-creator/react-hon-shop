import React from 'react'
import {
  BrowserRouter as Router,Switch,
  Link
} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar-main">
             <ul className="nav justify-content-center">

<li className="nav-item">
 <Link className="nav-link active" aria-current="page" to="/">CHAIRS</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/desks">DESKS</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/stores">STORAGES & ACCESSORIES</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="bundle" to="/bundles">BUNDLE</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/shop">SHOP BY SPACES</Link>
</li>

<li className="nav-item">
  <Link className="nav-link active" aria-current="page" to="/design">DESIGN YOUR HOME SERVICES</Link>
</li>

<li className="nav-item">
  <Link to="/login" ><i className="fas fa-user last-icon"></i></Link>
</li>
</ul> 

        </div>
    )
}

export default Navbar;

