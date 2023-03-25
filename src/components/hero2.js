import React from 'react'

import PropTypes from 'prop-types'

import './hero2.css'

const Hero2 = (props) => {
  return (
    <div className="hero2-hero">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="hero2-image"
      />
      <div className="hero2-container">
        <h1 className="hero2-text">{props.heading}</h1>
        <h2 className="hero2-text1">{props.heading1}</h2>
        <span className="hero2-text2">{props.text}</span>
      </div>
    </div>
  )
}

Hero2.defaultProps = {
  image_src:
    '/playground_assets/bees8.png',
  image_alt: 'image',
  heading: 'Problem smart-hive Solved?',
  heading1: 'Solution to the modern problem.',
  text: 'Tribal farmers are currently facing a lack of opportunities to harness their existing livelihood resources. This situation not only prevents them from improving their living standards, but it also contributes to human-wildlife conflict and rural migration for labor work. Moreover, the honey produced by these farmers is of low quality due to the absence of data about honey batch production, the health of honey bees, and unorganized production and processing methods. Traditional supervision methods also fail to address the drastic reduction in indigenous honey bee colonies. Finally, it is difficult for community members to monitor and handle the farm from a long distance, given the challenges of frequent travel to check the bee boxes.',
}

Hero2.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
}

export default Hero2
