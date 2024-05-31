import Button from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <img
          src="https://www.aprilgroup.com.au/media/4isbn0ui/investor-img.jpg?width=600&quality=80"
          alt="Investor"
        />
        <div className="footer-content">
          <p>
            We pride ourselves on owning and managing
            <br />
            quality, legacy style assets designed to create
            <br />
            long lasting communities and improve the
            <br />
            wellbeing of the people who occupy them.
          </p>
          <div className="footer-buttons">
            <Button>ABOUT INVESTMENT</Button>
            <Button>ENQUIRE NOW</Button>
          </div>
        </div>
      </div>
      <hr />
      <h1>
        APRIL <span>GROUP</span>
      </h1>
      <hr />
      <div className="footer-end">
      <div className="footer-company-address">
        <h3>GET IN TOUCH</h3>
        <p>
          Level 6, 50 Holt Street, <br />
          Surry Hills, NSW, 2010
        </p>
        <Link to='./terms'>02 9096 3618</Link>
      </div>
      <hr />
      <div className="footer-company-enquiries">
        <h4>ENQUIRIES</h4>
        <p>General enquiries</p>
        <Link>info@aprilgroup.com.au</Link>
      </div>
      <div className="footer-company-address-tag">
        <p>Pro Bono Corporate Partner Meals on Wheels NSW</p>

        <div className="company-logo">
          <img src="https://www.aprilgroup.com.au/media/brggywfh/mow_nsw_mono_h-1.png" />
        </div>
      </div>
      <hr />
      <div>
        <div className="footer-company-license">
          <p>AUSTRALIAN FINANCIAL SERVICES LICENSE NO:505959</p>
          <p>REGISTERED NSW LICENSE NO:34514142542 </p>
          <p>WEBSITE BY LASH CREATIVE</p>
        </div>
        <div className="nav-footer-bar">
          <span>
            TERMS
          </span>
          <span>
            PRIVACY
          </span>
        </div>
      </div>
      </div>





        
    </footer>
  );
};

export default Footer;
