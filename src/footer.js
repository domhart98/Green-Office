import React from 'react'
import './footer.css'

const Footer = () =>{

    return(
      <div className="footer">
        <div id="return-button-container">
            <a id="return-button" href="#navbar" role="button">
                <img src="./below-icon.png" alt="above icon"/>
            </a>
        </div>
        <div id="social-icons-container">
            <a className="social-icon" href="https://www.facebook.com/greenofficebarbados/" aria-label="Go to Facebook"><i className="fa fa-2x fa-facebook-square"/></a>
            <a className="social-icon" href="https://www.linkedin.com/company/green-office-barbados/" aria-label="Go to Linkedin"><i className="fa fa-2x fa-linkedin"/></a>
            <a className="social-icon" href="https://www.instagram.com/greenoffice246/" aria-label="Go to Instagram"><i className="fa fa-2x fa-instagram"/></a>
        </div>
        <p className="">Green Office © 2023. All rights reserved
        </p>
            
      </div>
    );
  
};
export default Footer;