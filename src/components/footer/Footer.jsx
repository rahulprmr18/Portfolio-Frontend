import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';  // Import icons
import './footer.css';

const Footer = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={`footer ${theme}`}>
      <section className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Rahul Parmar. All rights reserved.
        </p>
        <p>
          Connect with me on{" "}
          <a href="https://github.com/rahulprmr18" className="footer-link">
            <FaGithub size={24} />
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/rahul-parmar-36281b196?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BA5C8wRMTSnC6SfY9WuWskg%3D%3D"
            className="footer-link"
          >
            <FaLinkedin size={24} />
          </a>{" "}
          |{" "}
          <a href="mailto:rkparmar1810@gmail.com" className="footer-link">
            <FaEnvelope size={24} />
          </a>{" "}
          |{" "}
          <a href="https://www.instagram.com/rk__prmr?igsh=MW92ZzJjYW00cmNiMg==" className="footer-link">
            <FaInstagram size={24} />
          </a>{" "}
          |{" "}
          <a href="https://www.facebook.com/share/1DkMUsr6Uo/" className="footer-link">
            <FaFacebook size={24} />
          </a>
        </p>
      </section>
      <button className="back-to-top" onClick={scrollToTop}>
        &#8593;
      </button>
    </footer>
  );
};

export default Footer;
