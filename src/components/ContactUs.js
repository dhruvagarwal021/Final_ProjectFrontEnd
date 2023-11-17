import React from "react";
import "./style2.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bg3 from "./Images/bc4.jpg";

function ContactUs() {
  return (
    <div>
      <section
        className="section-bg"
        style={{
          backgroundImage: `url(${bg3})`,
        }}
        data-scroll-index="7"
      >
        <div className="overlay pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="contact-info">
                  <h2 className="contact-title">Have Any Questions?</h2>
                  <p>
                    Thank you for considering Love And Tender Pet Care as your
                    trusted partner in pet care and adoption. We are here to
                    support you every step of the way in your journey to provide
                    loving homes for our furry friends. Whether you have
                    questions about our adoption process, need advice on pet
                    care, or simply want to share your experiences with us, we
                    welcome your inquiries. Our dedicated team is committed to
                    ensuring the well-being of pets and making your pet adoption
                    experience a seamless one. Please feel free to reach out to
                    us via the contact options provided below. Your pets'
                    happiness and health are our top priorities, and we look
                    forward to assisting you.
                  </p>
                  <ul className="contact-info">
                    <li>
                      <div className="info-left">
                        <i className="fas fa-mobile-alt"></i>
                      </div>
                      <div className="info-right">
                        <h4>+11223344550</h4>
                      </div>
                    </li>
                    <li>
                      <div className="info-left">
                        <i className="fas fa-at"></i>
                      </div>
                      <div className="info-right">
                        <h4>info@example.com</h4>
                      </div>
                    </li>
                    <li>
                      <div className="info-left">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="info-right">
                        <h4>1243 Stree New Chandigarh, INDIA</h4>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
