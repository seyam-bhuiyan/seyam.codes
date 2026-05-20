import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:seyam.code@gmail.com" data-cursor="disable">
                seyam.code@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:01841007360" data-cursor="disable">
                01841007360
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <div className="contact-social-links">
              <a
                href="https://github.com/seyam-bhuiyan"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://www.linkedin.com/in/jihadul-islam-seyam-497a6135a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXOlFlFfFQgSRZ4XQD7otIw%3D%3D"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
              <a
                href="https://www.facebook.com/jiseyam15"
                target="_blank"
                data-cursor="disable"
                className="contact-social"
              >
                Facebook <MdArrowOutward />
              </a>
            </div>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Jihadul Islam Seyam</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
