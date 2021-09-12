// import React from "react";
// import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
// import * as Yup from "yup";
// import {
//   BrowserRouter as Router,Switch,
//   Link
// } from "react-router-dom";
// import "./Login.scss";
// const ValidatedLoginForm = () => (
//   <Formik
//     initialValues={{ email: "", password: "" }}
//     onSubmit={(values, { setSubmitting }) => {
//       setTimeout(() => {
//         console.log("Logging in", values);
//         setSubmitting(false);
//       }, 500);
//     }}
    //********Handling validation messages yourself*******/
    // validate={values => {
    //   let errors = {};
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!EmailValidator.validate(values.email)) {
    //     errors.email = "Invalid email address";
    //   }

    //   const passwordRegex = /(?=.*[0-9])/;
    //   if (!values.password) {
    //     errors.password = "Required";
    //   } else if (values.password.length < 8) {
    //     errors.password = "Password must be 8 characters long.";
    //   } else if (!passwordRegex.test(values.password)) {
    //     errors.password = "Invalida password. Must contain one number";
    //   }

    //   return errors;
    // }}
    //********Using Yum for validation********/

//     validationSchema={Yup.object().shape({
//       email: Yup.string().email().required("Required"),
//       password: Yup.string()
//         .required("No password provided.")
//         .min(8, "Password is too short - should be 8 chars minimum.")
//         .matches(/(?=.*[0-9])/, "Password must contain a number.")
//     })}
//   >
//     {(props) => {
//       const {
//         values,
//         touched,
//         errors,
//         isSubmitting,
//         handleChange,
//         handleBlur,
//         handleSubmit
//       } = props;
//       return (
//         <form onSubmit={handleSubmit} className="main-login">
//           <label htmlFor="email" className="email-login">Email</label><br/>
//           <input
//             name="email"
//             type="text"
//             placeholder="Enter your email"
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.email && touched.email && "error"}
//             className="input-login"

//           /><br/><br/>
//           {errors.email && touched.email && (
//             <div className="input-feedback">*{errors.email}</div>
//           )}
//           <label htmlFor="email" className="password-login">Password</label><br/>
//           <input
//             name="password"
//             type="password"
//             placeholder="Enter your password"
//             value={values.password}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={errors.password && touched.password && "error"}
//             className="input-login"
//           /><br/><br/>
//           {errors.password && touched.password && (
//             <div className="input-feedback1">*{errors.password}</div>
//           )}
//           <button type="submit" disabled={isSubmitting} className="login-button">
//             Login
//           </button>

//        <Link to="./signup"><button className="signup-button" type="submit" disabled={isSubmitting}>
//             Signup
//           </button></Link>   
//         </form>
//       );
//     }}
//   </Formik>
// );

// export default ValidatedLoginForm;


// import React,{useState} from 'react';
// import "./login.css";
// import axios from "axios";
//  const Login = () => {

//     const [ user, setUser] = useState({
//         email: "",
//         password: "",
//     })

//     const handleChange = e =>{
//         const { name, value } = e.target;     
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const login = () =>{
//         axios.post("http://localhost:9002/login", user)
//         .then(res => alert(res.data.message))
//     }

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
//             <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password"></input>
//             <div className="button" onClick={login}>Login</div>
//             <div>or</div>
//             <div className="button">Register</div>
//         </div>
//     )
// }

// export default Login;



import React, {useState} from "react"
import "./Sign_Login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ValidatedLoginForm = ({ setLoginUser,tcolor,wish,setTcolor,setWish,isWrong,setIsWrong}) => {

    const history = useHistory()
    const [state,setState] = useState(0);
    const [emails,setEmails] = useState();
    const [pass, setPass] = useState();
    const [confir, setConfir] = useState(false);
    const [disabled,setDisabled] = useState(true);
    // const [disabled,setDisabled] = useState(true);
    const [able,setAble] = useState(true);

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    
        if(e.target.name === "email"){
            if(!user.email.includes("@")){
              setEmails("*Invalid Email");
            } else{
                setEmails("");
            }
        } 

        if(e.target.name === "password"){
            if(user.password.length<5){
                setPass("*Password must contain atleast 5 length");
            } else{
                setPass("");
            }
        }
    }

   

    const login = () => {
        
        axios.post("http://localhost:9002/login", user)
        .then(res => {
                        
            //main code

            //  if(res.data.message === "Login Successfull"){
            //       console.log(`${res.data.message}`);
            //       toast.success(res.data.message);
            //       setLoginUser(res.data.user)
            //     //   history.push("/");
            //     } else if(res.data.message === "Password didn't match"){
            //         toast.error("Password did not match");
            //     } else{
            //         toast.warn("Fill the input fields"); 
            //         history.push("/");
            //     }

            if(state){
                toast.success("Login Successfull");
                setLoginUser(1);
                history.push("/")
              } else{
                  if(user.email === "" && user.password === ""){
                    setEmails("*Invalid Email");
                    setPass("*Password must contain atleast 5 length");
                  }
                  setState(1);
              }
            // if(true){
            //     toast.success("Login Successfull")
            //     history.push("/");
            // } else{
                // setConfir(true);
                
            
            
        })

        if(!tcolor ){
            setWish("red");
            setTcolor(true);
            }
            else{
                setWish("wheat");
                setTcolor(false);
            }
            setIsWrong(1);
    }

    // const handleClick1 = (e) =>{
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
    }

    return (
        <div className="login">
           
           <h1>Login</h1>
        
            <span className="email">Email</span>
           <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" required></input>
          <p className="emailValid">{emails}</p>
          <span className="password">Password</span>
          <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" required></input>
          <p className="passValid">{pass}</p>
          <input type="checkbox" name="check" value={user.check} className="check2" onChange={handleClick1}></input>
          <label for="vehicle1" className="remember2">Remember me</label>

          <button disabled={disabled} className="buttons2" type="submit" onClick={login}>Login</button>
           <div>or</div>
          <button className="buttons2 btn" onClick={() => history.push("/signup")}>signup</button>
         
        </div>

//     <div class="container">
//     <form>
//     <div class="imgcontainer">
   
//      </div>
//      <h1>Login</h1>
//     <label for="email" className="email"><b>Email</b></label><br/>
//     <input type="text" value={user.email} onChange={handleChange} placeholder="Enter Email" name="email" required />
//     <p className="emailValid">{emails}</p>

//     <label for="passsword" className="password"><b>Password</b></label><br/>
//     <input type="password" placeholder="Enter Password" value={user.password} onChange={handleChange} name="password" required />
//     <p className="passValid">{pass}</p>
    
//     <input type="checkbox" name="check" value={user.check} className="check1" onChange={handleClick}></input>
//              <label for="vehicle1" className="remember1">Remember me</label>
//              <br/>
//              <br/>
//     <button disabled={disabled} className="buttons" type="submit" onClick={login}>Login</button>
//        <div>or</div>
//     <button className="buttons" onClick={() => history.push("/signup")}>signup</button>

    
//       <div class="container">

// </div>
//       </form>
//   </div>
    )
}

export default ValidatedLoginForm;
