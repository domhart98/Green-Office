import React from 'react'
import './footer.css'

const Footer = () =>{

    return(
      <div className="footer">
        
          <ul className="">
              <li className='d-inline-block'><a href="https://www.facebook.com/greenofficebarbados/" aria-label="Go to Facebook"><i className="fa fa-2x fa-facebook-square"/></a></li>
              <li className="d-inline-block"><a href="https://www.linkedin.com/company/green-office-barbados/" aria-label="Go to Linkedin"><i className="fa fa-2x fa-linkedin"/></a></li>
              <li className="d-inline-block"><a href="https://www.instagram.com/greenoffice246/" aria-label="Go to Instagram"><i className="fa fa-2x fa-instagram"/></a></li>
          </ul>
          <p className="d-inline-block">Green Office © 2023. All rights reserved
          </p>
              
      </div>
    );
  
};
export default Footer;