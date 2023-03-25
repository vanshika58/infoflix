import React from 'react'

import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className="hero1-hero">
      <div className="hero1-container">
        <h1 className="hero1-text">{props.heading}</h1>
        <span className="hero1-text1">
          <span>
            The combination of IoT technology and beekeeping is revolutionizing
            the honey industry. By integrating IoT devices into bees boxes,
            farmers can closely monitor the health and activity of their bees.
            These devices can track temperature, humidity, and even detect
            potential diseases, allowing farmers to take proactive measures to
            protect their colonies. The technology also offers insights into
            honey production, helping farmers optimize their harvests. With the
            help of IoT, bee farming has become more efficient, cost-effective,
            and sustainable, ensuring a steady supply of honey for consumers.
            The benefits of this technology extend beyond the industry itself,
            as it contributes to environmental conservation by promoting the
            growth of bee populations.
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
        className="hero1-image"
      />
    </div>
  )
}

Hero1.defaultProps = {
  image_src:
    '/playground_assets/bees9.png',
  image_alt: 'image',
  heading: 'What is smart-hive?',
}

Hero1.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  heading: PropTypes.string,
}

export default Hero1
