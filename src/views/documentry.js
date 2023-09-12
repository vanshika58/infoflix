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
        <title>Documentary - Sal Mitra</title>
        <meta property="og:title" content="Documentary - Sal Mitra" />
      </Helmet>
      <Nav about={true}/>
      <div className="about-hero">
        <h1 className="about-text">Explore Sal Mitra by Documentary</h1>
      </div>
      <div className="about-hero1">
        <div className="about-container3">
          <h1 className="about-text1">Who we are?</h1>
          <span className="about-text2">
          In a world grappling with environmental crises, a startup named "Honey Bees: Guardians of the Environment" is leading a quiet revolution. Their mission: to conserve honey bees, essential pollinators vital for our food system, and protect the environment. At the heart of their innovative approach lies the "BeeBox," a high-tech beehive integrated with sensors.

            These sensor-enabled hives monitor bee colonies in real-time, tracking factors like hive temperature, humidity, and bee behavior. This technology offers unprecedented insights into the secret lives of bees, detecting threats early and ensuring optimal hive conditions.

            Beyond bee preservation, the startup champions sustainable agriculture. They collaborate with local farms, emphasizing bee-friendly practices and the importance of pollinators in food production.

            This documentary dives into their inspiring journey, showcasing the passionate team behind the startup and their dedication to safeguarding the environment. In a world where bees are disappearing at an alarming rate, "Honey Bees: Guardians of the Environment" offers a ray of hope, reminding us that innovation and commitment can be the keys to a sustainable future.
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

export default Documentry
