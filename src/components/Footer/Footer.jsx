import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="flexCenter innerWidth paddings f-container">
        <div className="flexColStart f-left">
          <img src="/assets/images/logo2.png" alt="footer" />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">

          <span className="primaryText">Information</span>
          <span className="secondaryText">145 Dubai, FL 5467, UAE</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Footer;
