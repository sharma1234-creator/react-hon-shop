// import React from 'react'
// import { Form,Button } from 'react-bootstrap';
// import {
//   BrowserRouter as Router,Switch,
//   Link
// } from "react-router-dom";
// import "./Login.scss";
// const Login = () => {
//     return (
//         <div className="login-container">
//              <Form className="Login">
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label className="email" pattern="[^ @]*@[^ @]*">Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
   
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label className="password">Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check className="check" type="checkbox" label="Remember me" />
//   </Form.Group>
  
//   <button type="button" className="btn btn-light light">Login</button>
//   <Link to="/signup"><button type="button" className="btn btn-light">Signup</button></Link>
// </Form>
//         </div>
//     )
// }

// export default Login;

import React from "react";
import "./Login.scss";
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={this.handleChange}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    console.log("Submitting");
    console.log(this.state);
  };
}
export default Login;