import React from 'react'
import "./style.scss"
import Dialog from "./Dialog";
const Banner = () => {

    

    return (
        <div className="banner-main">
             <p className="banner-para">Free shipping when you spend $500 +</p>
             {/* <div className="dialog-box"> */}
             <Dialog />
             {/* </div> */}
            
        </div>
    )
}

export default Banner;



    