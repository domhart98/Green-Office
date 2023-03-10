import React from 'react'
import './footer.css'

const Footer = () =>{

    return(
      <div className="footer">
        
          <ul className="">
              <li className='d-inline-block'><a href="https://www.facebook.com/greenofficebarbados/"><i className="fa fa-2x fa-facebook-square"/></a></li>
              <li className="d-inline-block"><a href="https://www.linkedin.com/company/green-office-barbados/"><i className="fa fa-2x fa-linkedin"/></a></li>
              <li className="d-inline-block"><a href="https://www.instagram.com/greenoffice246/"><i className="fa fa-2x fa-instagram"/></a></li>
          </ul>
          <p className="d-inline-block">Green Office © 2023. All rights reserved
          </p>
              
      </div>
    );
  
};
export default Footer;