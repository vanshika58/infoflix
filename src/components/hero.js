import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <>
    <div className="hero-hero">
    </div>
    <div className='bg-text'><h1 className="hero-text">{props.heading}</h1></div>
    </>
  )
}



Hero.propTypes = {
  heading: PropTypes.string,
}

export default Hero
