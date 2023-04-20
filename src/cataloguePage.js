import React from 'react'
import './cataloguePage.css'

const CataloguePage = () =>{
    return(
        <div className="" id="catalogue-page">
            <div className="card-header">
                <h4 className="card-title"><span className="bold">OUR INSTALLATIONS - ANSA McAL </span></h4>
                <p>- Have a look through the slideshow below to see what we do! -</p>
            </div>
            <div className="catalogue fancy-border">
                
                <div id="carousel-catalogue" className="carousel slide">
                    <div className="carousel-indicators">
                        <button data-bs-target="#carousel-catalogue" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#carousel-catalogue" data-bs-slide-to="1" className=""></button>
                        <button data-bs-target="#carousel-catalogue" data-bs-slide-to="2" className=""></button>
                        <button data-bs-target="#carousel-catalogue" data-bs-slide-to="3" className=""></button>
                        <button data-bs-target="#carousel-catalogue" data-bs-slide-to="4" className=""></button>
                        <button data-bs-target="#carousel-catalogue" data-bs-slide-to="5" className=""></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img id="carousel-img" className="d-blocl w-100" src={'./ansa-mcal (3).jpg'} alt="Ansa McAl" width="200px" height="200px"/>                 
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-blocl w-100" src={'./ansa-mcal (2).jpg'} alt="Ansa McAl" width="200px" height="200px"/>
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-blocl w-100" src={'./ansa-mcal (4).jpg'} alt="Ansa McAl" width="200px" height="200px"/>
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-blocl w-100" src={'./ansa-mcal (5).jpg'} alt="Ansa McAl" width="200px" height="200px"/>                 
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-blocl w-100" src={'./ansa-mcal (6).jpg'} alt="Ansa McAl" width="200px" height="200px"/>
                        </div>
                        <div className="carousel-item">
                            <img id="carousel-img" className="d-blocl w-100" src={'./ansa-mcal (7).jpg'} alt="Ansa McAl" width="200px" height="200px"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel-catalogue" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon carousel-control" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel-catalogue" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon carousel-control" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div>
                <div className="card-header">
                    <h5 className="card-title bounce"><img className="below-icon" src="./below-icon.png" width="30" height="30" alt=""/> SOME MORE OF OUR CLIENTS <img className="below-icon" src="./below-icon.png" width="30" height="30" alt=""/></h5>   
                </div>
            </div>
            <div className="logos-display">
                <div className="row-logo">
                    <img className="logo-img" href="" src="./port-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./bl&p-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./fertility-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./gildan-logo.png" width="50" height="50" alt=""/>
                    
                </div>
                <div class-name="row-logo">
                    <img className="logo-img" href="" src="./castaways-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./ihi-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./seaco-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./bl&p-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./courtesy-logo.png" width="50" height="50" alt=""/>
                </div>
                <div className="row-logo">
                    <img className="logo-img" href="" src="./cibc-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./lex-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./starcom-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./terra-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./storeall-logo.png" width="50" height="50" alt=""/>
                    
                </div>
                <div className="row-logo">
                    <img className="logo-img" href="" src="./iadb-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" href="" src="./di-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" src="./sol-logo.png" width="50" height="50" alt=""/>
                    <img className="logo-img" src="./s&c-logo.png" width="50" height="50" alt=""/>
                    
                </div>
            </div>
        </div>
    )
}
export default CataloguePage;

