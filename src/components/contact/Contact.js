import {
  SiFacebook,
  SiGmail,
  SiLinkedin,
  SiGithub,
  SiDevDotTo,
  SiInstagram
} from "react-icons/si";
import CopyMailTo from "react-copy-mailto";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <span>Connect here</span>
      <div className="contact-social">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://facebook.com/ankiiitraj"
        >
          <SiFacebook className="contact-fb contact-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/anktrj_/"
        >
          <SiInstagram className="contact-insta contact-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/ankiiitraj"
        >
          <SiLinkedin className="contact-in contact-icon" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ankiiitraj"
        >
          <SiGithub className="contact-gh contact-icon" />
        </a>
        <a 
          target="_blank" 
          rel="noreferrer" 
          href="https://dev.to/ankiiitraj"
        >
          <SiDevDotTo className="contact-dev contact-icon" />
        </a>
      </div>
      <div className="contact-mail">
        {" "}
        <SiGmail style={{ marginRight: "10px" }} />{" "}
        <CopyMailTo email="ankitatiiitr@gmail.com" />
      </div>
      <p style={{ color: "white", marginBottom: "0px" }}>
        Made with <span style={{ color: "red" }}>❤</span> by{" "}
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ankiiitraj"
        >
          ankiiitraj
        </a>
      </p>
    </div>
  );
};

export default Contact;
