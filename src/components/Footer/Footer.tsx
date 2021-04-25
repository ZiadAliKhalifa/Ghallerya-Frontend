import React from "react";
import "./Footer.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">Ghallerya</div>
      <div className="footer-fine-print">
        <span>2021 Ghallerya – Free Stock Photos & Images – </span>
        <span>
          <a href="b">Privacy Policy</a>
        </span>
      </div>
      <div className="footer-message">Made with love for great people.</div>
    </div>
  );
};

export default Footer;
