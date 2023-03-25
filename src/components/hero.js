import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-hero">
      <h1 className="hero-text">{props.heading}</h1>
    </div>
  )
}

Hero.defaultProps = {
  heading: 'Smart Hive',
}

Hero.propTypes = {
  heading: PropTypes.string,
}

export default Hero
