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
          At Sal Mitra Research and Consulting, we stand at the vanguard of innovation, driven by our profound appreciation for the nexus of nature, science, and community. In our relentless pursuit of socio-economic betterment, we recognize research as the compass that guides our course. As we usher technology into the sphere of social transformation, we do so with an unwavering commitment to the principles of technology-induced implementation.

Our foundation is rooted in the conviction that modern intervention, steeped in scientific rigor, can coalesce harmoniously with indigenous wisdom, epitomizing the concept of "Appropriate Technology." Sal Mitra Research and Consulting is dedicated to unraveling the intricate tapestry of social, ecological, and technological interventions within geographical contexts. Moreover, we ardently seek collaboration with diverse experts to illuminate the interplay of environment, community, and behavior through the lens of socio-technology.

With a distinguished cadre of senior advisors and a collaborative ethos with governmental bodies, we are cultivating an ecosystem of transformation underpinned by ethics and the judicious use of technology. This synergy enables us to forge novel pathways for positive change.

We invite you to engage with us in a collective endeavor to chart new horizons in research, implementation, and innovation. Our expertise and wealth of knowledge are at your disposal, ready to be harnessed for collaborative ventures that hold the promise of reshaping the socio-technological landscape.

Sal Mitra Research and Consulting extends an open invitation for your esteemed organization to embark on a journey of discovery and transformation with us. Together, we can craft a future where science, technology, and indigenous wisdom converge to create profound socio-economic impact.

Please feel free to connect with us for any research study or implementation initiative. Your aspirations are our fuel, and together, we shall navigate the frontiers of possibility.
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
