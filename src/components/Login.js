import React, {useState} from "react"
import "./Sign_Login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { toast } from 'react-toastify';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({ setLoginUser,tcolor,wish,setTcolor,setWish,truth,setTruth,isRight,setIsRight,add,setAdd,quantity,setQuantity,isWrong,setIsWrong}) => {

    const history = useHistory()
    const [disabled,setDisabled] = useState(true);
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
        if(e.target.value === user.email){
            if(!e.target.value.includes("@")){
                alert("error");
            }

        }
    }

   

    const login = () => {

        if(!truth){
            setAdd(quantity );
            setTruth(true);
            setIsRight(true);
            setIsWrong(1);
         }
         else{
         setAdd("0");
         setTruth(false);
         setIsRight(false);
         setIsWrong(0);
         }
        
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            // alert(res.data.message)
            toast.success(res.data.message);
            setLoginUser(res.data.user)
            history.push("/");
        })
    }

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
           
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
           
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <input type="checkbox" name="check" value={user.check} className="check2"onChange={handleClick1} ></input>
          <label for="vehicle1" className="remember2">Remember me</label>
            <button  disabled={disabled}className="buttons2"type="submit" onClick={login}>Login</button>
            <div>or</div>
            <button className="buttons2 btn" onClick={() => history.push("/signup")}>signup</button>
            
        </div>
    )
}

export default Login;

