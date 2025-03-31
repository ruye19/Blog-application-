import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <p>&copy; 2025 Author bloggie All rights reserved.</p>
        <div className={classes.footer_links}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
