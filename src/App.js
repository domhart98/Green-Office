
import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Route from './route.js';
import LandingPage from './landingPage.js'
import AboutPage from './aboutPage.js'
import ContactPage from './contactPage.js'
import GalleryPage from './galleryPage.js'
import CataloguePage from './cataloguePage.js'
import Navbar from './navbar';
import Footer from './footer';



const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Route path="/"><LandingPage/></Route>  
      <Route path="/about"> <AboutPage/></Route>
      <Route path="/contact"> <ContactPage/></Route>
      <Route path="/gallery"> <GalleryPage/></Route>
      <Route path="/catalogue"> <CataloguePage/></Route>
      <Footer/>
    </div>
  );
};

export default App;