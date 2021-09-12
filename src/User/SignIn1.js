import React,{useState} from 'react';
import { Form, Button,Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import "./login_sign.css";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {  Field,  ErrorMessage } from 'formik'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const SignIn1 = ({setLoginUser, truth, setTruth, setIsRight, setAdd, quantity, setIsWrong}) => {
    const history = useHistory();
    const [disabled,setDisabled] = useState(false);
  
    const handleSubmit = (values) => {

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
        axios.post("http://localhost:9002/login", values)
        .then(res => {

            if(res.data.message === "Login Successfull"){
                toast.success(res.data.message);
                setLoginUser(res.data.user)
                   history.push("/")
            }
            if(res.data.message === "Password didn't match"){
                toast.warn(res.data.message);
            }
            if(res.data.message === "User not registered"){
                toast.error(res.data.message);
            }
            // alert(res.data.message)
            // setLoginUser(res.data.user)
            // history.push("/todo")
        })
        // history.push(window.history.go(-1))
    };

  const handleChange = ()=>{

  }

    const schema = yup.object().shape({
        email: yup.string().required('Email is required').email('Invalid Email.'),
        password: yup.string().required()
    });

    return <div className="body">
        <Formik
      validationSchema={schema}
      onSubmit={(values) => handleSubmit(values)}
      initialValues={{
        email: "",
        password: ""
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form className="first" noValidate onSubmit={handleSubmit}>
            <Row>
                <Col lg={9} md={5} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                        name="email"
                        placeholder="Enter email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.email && errors.email}/>
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={9} md={5} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        name="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        isInvalid={touched.password && errors.password}/>
                        <Form.Control.Feedback type="invalid">Password is required.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
            <Button variant="success" type="submit" size="sm" disabled={disabled} className="my-3">
                Sign In
            </Button>
        </Form>)}
    </Formik>
        <button onClick={() => history.push("/signup")} className="sign-up-redirect-btn new-user">New User? Sign up</button>
    </div>
}

export default SignIn1;