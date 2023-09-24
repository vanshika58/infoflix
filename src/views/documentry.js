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
      <Nav documentry={true}/>
      <div className="about-hero">
        <h1 className="about-text">Sal Mitra Chalchitra</h1>
      </div>
      <div className="about-hero1">
        <div className="about-container3">
          <h1 className="about-text1">Sal Mitra Chalchitra</h1>
          <span className="about-text2">
          Sal Mitra - Van Chalchitra, where the rhythms of the jungle compose moments that are not just memorable but eternally unique; life on this planet, as whispered by Mother Nature, transcends the mightiest dynasties of Earth. Here, within the unseen and unheard depths of Central India's forests, lies a vibrant tapestry of narratives waiting to unfurl.

Our forests, ancient sentinels of time, hold within them the stories of generations past, narrators of an unbroken human civilization. Through epochs and eras, they've bestowed upon us the wealth of culture, indigenous wisdom, and the indomitable spirit that sustains us through the ever-shifting tides of our environment.

Sal Mitra, we, the torchbearers of this timeless legacy, stand as custodians of these profound chronicles. We are the chroniclers of essential events, the keepers of culture's sacred flame, and the storytellers who breathe life into these narratives. Our mission is clear: to unveil these treasures before humanity's gaze, to craft an ecosystem of knowledge where culture and its diaspora flourish and endure.

In the whispers of rustling leaves and the songs of hidden creatures, we find the verses of an ancestral knowledge that transcends time. With each stroke of our metaphorical pen, we inscribe these sagas into the annals of history, ensuring that the wisdom of our forebears is not lost to the mists of forgetfulness.

Join us on this journey, where the past meets the present, and the legacy of cultures long gone intertwines with the aspirations of the future. Together, let us conserve the essence of our heritage, the heartbeat of our traditions, and the living testament of our shared humanity.

Sal Mitra - Van Chalchitra, where stories are the threads that bind us to our roots and illuminate the path ahead.
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
