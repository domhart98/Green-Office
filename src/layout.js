import React, {useState} from 'react'
import { Outlet } from 'react-router'
import Navbar from './navbar.js'
import Footer from './footer.js'
import './layout.css'

const Layout = () =>{
  const [collapsed, setCollapsed] = useState(true);
  const [hamActive, setHamActive] = useState(false);

  const toggleCollapsibleNavbar = () =>{
      console.log(collapsed + " " + hamActive)
      setCollapsed(!collapsed)
      setHamActive(!hamActive)
  }
  
  return(
    <div className="wrapper">
      <Navbar collapsed={collapsed} hamActive={hamActive} toggleCollapsibleNavbar={toggleCollapsibleNavbar}/>
      <div className="body-wrapper">
        <a className={`close-navbar-toggler ${collapsed ? "hidden" : "show" }`} href="#navbar-container" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleCollapsibleNavbar}>
          {/* Single whitespace to avoid eslint warning*/}
          whitespace
        </a>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};
export default Layout;
