/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">

  <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">Software <br /> Engineer </h3>
                </div>

                <div>
                    <span className="exp__comp">Addis Ababa University Ai And Robotics Club</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Engineer <br />  Sep'24 - Feb'25</h3>
                        <p className="exp__modal-description">Worked at Addis Ababa University Ai And Robotics Club as Software Engineer programming Robots
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I Wrote Control Software.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Integrate Sensors.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Program Navigation & Path Planning.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div> 

     <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">African Robotics <br /> Championship</h3>
                </div>

                <div>
                    <span className="exp__comp">Won African Robotics Championship</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Software Engineer <br /> Jan'25 - Feb'25</h3>
                        <p className="exp__modal-description">Won Three Awards Excellence Award, Robot Skills Champion, Tournament Champion
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I Wrote Control Software.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Integrate Sensors.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Program Navigation & Path Planning.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>  

                        <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">Aritificial Intelligence <br /> ENGINEER </h3>
                </div>

                <div>
                    <span className="exp__comp">Trained Ai Models For Crypto Currency Prediction At Addis Ababa University </span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">AI Engineer <br /> Sep'24 - JAN'25</h3>
                        <p className="exp__modal-description">trained different models using google collab using Python
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Develop Machine Learning Models.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Built a Convolutional Neural Network using TensorFlow .</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Used Python, NumPy, Pandas, and Matplotlib for data handling and visualization.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience