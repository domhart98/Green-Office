import React from'react'
import './aboutPage.css'

const AboutPage = () =>{
    
    return(
        <div id="about-page"> 
            {/* About Page Banner */}
            <div className="container-fluid" id="about-banner" height="700px">
                    
                <img className="about-image" alt="plant van" src="./baby-plants.jpg" width="1400" height="800"/>
                    
                <div className="container-fluid" id="mission-statement">
                    <h2>WE CATER TO OFFICE SPACES WHERE AESTHETICS MATTER!</h2>
                </div>
                    
            </div>
            
            {/* About the business */}
            <div id="metrics-container">
                <div className="metric">
                    <h4>Nurseries</h4>
                    <p>
                        <i className="fa fa-leaf"></i>1
                    </p>
                </div>
                <div className="metric">
                    <h4>Team Members</h4>
                    <p>
                        <i className="fa fa-users"/>8
                    </p>
                            
                </div>
                <div className="metric">
                    <h4>Clients Served</h4>
                    <p>
                        <i className="fa fa-check"></i>83
                    </p>
                </div>                
            </div>
            <hr/>
            {/* About the plant rental benefits */}
            <div className="container-fluid" id="mission-section">
                <h3 id="mission-header"> 
                    <img className="img-smaller" alt="" src="./leaf-logo-gold-reverse.jpg" />
                    WHY WE DO WHAT WE DO 
                    <img className="img-smaller" alt="" src="./leaf-logo-gold.jpg" />
                </h3>
                <div id="mission-body">
                    <div id="mission-text">
                        <p>&#61;&#62; 
                        Our mission is to create more organic and healthier spaces to live, work, and play in. 
                        Office buildings, show rooms, weddings & other events: We come to you, regardless of the size of the project
                        </p>
                        <p>&#61;&#62; We have experienced landscapers, who will give you free design consultation. We want to provide 
                        solutions that have longevity, are pleasing to look at, and are cost effective and sustainable.
                        </p>
                        <p>&#61;&#62; Our drivers are on the road throughout the week. We provide installation, as well as plant 
                            maintainance and plant replacement/renewal. This way, your plants stay beautiful and vibrant, and you
                            can rest easily.
                        </p>
                    </div>
                    <div id="mission-image">
                        <img className="image-front" src="./nice-area.jpg" alt="" width="200px" height="200px"/>
                        <img className="image-behind" src="./nice-area2.jpg" alt="" width="200px" height="200px"/>
                    </div>
                    
                </div>
            </div>
            
            <div className="container-fluid " id="benefits-container">
                <div className="benefit">
                    <div className="benefit-text">
                        <div className="teardrop">1</div>
                        <h3 className="benefit-title">
                            Air Purification
                            <img className="benefit-image-mini" alt="" src="./air-icon.png" width="60px" height="60px"/>
                        </h3>
                        <p>Our number one priority is to keep the air clean, which is why we do not carry faux plants. 
                            Given sufficient sunlight, the plants and their microbiomes recycle the air by absorbing CO2 and releasing O2 for us to breathe.
                        </p>
                    </div>
                    <div className="benefit-image">
                        <img src="./air-icon.png" alt="" width="200px" height="200px"/>
                    </div>
                </div>
                <hr/>
                <div className="benefit">
                    
                    <div className="benefit-text">
                        <div className="teardrop">2</div>
                        <h3 className="benefit-title">
                            Stress Reduction
                            <img className="benefit-image-mini" alt="" src="./stress-icon.png" width="60px" height="60px"/>
                        </h3>
                        <p>Plants in hospital waiting rooms have been shown to reduce patients' feelings of stress and anxiety.
                            We can apply this to our workspaces, and enhance the mood and wellbeing of everyone in the place.
                        </p>
                    </div>
                    <div className="benefit-image">
                        <img src="./stress-icon.png" alt="" width="200px" height="200px"/>
                    </div>
                </div>
                <hr/>
                <div className="benefit" >
                    <div className="benefit-text">
                        <div className="teardrop">3</div>
                        <h3 className="benefit-title">
                            Productivity Increase
                            <img className="benefit-image-mini" alt="" src="./bolt-icon.png" width="60px" height="60px"/>
                        </h3>
                        <p>Do you ever catch yourself daydreaming? Well, several studies have shown that
                            our attention spans are a cycle, a short one too. Again, interacting with plants/greenspaces
                            has been shown to restore our active attention more quickly. 
                        </p>
                    </div>
                    <div className="benefit-image">
                        <img src="./bolt-icon.png" alt="" width="200px" height="200px"/>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default AboutPage;