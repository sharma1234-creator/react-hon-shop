import React from 'react'
import "./about.scss"

const AboutUs = () => {
    return (
      <div className="about-full" >
        <div className="about-main" id="imge">  
            <img className="about-image" src="https://images.unsplash.com/photo-1532204182725-d0f67855ac87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnMlMjBvbiUyMHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
            <div className="about-container">
               <h1 className="about-head1">A history of </h1>
               <h1 className="about-head2">good business</h1>
               <p className="about-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.</p>
            </div>
            <div className="vl"></div>
        </div>
        
        <div className="sec-para">
            <div className="sec-image">
                 <img src="https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg" className="upper-image" alt=""/>
            </div>
            <div className="sec-head">
                <h3 className="second-head">Work smart</h3>
                <p className="second-para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
            </div>
        </div>

        <div className="third-para">
            <div className="third-image">
                 <img src="https://www.akaba.net/fileadmin/home/home_mobile_slide0.jpg" className="lower-image" alt=""/>
            </div>
            <div className="third-head">
                <h3 className="third-head1">Work well</h3>
                <p className="third-para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently</p>
            </div>
        </div>

        <div className="final-para">
            <h3 className="final-head">Work your</h3>
           <div className="final-main">
               <h5 className="final-header">All around to do the right things</h5>
               <p className="final-parag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.</p>
            </div>
            <div className="vl"></div>
        </div>
  </div>
    );
};

export default AboutUs;
