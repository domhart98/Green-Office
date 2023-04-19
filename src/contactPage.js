import React, {useState, useRef} from 'react';
import './contactPage.css';
import emailjs from '@emailjs/browser';

const ContactPage = () =>{
    const form = useRef();
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    function sendEmail(e){
        toggleShow();
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
            <div id="form-container">
                {/* Modal to display "email sent" message on submit*/}
                <div className={show ? "show" : "hidden"} id="modal-custom" onClick={toggleShow}>
                    <div id="modal-header">
                        <button onClick={toggleShow}>x</button>
                    </div>
                    <div id="modal-body">
                        <p>Thank you for reaching out! We will be in touch as soon as we can.</p>
                    </div>
                </div>
                
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                    <h2 className="text-primary center">SEND US A MESSAGE</h2>
                    <p>We provide free consultation, plant rental and delivery, plant maintainance, and event rentals. 
                    If you have any enquiries, please send us your questions below.</p>
                    <div className="row gx-3">
                        <div className="col-sm-6">
                            <label className="label" htmlFor="firstName"></label>
                            <input className="form-control" type="text" id="firstName" placeholder="First Name" name="firstName"/>
                        </div>
                        <div className="col-sm-6">
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
                        <label htmlFor="enquiry" className="label"></label>
                        <textarea className="form-control" required placeholder="Message" name="message"  rows="4"></textarea>
                    </div>
                    <div id="button-container">
                        <button type="submit" className="btn btn-primary" id="contact-form-submit"><i className="fa fa-envelope"/>SEND</button>
                    </div>
                </form>
            </div> 
            <div id="contact-info-container">
                <h2 className="text-primary center">CONTACT US</h2>
                <div id="contact-info">
                    <div id="contact-info-A">
                        <p>
                            [LOCATION]
                            <br/>7 Bannatyne Gardens,
                            <br/> Christ Church,
                            <br/> Barbados
                        </p>
                        <p>[BUSINESS HOURS]<br/>
                        Mon - Fri  ||  9am ~ 5pm
                        </p>
                    </div>
                    <div id="contact-info-B">
                    <p>Send us an email, or give us a call:</p>
                        <p className="pink-underline"> greenofficebarbados@gmail.com
                            <br/><br/>+1 (246) 832-1255 
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    )
    
}

export default ContactPage;