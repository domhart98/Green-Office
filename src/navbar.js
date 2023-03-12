import React, {useState, useEffect} from 'react'
import Link from './link.js'
import './navbar.css'


const Navbar = () =>{
    const [showOnScroll, setShowOnScroll] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hamActive, setHamActive] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    //Hook to toggle hamburger menu
    const toggleHamActive = () => {
        setHamActive(!hamActive);
    }

    const toggleCollapsed = () => setCollapsed(!collapsed);

    const toggleCollapsibleNavbar = () => {
        toggleCollapsed();
        toggleHamActive();
    }

    useEffect(() => {
    
        const controlNavbar = () => {
            if(typeof window!== 'undefined') {
                
                if((window.scrollY - lastScrollY) > 0){
                    setShowOnScroll(!showOnScroll);
                }
                else{
                    setShowOnScroll(false);
                }
                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY, showOnScroll]);

    return(
      <div className="container-fluid" id="navbar-container">
        <a className={`close-navbar-toggler ${collapsed ? "" : "collapsed" }`} href="#navbar-container" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleCollapsibleNavbar}><br></br></a>
        <nav className="navbar navbar-expand-md navbar-light bg-gray">
            <div className="col-4 vert-padding" id="home-logo">
                <Link href="/"><img id="logo" className="" href="/" src={"./green-office-logo-cropped.jpg"} alt="leaf-logo"></img></Link>
            </div>
            <div className="col vert-padding">
                <button className="navbar-toggler-custom" onClick={toggleCollapsibleNavbar} type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={`hamburger-menu ${hamActive ? "ham-active" : "" }`}>
                        <div className="ham-bar bar-top"></div>
                        <div className="ham-bar bar-mid"></div>
                        <div className="ham-bar bar-bottom"></div>
                    </div>
                </button>
            </div>
            <div className="navbar-collapse collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ms-auto ">
                    <hr/>
                    <li className="nav-item active" ><i className="fa-solid fa-house" width="20px"/>
                        <Link className="nav-link" href="/" onClick={toggleHamActive}>
                            <i className="fa fa-home fa-beat"/>HOME
                        </Link>
                    </li>
                    <hr/>
                    <li className="nav-item" >
                        <Link className="nav-link" href="/about"><i className="fa fa-twitter fa-beat"/>ABOUT</Link>
                    </li>
                    <hr/>
                    <li className="nav-item" >
                        <Link className="nav-link" href="/contact"><i className="fa fa-phone fa-beat"/>CONTACT</Link>
                    </li> 
                    <hr/>
                    <li className="nav-item" >
                        <Link className="nav-link" href="/catalogue"><i className="fa fa-book fa-beat"/>CATALOGUE</Link>
                    </li>
                    <hr/>
                    <li className="nav-item" >
                        <Link className="nav-link" href="/gallery"><i className="fa fa-camera fa-beat"/>GALLERY</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
      
      
    );
  
};
export default Navbar





