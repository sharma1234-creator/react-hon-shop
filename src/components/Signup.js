// import React from 'react'
// import { Form,Button } from 'react-bootstrap';
// import {
//   BrowserRouter as Router,Switch,
//   Link
// } from "react-router-dom";
// import "./Login.scss";
// const Signup = () => {
//     return (
//         <div className="login-container">
//              <Form className="Login">

//              <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label className="password">FullName</Form.Label>
//     <Form.Control type="password" placeholder="Fullname" />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label className="email">Email address</Form.Label>
//     <Form.Control type="email" placeholder="Email address" />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label className="password">Username</Form.Label>
//     <Form.Control type="password" placeholder="Username" />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label className="password">Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label className="confirm">Confirm Password</Form.Label>
//     <Form.Control type="password" placeholder="Confirm Password" />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check className="check" type="checkbox" label="Remember me" />
//   </Form.Group>

//   <Link to="/login"><button type="button" class="btn btn-light light">Login</button></Link>
//   <Link to="/signup"><button type="button" class="btn btn-light">Signup</button></Link>
// </Form>
//         </div>
//     )
// }

// export default Signup;

import React from "react";
import {
  BrowserRouter as Router,Switch,
  Link
} from "react-router-dom";
import "./Login.scss";
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: ""
      },
      errors: {
        firstName: "",
        email: "",
        password: "",
        mobile: "",
        confirmPassword: ""
      }
    };
  }

  validate = (name, value) => {
    const { fields } = this.state;
    switch (name) {
      case "firstName":
        if (!value || value.trim() === "") {
          return "First name is Required";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "Email is Required";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "Enter a valid email address";
        } else {
          return "";
        }
      case "mobile":
        if (!value || value.trim() === "") {
          return "Mobile number is Required";
        } else if (!value.match(/^[6-9]\d{9}$/)) {
          return "Enter a valid mobile number.";
        } else {
          return "";
        }
      case "password":
        if (!value) {
          return "Password is Required";
        } else if (value.length < 8 || value.length > 15) {
          return "Please fill at least 8 character";
        } else if (!value.match(/[a-z]/g)) {
          return "Please enter at least lower character.";
        } else if (!value.match(/[A-Z]/g)) {
          return "Please enter at least upper character.";
        } else if (!value.match(/[0-9]/g)) {
          return "Please enter at least one digit.";
        } else {
          return "";
        }
      case "confirmPassword":
        if (!value) {
          return "Confirm Password Required";
        } else if (value !== fields.password) {
          return "New Password and Confirm Password Must be Same";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

  handleUserInput = (e) => {
    this.setState({
      errors: {
        ...this.state.errors,
        [e.target.name]: this.validate(e.target.name, e.target.value)
      },
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = (e) => {
    const { fields } = this.state;
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = this.validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    if (fields.firstName && fields.email && fields.password && fields.mobile) {
      const data = {
        firstName: fields.firstName,
        email: fields.email,
        password: fields.password,
        mobile: fields.mobile
      };
      window.alert("subit success", JSON.stringify(data));
      console.log("----data----", data);
    }
  };

  render() {
    const { fields, errors } = this.state;
    return (
      <div className="signup-main">
        <div  >
          {/* <div> */}

            <div>
              <label className="signup-first">First name:</label><br/>
              <input
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={(event) => this.handleUserInput(event)}
                placeholder="First Name"
                className="input-signup"
              />
            {/* </div> */}
            <div>
              <span className="text-danger">{errors.firstName}</span>
            </div>
          </div>

          <div>
            <label className="signup-email">Email:</label><br/>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={(event) => this.handleUserInput(event)}
              placeholder="Email Address"
              className="input-signup"
            />
            <div>
              <span className="text-danger2">{errors.email}</span>
            </div>
          </div>

          <div>
            <label className="signup-mobile">Mobile:</label><br/>
            <input
              name="mobile"
              value={fields.mobile}
              onChange={(event) => this.handleUserInput(event)}
              placeholder="mobile"
              className="input-signup"
            />
            <div>
              <span className="text-danger1">{errors.mobile}</span>
            </div>
          </div>

          <div>
            <label className="signup-password">Password:</label><br/>
            <input
              type="Password"
              name="password"
              value={fields.password}
              onChange={(event) => this.handleUserInput(event)}
              placeholder="Password"
              className="input-signup"
            />
            <div>
              <span className="text-danger">{errors.password}</span>
            </div>
          </div>

          <div>
            <label className="signup-confirm">Confirm Password:</label><br/>
            <input
              type="Password"
              name="confirmPassword"
              value={fields.confirmPassword}
              onChange={(event) => this.handleUserInput(event)}
              placeholder="confirm Password"
              className="input-signup"
            />
            <div>
              <span className="text-danger1">{errors.confirmPassword}</span>
            </div>
          </div>
          
         
        </div>
        <br />
        <button
          type="button"
          className="signup-btn "
          onClick={this.handleSubmit}
        >
         Signup
        </button>
       <Link to="/login"><button type="button" className="login-btn ">Login</button></Link>
      </div>
    );
  }
}
export default Signup;

