import React from'react'
import './aboutPage.css'

const AboutPage = () =>{
    
    return(
        <div id="about-page"> 
            {/* About Page Banner */}
            <div className="container-fluid" id="about-banner" height="700px">
                    
                <img className="bg-img" alt="plant van" src="./open-van.jpg" width="1400" height="800"/>
                    
                <div className="container-fluid" id="mission-statement">
                    <h2 className="bolder">WE CATER TO OFFICE SPACES WHERE AESTHETICS MATTER!</h2>
                </div>
                    
            </div>
            
            {/* About the business */}
            <div className="row gx-0">
                <div className="col-sm-4 bg-gold-green">
                    <h4>Nurseries</h4>
                    <p><i className="fa fa-leaf" width="10px" height="10px"></i>1</p>
                </div>
                <div className="col-sm-4  bg-gold-green middle">
                    <h4>Team Members</h4>
                    <p><i className="fa fa-users"/>8</p>
                            
                </div>
                <div className="col-sm-4 bg-gold-green">
                    <h4>Clients Served</h4>
                    <p><i className="fa fa-check"></i>83</p>
                </div>                
            </div>
            
            {/* About the plant rental benefits */}
            <div className="container-fluid" id="about-info">
                <h3> <img className="img-smaller" alt="" src="./leaf-logo-gold-reverse.jpg" />WHY WE DO WHAT WE DO <img className="img-smaller" alt="" src="./leaf-logo-gold.jpg" /></h3>
                <div className="row gx-0">
                    <div className="col-sm-6" id="services">
                        <p>&#62; 
                        Our mission is to create more organic and healthier spaces to live, work, and play in. 
                        Office buildings, show rooms, weddings & other events: We come to you, regardless of the size of the project
                        </p>
                        <p>&#62; We have experienced landscapers, who will give you free design consultation. We want to provide 
                        solutions that have longevity, are pleasing to look at, and are cost effective and sustainable.
                        </p>
                        <p>&#62; Our drivers are on the road throughout the week. We provide installation, as well as plant 
                            maintainance and plant replacement/renewal. This way, your plants stay beautiful and vibrant, and you
                            can rest easily.
                        </p>
                    </div>
                    <div className="col-sm-6" id="nice-area-container">
                        <img src="./nice-area.jpg" alt="" id="nice-area" width="200px" height="200px"/>
                        <img src="./nice-area2.jpg" alt="" id="nice-area-2" width="200px" height="200px"/>
                    </div>
                    
                </div>
                <div className="container-fluid " id="list-container">
                    <ul>
                        <hr/>
                        <div className="bg-yellow-green"></div>
                        <li className="list-item row">
                            <div className="benefits-section col-md-8">
                                <div className="teardrop">1</div>
                                <p className="benefit-title">Air Purification<img className="title-icon" alt="" src="./air-icon.png" width="60px" height="60px"/></p>
                                <p className="benefit-text">Our number one priority is to keep the air clean, which is why we do not carry faux plants. 
                                    Given sufficient sunlight, the plants and their microbiomes recycle the air by absorbing CO2 and releasing O2 for us to breathe.</p>
                            </div>
                            <div className="col-md-4 icon">
                                <img src="./air-icon.png" alt="" width="200px" height="200px"/>
                            </div>

                        </li>
                        <hr/>
                        <li className="list-item row">
                            <div className="benefits-section col-md-8">
                                <div className="teardrop">2</div>
                                <p className="benefit-title">Stress Reduction<img className="title-icon" alt="" src="./stress-icon.png" width="60px" height="60px"/></p>
                                <p className="benefit-text">Plants in hospital waiting rooms have been shown to reduce patients' feelings of stress and anxiety.
                                    We can apply this to our workspaces, and enhance the mood and wellbeing of everyone in the place.
                                </p>
                            </div>
                            <div className="col-md-4 icon">
                                <img src="./stress-icon.png" alt="" width="200px" height="200px"/>
                            </div>
                        </li>
                        <hr/>
                        <li className="list-item row">
                            <div className="benefits-section col-md-8" >
                                <div className="teardrop">3</div>
                                <p className="benefit-title">Productivity Increase<img className="title-icon" alt="" src="./bolt-icon.png" width="60px" height="60px"/></p>
                                <p className="benefit-text">Do you ever catch yourself daydreaming? Well, several studies have shown that
                                    our attention spans are a cycle, a short one too. Again, interacting with plants/greenspaces
                                    has been shown to restore our active attention more quickly. 
                                </p>
                            </div>
                            <div className="col-md-4 icon">
                                <img src="./bolt-icon.png" alt="" width="200px" height="200px"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}

export default AboutPage;