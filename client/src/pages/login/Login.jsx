import React from 'react'
import classes from "./login.module.css"
import { Link, useNavigate } from 'react-router'


const Login = () => {
  const navigate = useNavigate();
  const login_cliked = () => {
    // Handle login logic here
    console.log("Login clicked");
    navigate('/')
  // Redirect to home page after login
  }


  return (
    <section className={classes.login_wrapper}>
        <section className={classes.login_box}>
        <div> 
        <h1> login </h1>
        </div>
        <div className={classes.login_input}>
          <div className={classes.input}>
            <input type="text" placeholder='username'  required/>
            <input type="text" placeholder='password'  required/>
            <button onClick={login_cliked} >
                Login
            </button>
            <p> Dont you have an account? <Link to="/register"> register</Link>
           </p>
          </div>
        </div>
        </section> 
    </section>
  )
}

export default Login
