import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Career.css";

const Career = () => {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Development Skills</h4>
                <h5>Java & MySQL Specialist</h5>
              </div>
              <h3>1 YEAR</h3>
            </div>
            <p>
              Gained over a year of hands-on experience in Java development and 
              database management with MySQL, building a solid foundation in 
              backend logic and efficient data handling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Enthusiast</h4>
                <h5>React JS Developer</h5>
              </div>
              <h3>6 MONTHS</h3>
            </div>
            <p>
              Dedicated the last 6 months to mastering React JS, focusing on 
              building responsive, component-based user interfaces and 
              enhancing digital experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CSE Student</h4>
                <h5>Green University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing a CSE degree at Green University. As a final-year 
              student, I am actively preparing to transition into the professional 
              industry and am eager to start a full-time job soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
