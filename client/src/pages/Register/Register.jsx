import React from 'react'
import classes from "./register.module.css"
import { Link } from 'react-router'

const Register = () => {
  handle_register = () => {
    // Handle register logic here
    console.log("Register clicked");
    // Redirect to home page after register
     <Link to="/" />
  }
  return (
    <section className={classes.register_wrapper}>
        <section className={classes.register_box}>
        <div> 
        <h1> Register </h1>
        </div>
        <div className={classes.register_input}>
          <div className={classes.input}>
            <input type="text" placeholder='username'  required/>
            <input type="email" placeholder='email'  required/>
            <input type="text" placeholder='password'  required/>
            <button onClick={handle_register}>
                Register
            </button>
            <p style={{textAlign:'center'}}> Do you have an account? <Link to="/login  "> login  </Link>
           </p>
          </div>
        </div>
        </section> 
    </section>
  )
}

export default Register