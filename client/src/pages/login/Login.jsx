import React, { useContext } from 'react'
import classes from "./login.module.css"
import { Link, useNavigate} from 'react-router'
import axios from "axios"
import { useState } from 'react'
import { AuthContext } from '../../component/context/authContext.jsx'


const Login = () => {
   const [inputs, setinput] = useState({
     "username":"",
     "password":""
   })
   const [error, seterror] = useState("")
   const navigate = useNavigate()



   const {login} =useContext(AuthContext)

  
   const handleChange = (e) => {
      setinput((prev)=>({...prev, [e.target.name]: e.target.value}))
   }
   
   
   
    const  login_cliked = async (e) => {
      // Handle register logic he console.log("Register clicked");
      e.preventDefault();
      try {
        // const res = await axios.post("http://localhost:5500/api/auth/login",input)

       await login(inputs)
        navigate('/')
      } catch (error) {
        console.log(error) 
        seterror(error.response.data)
        
      }
    }


  return (
    <section className={classes.login_wrapper}>
        <section className={classes.login_box}>
        <div> 
        <h1> login </h1>
        </div>
        <div className={classes.login_input}>
          <div className={classes.input}>
            <input type="text" placeholder='username' name='username ' onChange={handleChange}  required/>
            <input type="password" placeholder='password' name='password' onChange={handleChange} required/>
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
