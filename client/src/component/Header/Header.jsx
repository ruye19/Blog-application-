import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import logo from "../../assets/Author.png"
import write from '../../assets/Author (1).png'
import { AuthContext } from '../context/authContext.jsx'

const Header = () => {

  const {currentUser ,logout} = useContext(AuthContext)
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function to show/hide menu
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div className={classes.header}>
      <div className={classes.header_logo}>
        
        <Link to="/">
        <img src={logo} alt="logo" />
        </Link>
      </div>

      {/* Hamburger menu toggle */}
      <div className={classes.header_toggle} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Links */}
      <div className={`${classes.header_links} ${menuOpen ? classes.active : ''}`}>
        <Link to="/?catagory=Art"><h6>ART</h6></Link>
        <Link to="/?catagory=Science"><h6>SCIENCE</h6></Link>
        <Link to="/?catagory=Technology"><h6>TECHNOLOGY</h6></Link>
        <Link to="/?catagory=Cinema"><h6>CINEMA</h6></Link>
        <Link to="/?catagory=Design"><h6>DESIGN</h6></Link>
        <Link to="/?catagory=Food"><h6>FOOD</h6></Link>
        <p ><h6>{currentUser?.username}</h6></p>
        {currentUser ?  <span onClick={logout}>Logout</span>: <Link className='link' to="/login">login</Link>}
        <Link to="/write" className={classes.header_links_img}>
          <img src={write} alt="write blog" />
        </Link>
      </div>
    </div>
  )
}

export default Header
