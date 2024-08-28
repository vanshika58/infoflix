import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import Footer from '../components/footer'
import './about.css'

const Documentry = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>Documentary - Infoflix Services</title>
        <meta property="og:title" content="Documentary - Infoflix Services" />
      </Helmet>
      <Nav documentry={true}/>
      <div className="about-hero">
      </div>
      <div className='bg-text'><h1 className="about-text">Infoflix Services</h1></div>
      <div className="about-hero1">
        <div className="about-container3">
          <h1 className="about-text1">Discover the Story Behind the Numbers</h1>
          <span className="about-text2">

At Infoflix Services, we explore the intricate world of KYC (Know Your Customer) processes, data accuracy, and financial compliance.
The Compliance Chronicles The history and impact of financial regulations on modern banking.

Join us as we uncover the financial processes that keep the global economy moving.
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

export default Documentry
