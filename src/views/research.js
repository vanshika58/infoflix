import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import Nav from '../components/nav'
import Footer from '../components/footer'
import './about.css'

const Research = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>Research & Consulting - Sal Mitra</title>
        <meta property="og:title" content="Research & consulting - Sal Mitra" />
      </Helmet>
      <Nav research={true}/>
      <div className="about-hero">
        <h1 className="about-text">Let's Talk about some Research and Consulting</h1>
      </div>
      <div className="about-hero1">
        <div className="about-container3">
          <h1 className="about-text1"> Researches</h1>
          <span className="about-text2">
           Research and development
          </span>
          <div className="about-btn-group1"></div>
        </div>
        <img
          alt="image"
          src="/playground_assets/sal%20mitra1%20%5B1%5D-400w.png"
          className="about-image1"
        />
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default Research
