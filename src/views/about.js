import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import Footer from '../components/footer'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Infoflix Services</title>
        <meta property="og:title" content="About - Infoflix Services" />
      </Helmet>
      <Nav about={true}/>
      <div className="about-hero">
      </div>
      <div className='bg-text'><h1 className="about-text">About Infoflix Service</h1></div>
      <div className="about-hero1">
        <div className="about-container3">
          <h1 className="about-text1">Who we are?</h1>
          <span className="about-text2">

Infoflix Services is a leading provider of secure banking services, specializing in accurate and efficient KYC (Know Your Customer) processes. With extensive experience in the financial industry, Infoflix Service is committed to offering a reliable platform for managing KYC needs, ensuring the highest standards of accuracy and security.<br/>

Our Vision: To be the most trusted partner for financial institutions in managing and securing KYC processes.
          </span>
          <div className="about-btn-group1"></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/logo.jpg"
          className="about-image1"
        />
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default About
