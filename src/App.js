import './App.css';
import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import LandingPage from './landingPage.js'
import AboutPage from './aboutPage.js'
import ContactPage from './contactPage.js'
import GalleryPage from './galleryPage.js'
import CataloguePage from './cataloguePage.js'
import Layout from './layout.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="catalogue" element={<CataloguePage/>}/>
            <Route path="gallery" element={<GalleryPage/>}/>
            {/*<Route path="*" element={<NoPage />} />*/}
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
