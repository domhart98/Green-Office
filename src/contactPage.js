import React, {useRef} from 'react';
import './contactPage.css';
import emailjs from '@emailjs/browser';

const ContactPage = () =>{
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
        // service_id, template_id and public key will get from Emailjs website when you create account and add template service and email service 
        emailjs.sendForm('service_contact_form', 'template_z4f9ef4', 
        e.target, 
        'OW_qLnlPyOnAA841-')
        
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return(
        <div id="contact-page">
            
            <div className="container row gx-0" id="form-container">
                
                 <div className="col-md-7" >
                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <h2 className="text-primary center">SEND US A MESSAGE</h2>
                        <p>We provide free consultation, plant rental and delivery, plant maintainance, and event rentals. 
                        If you have any enquiries, please send us your questions below.</p>
                        <div className="row gx-0">
                            <div className="col-md-5">
                                <label className="label" htmlFor="firstName"></label>
                                <input className="form-control" type="text" id="firstName" placeholder="First Name" name="firstName"/>
                                
                            </div>
                            <div className="col-1"></div>
                            <div className="col-md-6">
                                <label className="label" htmlFor="lastName"></label>
                                <input className="form-control" type="text" id="lastName" placeholder="Last Name" name="lastName"/>
                                
                            </div>
                        </div>
                            
                        <div className="form-row">
                            <label className="label" htmlFor="email"></label>
                            <input className="form-control" type="email" id="email" required placeholder="Email" name="email"/>
                            
                        </div>
                        <div className="form-row">
                            <label className="label" htmlFor="phone"></label>
                            <input className="form-control" type="text" id="phone"  placeholder="Phone #" name="phone"/>
                            
                        </div>
                        <div className="form-outline">
                            <label htmlFor="enquiry" className="label" rows="6"></label>
                            <textarea className="form-control" required placeholder="Message" name="message"></textarea>
                            
                        </div>
                        <div className="container" id="button-container">
                            <button type="submit" className="btn btn-primary" id="contact-form-submit"><i className="fa fa-envelope"/>SEND</button>
                        </div>
                        
                    </form>
                </div> 
                <div className="col-md-1 mx-auto"></div>
                <div className="col-md-4">
                    <h2 className="text-primary center">CONTACT US</h2>
                    <p>Send us an email, or give us a call:</p>
                    <p className="contact-info"> greenofficebarbados@gmail.com</p>
                    <p className="contact-info"> +1 (246) 832-1255 </p>
                    <div><br/>[LOCATION]
                        <p>7 Bannatyne Gardens, Christ Church, Barbados</p>
                    </div>
                    <div>[BUSINESS HOURS]
                        <p>Mon - Fri :  9am ~ 5pm</p>
                    </div>
                    
                </div> 
            </div>
        </div>
    )
    
}

export default ContactPage;