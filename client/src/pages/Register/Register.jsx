import React, { useState } from 'react'
import classes from "./register.module.css"
import { Link, useNavigate } from 'react-router'

const Register = () => {
 
 const [input, setinput] = useState({
  'email':"",
  "username":"",
   "password":""
 })
 const [error, seterror] = useState("")
 const navigate = useNavigate()

 const handleChange = (e) => {
    setinput((prev)=>({...prev, [e.target.name]: e.target.value}))
 }
 
 
 
  const  handle_register = async (e) => {
    // Handle register logic he console.log("Register clicked");
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5500/api/auth/register",input)
      console.log(res)
      navigate('/login')
    } catch (error) {
      console.log(error) 
      seterror(error.response.data)
      
    }
  }

  return (
    <section className={classes.register_wrapper}>
        <section className={classes.register_box}>
        <div> 
        <h1> Register </h1>
        </div>
        <div className={classes.register_input}>
          <div className={classes.input}>
            <input type="text" placeholder='username'  name="username"  onChange={handleChange} required/>
            <input type="email" placeholder='email' name='email'  onChange={handleChange}  required/>
            <input type="password" placeholder='password' name='password'  onChange={handleChange}  required/>
            <button onClick={handle_register}>
                Register
            </button>
            {error && <p style={{color:"red"}}>{error}!</p>}
            <p style={{textAlign:'center'}}> Do you have an account? <Link to="/login  "> login  </Link>
           </p>
           err 
          </div>
        </div>
        </section> 
    </section>
  )
}

export default Register