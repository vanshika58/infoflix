import React from 'react'

import PropTypes from 'prop-types'

import './hero3.css'

const Hero3 = (props) => {
  return (
    <div className="hero3-hero">
      <div className="hero3-container">
        <h1 className="hero3-text">{props.heading}</h1>
        <span className="hero3-text1">
          <br></br>
          <span>
            The use of Smart Hive technology has created a significant social
            impact on tribal farmers who rely on beekeeping for their
            livelihood. By integrating IoT devices into bees boxes, farmers can
            closely monitor the health and activity of their bees, reducing
            human-wildlife conflict and ensuring better honey production. Smart
            Hive technology has also enabled farmers to access data on honey
            batch production, the health of honey bees, and improved production
            and processing methods, resulting in higher quality honey that
            commands better prices in the market. This has improved the standard
            of living for tribal farmers and reduced the need for rural
            migration for labor work.
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="hero3-image"
      />
    </div>
  )
}

Hero3.defaultProps = {
  image_src:
    '/playground_assets/bees5.png',
  image_alt: 'image',
  heading: 'Social Empact',
}

Hero3.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default Hero3
