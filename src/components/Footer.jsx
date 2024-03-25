import React from "react";
import linkedinIcon from "../assets/images/social-links/linkedin.svg";
import githubIcon from "../assets/images/social-links/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <nav>
            <ol className="footer-links">
              <li className="footer-link">
                <a
                  title="GitHub"
                  href="https://github.com/samarkansal"
                  target="_blank"
                  rel="noopener"
                >
                  <img loading="lazy" src={githubIcon} alt="GitHub" />
                </a>
              </li>
              <li className="footer-link">
                <a
                  title="Linkedin"
                  href="https://www.linkedin.com/in/samar-kansal-015951150/"
                  target="_blank"
                  rel="noopener"
                >
                  <img loading="lazy" src={linkedinIcon} alt="Linkedin" />
                </a>
              </li>
            </ol>
          </nav>
          <p className="footer-text">
            &copy; 2024 All Rights Reserved. {"  "}
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/samarkansal"
            >
              Samar Kansal.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
