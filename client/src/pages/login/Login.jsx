import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../component/context/authContext.jsx'
import classes from "./login.module.css"

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false) // Add loading state
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      await login(inputs)
      navigate('/')
    } catch (error) {
      console.error("Login error:", error)
      setError(error.response?.data || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={classes.login_wrapper}>
      <section className={classes.login_box}>
        <div> 
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.login_input}>
            {error && <div className={classes.error}>{error}</div>}
            <div className={classes.input}>
              <label htmlFor="username">Username</label>
              <input 
                id="username"
                type="text" 
                placeholder='Username' 
                name='username' 
                onChange={handleChange} 
                value={inputs.username}
                required 
              />
              
              <label htmlFor="password">Password</label>
              <input 
                id="password"
                type="password" 
                placeholder='Password' 
                name='password' 
                onChange={handleChange} 
                value={inputs.password}
                required 
              />
              
              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
              
              <p className={classes.register_link}>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          </div>
        </form>
      </section> 
    </section>
  )
}

export default Login