import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import logo from "../../assets/Author.png"
import write from '../../assets/Author (1).png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle function to show/hide menu
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div className={classes.header}>
      <div className={classes.header_logo}>
        <img src={logo} alt="logo" />
      </div>

      {/* Hamburger menu toggle */}
      <div className={classes.header_toggle} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Links */}
      <div className={`${classes.header_links} ${menuOpen ? classes.active : ''}`}>
        <Link to="/"><h6>ART</h6></Link>
        <Link to="/"><h6>SCIENCE</h6></Link>
        <Link to="/"><h6>TECHNOLOGY</h6></Link>
        <Link to="/"><h6>CINEMA</h6></Link>
        <Link to="/"><h6>DESIGN</h6></Link>
        <Link to="/"><h6>FOOD</h6></Link>
        <Link to="/"><h6>Ruth</h6></Link>
        <Link to="/">Logout</Link>
        <Link to="/" className={classes.header_links_img}>
          <img src={write} alt="write blog" />
        </Link>
      </div>
    </div>
  )
}

export default Header
