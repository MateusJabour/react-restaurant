import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
         <ul className="footer__options">
           <li className="footer__option">About</li>
           <li className="footer__option">Contact Us</li>
           <li className="footer__option">Jobs</li>
         </ul>
      </footer>
    );
  }
}

export default Footer;