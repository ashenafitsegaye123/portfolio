/* eslint-disable no-unused-vars */
import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">&lt;Ashenafi Tsegaye/&gt;</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/ashenafitsegaye_/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://github.com/ashenafitsegaye123" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://x.com/Ashut94233939" className="footer__social-link" target="_blank">
                    <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://in.linkedin.com/in/ashenafi-tsegaye-34a716279" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>

               {/*  <a href="https://github.com/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-github"></i>
                </a> */}
            </div>

            <span className="footer__copy">&#169; 2025 AT. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer