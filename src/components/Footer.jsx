import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-privacy">
        Privacy{" "}
        <a className="footer-hyperlink" href="./home">
          Terms and Conditions
        </a>
      </div>
      <div id="footer-contact">Contact 9876543210</div>
      <div id="footer-copyright">Copyright 2016, Original Trombones</div>
    </footer>
  );
}

export default Footer;
