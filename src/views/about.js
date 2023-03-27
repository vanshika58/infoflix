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
        <title>About - Sal Mitra</title>
        <meta property="og:title" content="About - Sal Mitra" />
      </Helmet>
      <Nav about={true}/>
      <div className="about-hero">
        <h1 className="about-text">About Sal Mitra</h1>
      </div>
      <div className="about-hero1">
        <div className="about-container3">
          <h1 className="about-text1">Who we are?</h1>
          <span className="about-text2">
          Sal mitra is a winner of Government incubation program among many bright ideas from India. We are sustainable Agri-tech company trying to adress the environmental issues with a techno-social intervention.  We specializes in first ever honeybee farming, producing high-quality honey using the latest technology and IoT solutions.
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

export default About
