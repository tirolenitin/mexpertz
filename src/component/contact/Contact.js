import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="self-img1">
          <img  src="./assets/img/homebg.png" />
          <div className="self-form">
            <h5>Hours of Operation</h5>
            <span>Mon-Fri</span>
            <br />
            <span>10am-12:30pm</span>
            <br />
            <span>4:30pm-10:30pm</span>
            <br />
            <h6 className="container text-center  self-price">
              <span className="self-price">_________________________</span>
            </h6>
            <br />
            <span>Sat</span>
            <span>3pm-10:30pm</span>
            <br />
            <h6 className="container text-center  self-price">
              <span className="self-price">_________________________</span>
            </h6>
            <br/>
            <span>Sun</span>
            <br/>
            <span>We are Closed</span>

            <div className='container text-center py-3 '>
            <button  type='button'  className='btn 'id='btn1'>Make Reservation</button>
            
        </div>




          </div>
          <div className="self-form1">
        
            <h5>Drop Us a Line</h5>
            <br/>
            <span>Don't be shy, let us know if you have any question</span>
            <br/>

            <div className='container text-center py-3 '>
            <button  type='button'  className='btn 'id='btn1'>Contact Us</button> 
        </div>
        <div className="self-form2">
            <h6>Our Newsletter</h6>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <input type="email" placeholder="Email"/>
              <div className='container text-center py-3 '>
            <button  type='button'  className='btn 'id='btn1'>Contact Us</button> 
        </div>
        </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
