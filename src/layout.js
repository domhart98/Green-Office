import React, {useState, useEffect} from 'react'
import { Outlet } from 'react-router'
import Navbar from './navbar.js'
import Footer from './footer.js'
import './layout.css'

const Layout = () =>{
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  
      const controlBody = () => {
        
              if(window.scrollY > lastScrollY){
                  setShow(false);
              }
              else{
                  setShow(true);
              }
          
      
          
          setLastScrollY(window.scrollY);
      
      };

      if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlBody);
  
          // cleanup function
          return () => {
              window.removeEventListener('scroll', controlBody);
          };
      }
    }, [lastScrollY]);
    return(
      <div className="wrapper">
        <Navbar/>
        <div className={`body-wrapper ${show}`}><Outlet/></div>
        <Footer/>
      </div>
    );
};
export default Layout;
