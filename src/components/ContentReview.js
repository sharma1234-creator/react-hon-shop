import React,{useState} from 'react'
import {Modal,Button} from "react-bootstrap";
import {
  BrowserRouter as Router,Switch,
  Link
} from "react-router-dom";
const ContentReview = ({review,setReview,logic,setLogic}) => {

    const [write,setWrite] = useState();
    const [date, setDate] = useState();
    const [rate,setRate] = useState();
    const [feedback, setFeedback] = useState();
    const [showModal, setShowModal] = useState(false);
    const [lists,setLists] = useState([]);
    const [col,setCol] = useState("");
    // const [final,setFinal] = useState(0);

    
    // const [star,setStar] = useState();
    // const [sum,setSum] = useState(0);


//     const handleAdd1 = () =>{
//          setStar("green");
//          setSum(1);
//     } 
//     const handleAdd2 = () =>{
//       setStar("green");
//       setSum(2);
//  } 
//  const handleAdd3 = () =>{
//   setStar("green");
//   setSum(3);
// } 
// const handleAdd4 = () =>{
//   setStar("green");
//   setSum(4);
// } 
// const handleAdd5= () =>{
//   setStar("green");
//   setSum(5);
// } 

    const obj = {
      poet:write,
      cale:date,
      review:rate,
      feed:feedback
    };
    // const [review, setReview] = useState("");

    // const handChangeable = (e) =>{
      
    //         console.log(setWrite(e.target.value));
        
    // }

//     const handChangeable1 = (e) =>{
       
//           console.log(setDate(e.target.value));
     
//   }

//   const handChangeable2 = (e) =>{
    
  
//         console.log(setRate(e.target.value));
//         console.log(write);
   
// }

// const handChangeable3 = (e) =>{

//       console.log(setFeedback(e.target.value));
  
// }
    
   const handleClickable = () =>{
    // setFinal(final + rate) 
    setShowModal(false);
    setReview(review + 1);
    setLists([...lists,obj]);
    setCol({textDecoration:"underline",color:"green"});
    console.log(lists);
   }
    return (
        <div className="review-page">
          <div className="details">
       
           <h6 className="content-review" id="review">Details</h6>
           <h6 className="content-review1" id="review">Dimensions</h6>
            <h6 className={logic ? "content-review3" : "content-review2"}  id="review">Reviews</h6>
            </div >
              
              {
                lists.map((ele,index)=>
                  <div className="feedback-content">
                    {/* <li>{ele.poet}</li>
                    <li>{ele.cale}</li>
                    <li>{ele.review}</li>
                    <li>{ele.feed}</li> */}
                    <hr className="review-hori"></hr>
                    <div className="date-writer">
                     <h6 className="review-date">{ele.cale}</h6>
                     <h6 className="review-writer"> Written by <span className="review-name">{ele.poet}</span></h6>
                     </div>
                     <h6 className="review-rate">Rating:{ele.review}</h6>
                     <div className="review-feedback">
                     <p > {ele.feed}</p>
                     </div>
                  </div>
                )
              }
             
            <div>
            <button type="button" class="button-second button10" onClick={()=>setShowModal(true)}>ADD A REVIEW</button>
            </div>
            <Modal  show={showModal} onHide={()=>setShowModal(false)}>
        <Modal.Header className="feedback-head" closeButton>
          <Modal.Title className="feedback-title">FEEDBACK AND REVIEW DETAILS</Modal.Title>
        </Modal.Header>
        <div className="review-submit">
       <span className="field-item"> Written by:</span> <input type="text"  className="feedback-item" name="written" value={write} onChange={(e)=>setWrite(e.target.value)} placeholder="enter the name"/> <br/> <br/>
       <input type="date" name="begin" className="feedback-item" placeholder="dd-mm-yyyy" value={date} onChange={(e)=>setDate(e.target.value)} min="1997-01-01" max="2030-12-31" />
       <span className="field-item"> Rating: </span><input type="text"  className="feedback-item" name="rate" value={rate} onChange={(e)=>setRate(e.target.value)} placeholder="enter the rating out of 5"/> <br/> <br/>
       <span className="field-item"> Feedback: </span><textarea  className="feedback-item" name="textarea" value={feedback} onChange={(e) =>setFeedback(e.target.value)} placeholder="enter the feedback"></textarea>
        </div>
        <Modal.Footer className="feedback-footer">
          <button class="button-save button12" variant="primary" onClick={handleClickable}>save</button>
        </Modal.Footer>
       </Modal>
       
        </div>
    )
}

export default ContentReview;
