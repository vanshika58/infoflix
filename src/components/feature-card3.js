import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3.css'

const FeatureCard3 = (props) => {
  return (
    <div className={`feature-card3-feature-card ${props.rootClassName} `}>
      <img
        alt={props.honey}
        src={props.image_src}
        className="feature-card3-image"
      />
      <h2 className="feature-card3-text">{props.title}</h2>
      <span className="feature-card3-text1">{props.description}</span>
      <div className="feature-card3-container">
        <button className="feature-card3-button button">{props.button}</button>
        <button className="feature-card3-button1 button">
          {props.button1}
        </button>
      </div>
    </div>
  )
}

FeatureCard3.defaultProps = {
  description:
    'Honey is a versatile and highly valued product that has been used for thousands of years. It is made by bees collecting nectar from flowers and transforming it into a thick, sweet syrup through enzymes in their bodies. Honey is a natural sweetener that is widely recognized for its unique flavor and health benefits. It is rich in antioxidants, antibacterial properties, and essential vitamins and minerals. Honey is widely used in cooking and baking, as well as being a popular ingredient in health and beauty products. The color and taste of honey can vary based on the type of flowers the bees collect nectar from, leading to a wide variety of honey varieties such as manuka, acacia, and clover honey. With no additives or preservatives, honey is a pure and wholesome ingredient that can be enjoyed in many different forms.',
  button: 'Buy',
  button1: 'Learn More',
  honey: 'image',
  title: 'HONEY',
  image_src:
    'https://images.unsplash.com/photo-1587049352824-f7e128d4ebe5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxob25leXxlbnwwfHx8fDE2NzcwMDc4NTM&ixlib=rb-4.0.3&w=200',
  rootClassName: '',
}

FeatureCard3.propTypes = {
  description: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  honey: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard3
