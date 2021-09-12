
import React, { useState } from "react"
import "./Sign_Login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = ({nam,setNam,final,setFinal}) => {

    const history = useHistory();
    const [emails,setEmails] = useState();
    const [pass, setPass] = useState();
    const [repass, setRePass] = useState();
   
    const [register1,setRegister] = useState();
    const [mysession, setMysession] = useState("");
    //for enabling the form 

    const [disabled,setDisabled] = useState(true);
    // const [disabled,setDisabled] = useState(true);
    const [able,setAble] = useState(true);
    const [man, setMan] = useState(0);
    const [mail, setMail] = useState(0);
    const [pas, setPas] = useState(0);
    const [repas, setRePas] = useState(0); 
    const [fin,setFin] = useState(0);
    const [con, setCon] = useState("");
    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    //  if(e.target.name === "name"){
    //      setFinal(e.target.value);
    //      setMan(1);
    //  }
    //  if(e.target.name === "email"){
       
    //     setMail(1);
    // }

    // if(e.target.name === "password"){
    //     setPas(1);
    // }
    // if(e.target.name === "reEnterPassword"){
    //    setRePas(1);
    // }

//   if(user.name !== " " && user.email !== " " && user.password !== " " && user.reEnterPassword !== " " ){
//       setDisabled(false);
//   }
//     if(man && mail && pas && repas ){
//         setDisabled(true);
//    }
    // if(e.target.name === "check"){
    //     setFin(1);
    // }

        if(e.target.name === "email"){
            if(!user.email.includes("@")){
              setEmails("*Invalid Email");
            } else{
                setEmails("");
            }
        } 

        if(e.target.name === "password"){
            if(user.password.length <= 5){
                setPass("*Password must contain atleast 5 length");
            } else{
                setPass("");
            }
        }

        if(e.target.name === "reEnterPassword"){
            if(user.reEnterPassword !== user.password && user.reEnterPassword.length !== user.password){
                // setRePass("*RePassword must be same as password")
                setRePass("");
            } else{
                // setRePass("");
                setRePass("*RePassword must be same as password")
                if(user.reEnterPassword !== user.password){
                    setRePass("*RePassword must be same as password")
                }
            }
            if(e.target.value === " "){
                setRePass("*RePassword must be same as password")
            }
        }

    }

  
    // const handleClick = (e) =>{
    //     setDisabled(false);
    // }

    const handleClick1 = (e) =>{
        if(able){
        setDisabled(false);
        setAble(false);
        } else{
            setDisabled(true);
            setAble(true);
        }
        // let obj = { "name" : user.name, "email" : user.email, "password": user.password, "reEnterPassword" : user.reEnterPassword}
        // localStorage.setItem(con, JSON.stringify(obj));

        // sessionStorage.setItem("mysession", JSON.stringify(obj));
    }

//     if(man && mail && pas && repas ){
//         setDisabled(true);
//    }

    const register = (e) => {
        const { name, email, password, reEnterPassword } = user
      
        if( name && email && password && (password === reEnterPassword)){
           
            // setRegister("Success");
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                
                // alert(res.data.message)
                if(res.data.message === "User already registerd"){
                    toast.error(res.data.message);
                }
                else{
                toast.success(res.data.message);
                history.push("/login")
                }
            })
        } else {
            // alert("invlid input")
            // toast.success("invalid input");
            setRegister("*Fill the Input Field First");
          
        
        }
        if(user.password === "" && user.email === "" && user.reEnterPassword === ""){
            setEmails("*Invalid Email");
            setPass("*Password must contain atleast 5 length");
            setRePass("*RePassword must be same as password");
        } else if(user.password === "" && user.reEnterPassword === ""){
            setPass("*Password must contain atleast 5 length");
            setRePass("*RePassword must be same as password");
        } else if(user.reEnterPassword === ""){
            setRePass("*RePassword must be same as password");
        }

    
       
    }

   
    return (
        <div className="register">
            
            <h1>Register</h1>
            <span className="name">UserName</span>
            <input type="text" name="name" value={user.name} placeholder="Enter Name*" onChange={ handleChange } className="input"></input>
            <span className="email">Email</span>
            <input type="text" name="email" value={user.email} placeholder="Enter Email*" onChange={ handleChange }  className="input" required></input>
            <p className="emailValid">{emails}</p>
            <span className="password">Password</span>
            <input type="password" name="password" value={user.password} placeholder="Enter Password*"  className="input" onChange={ handleChange }></input>
            <p className="passValid">{pass}</p>
            <span className="confirm">Confirm Password</span>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Enter RePassword*"  className="input" onChange={ handleChange }></input>
            <p className="repassValid">{repass}</p>
           
           
            <input type="checkbox" name="check" value={user.check} className="check" onChange={handleClick1}></input>
             <label for="vehicle1" className="remember">Remember me</label>
          
             <button disabled={disabled} className="button" onClick={register}>signup</button>
               <p className="repassValid">{register1}</p>
                <div>or</div>
               <button  className="button" onClick={() => history.push("/login")}>Login</button> 
                                      
         </div>
          
          //new one

//  <div class="container container1">
//     <form>
//     <div class="imgcontainer">

//      </div>
//      <h1>Register</h1>
//      <label for="email" className="email"><b>UserName</b></label><br/>
//      <input type="text" name="name" value={user.name} placeholder="Enter Name*" onChange={ handleChange } required ></input>
//     <label for="email" className="email"><b>Email</b></label><br/>
//     <input type="text" value={user.email} onChange={handleChange} placeholder="Enter Email" name="email" required />
//     <p className="emailValid">{emails}</p>

//     <label for="passsword" className="password"><b>Password</b></label><br/>
//     <input type="password" placeholder="Enter Password" value={user.password} onChange={handleChange} name="password" required />
//     <p className="passValid">{pass}</p>
    
//     <input type="checkbox" name="check" value={user.check} className="check1" onChange={handleClick}></input>
//              <label for="vehicle1" className="remember1">Remember me</label>
            
//     <button disabled={disabled} className="buttons" type="submit" onClick={register}>Register</button>
//        <div>or</div>
//     <button className="buttons" onClick={() => history.push("/login")}>login</button>

//       <div class="container">

// </div>
//       </form>
//   </div>
    )
}

export default Signup;






