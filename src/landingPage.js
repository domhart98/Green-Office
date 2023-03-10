import React from 'react';
import './landingPage.css'
import Link from './link.js'

const LandingPage = () =>{
    
   
        return(
            <div className="container-fluid" id="landing-page">
                {/* Greeting Carousel */}
                <div id="carouselHome" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button data-bs-target="#carouselHome" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carouselHome" data-bs-slide-to="1" className=""></button>
                        <button data-bs-target="#carouselHome" data-bs-slide-to="2" className=""></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id="carousel-img" className="d-block w-100" src={'./office-plants1.jpg'} alt="First slide" width="200px" height="200px"/>
                            <div className="carousel-caption d-md-block">
                                <h3>WE ARE GREEN OFFICE</h3>
                                <p>- Call us for a free quote OR contact us-<br/> <i className="fa fa-phone"/>::<span className="bold">+1 (246) 832-1255</span></p>
                                <Link className="nav-link" href="/contact"><button className="btn btn-success btn-lg">contact us</button></Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-block w-100" src={'./croton-closeup(2).jpg'} alt="Second slide" width="200px" height="200px"/>
                            <div className="carousel-caption d-md-block">
                                <h3>TAKE A LOOK AT OUR WORK</h3>
                                <p>- Check out some of our plants and installations -</p>
                                <Link className="nav-link" href="/gallery"><button className="btn btn-success btn-lg">gallery</button></Link>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-block w-100" src={'./baby-plants.jpg'} alt="Third slide" width="200px" height="200px"/>
                            <div className="carousel-caption d-md-block">
                                <h3>LEARN A BIT ABOUT US</h3>
                                <p>- We believe in the health/productivity benefits of a greener space, but do not just take our word for it! -</p>
                                <Link className="nav-link" href="/about"><button className="btn btn-success btn-lg">about us</button></Link>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselHome" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselHome" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="container-fluid row gx-0" id="services-banner">
                    <div className="col-4">
                        <img src={'./vine-border1.jpg'} alt="vine border" className="vine-img" height="50px" width="100%"/>
                    </div>
                    <div className="col-4 my-auto">
                        <h1 className="">OUR SERVICES</h1>
                    </div>
                    <div className="col-4">
                        <img src={'./vine-border1.jpg'} alt="vine border" className="vine-img" height="50px" width="100%"/>
                    </div>
                </div>
                
                {/* Featurettes which describe and link to our services */}
                <div className="container-fluid" id="services-section">
                    <div className="container-fluid background-width">
                        <div className="container row-container">
                            <div className="row featurette">
                                <div className="col-sm-7 featurette-text" >
                                    <h2>Plant Hire and Events</h2>
                                    <p>&#62; We provide long and short term plant rentals across Barbados, and bring the goods to your doorstep.
                                    Whether it be
                                    an Office Building, Restaurant, Library or Wedding, our selection of plants will breathe life into your space
                                    </p>
                                </div>
                                <div className="col-sm-5">
                                    <img className="service-img" src={'./wedding-plants.jpg'} alt="img here"  width="200px" height="200px"/>                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="featurette-divider"/>

                    <div className="container-fluid background-width">
                        <div className="container row-container">
                            <div className="row featurette">
                                <div className="col-sm-5 order-sm-1 ">
                                    <img className="service-img" src={'./consulting-inside.jpg'} alt="img here" width="200px" height="200px"/>                    
                                </div>
                                <div className="col-sm-7 order-sm-2 order-first featurette-text">
                                    <h2>Consultation</h2>
                                    <p>&#62; Our team will come to you, and provide our design expertise and horticultural experience,
                                    so that you can create and maintain the right look for the right price in your green space.</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
 
                    <hr className="featurette-divider"/>

                    <div className="container-fluid background-width">
                        <div className="container row-container">
                            <div className="row featurette">
                                <div className="col-sm-7 featurette-text">
                                    <h2>Delivery & Maintainance</h2>
                                    <p>&#62; Plants can be fussy. That's why our team drives routes all over the island: so that we can care, trim, replace and repropogate our plants as quickly as possible.
                                        Keeping your office looking vibrant, around the clock!
                                    </p>
                                </div>
                                <div className="col-sm-5 ">
                                    <img className="service-img" src={'./plant-van.jpg'} alt="img here" width="200px" height="200px"/>                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <hr/>    
            </div>
        )

    
    
}

export default LandingPage;