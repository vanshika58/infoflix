import React from 'react'

import PropTypes from 'prop-types'

import './stats.css'

const Stats = (props) => {
  return (
    <div className="stats-stats">
      <div className="stats-stat">
        <h1 className="stats-text">
          <span>50</span>
          <span>+</span>
        </h1>
        <span className="stats-text03">{props.text}</span>
        <span className="stats-text04">{props.text1}</span>
      </div>
      <div className="stats-stat1">
        <h1 className="stats-text05">
          <span>369</span>
        </h1>
        <span className="stats-text07">{props.text2}</span>
        <span className="stats-text08">{props.text3}</span>
      </div>
      <div className="stats-stat2">
        <h1 className="stats-text09">
          <span>500</span>
          <span>+</span>
        </h1>
        <span className="stats-text12">{props.text4}</span>
        <span className="stats-text13">{props.text5}</span>
      </div>
      <div className="stats-stat3">
        <h1 className="stats-text14">
          <span>24/7</span>
        </h1>
        <span className="stats-text16">{props.text6}</span>
        <span className="stats-text17">{props.text7}</span>
      </div>
    </div>
  )
}

Stats.defaultProps = {
  text: 'Happy clients',
  text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  text2: 'Projects completed',
  text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  text4: 'Hours',
  text5: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
  text6: 'Support',
  text7: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
}

Stats.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
}

export default Stats
