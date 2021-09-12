import React from 'react';
import { Form, Button,Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from "axios";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {toast, ToastContainer} from "react-toastify";
import {  Field,  ErrorMessage } from 'formik'
import "react-toastify/dist/ReactToastify.css";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
const SignUp = () => {
    const history = useHistory();
  
    const handleSubmit = (values) => {
        console.log(values);
        // alert("hello welcome")
        const { firstName, email, password,confirmPassword} = values
        if(firstName && email &&  password && (password  === confirmPassword)) {
            axios.post("http://localhost:9002/register", values)
            .then( res => {
                if(res.data.message === "Successfully Registered, Please login now."){
                toast.success(res.data.message)
                history.push("/login")
                } else{
                    toast.error("User already registerd")
                }
            })
        }
        // history.push("/login")
        // history.push(window.history.go(-1))
    };
    
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required('Email is required').email('Invalid Email.'),
        password: yup.string().required(),
        confirmPassword: yup.string().required('Password is required.')
        .oneOf([yup.ref('password')], 'Password must match.'),
      });

    return <div className="body">
        <Formik
      validationSchema={schema}
      onSubmit={(values) => handleSubmit(values)}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions:false
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
        <Form noValidate onSubmit={handleSubmit}>
            <Row>
                <Col lg={3} md={5} sm={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        value={values.firstName}
                        onChange={handleChange}
                        isInvalid={touched.firstName && errors.firstName} />
                        <Form.Control.Feedback type="invalid">First name is required.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
                <Col lg={3} md={5} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text"
                        name="lastName"
                        placeholder="Enter last name" 
                        value={values.lastName}
                        onChange={handleChange}
                        isInvalid={touched.lastName && errors.lastName}/>
                        <Form.Control.Feedback type="invalid">Last name is required.</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={3} md={5} sm={6}>
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
                <Col lg={3} md={5} sm={6}>
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
                <Col lg={3} md={5} sm={6}>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" 
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        isInvalid={touched.confirmPassword && errors.confirmPassword}/>
                        <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <FormControlLabel
                                control={<Field as={Checkbox} name="termsAndConditions" />}
                                label="I accept the terms and conditions."
                            />
            <Button variant="success" type="submit" size="sm" className="my-3">
                Sign Up
            </Button>
        </Form>)}
    </Formik>
        <div className="sign-in-redirect-btn" onClick={() => history.push(`/login`)}>Existing User?  Sign in</div>
    </div>
}

export default SignUp;