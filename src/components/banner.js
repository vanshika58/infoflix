import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div className="banner-banner">
      <h1 className="banner-text">{props.heading}</h1>
      <span className="banner-text1">
        <span>
          Our goal is to address the challenges faced by Tribal communities by
          establishing a connection between them and the forest, while also
          promoting sustainable practices. By facilitating the development of
          NTFP and Honey production, we aim to offer Tribal farmers a viable
          source of income, which could potentially alleviate poverty and
          prevent migration to urban areas in search of work. In addition, our
          efforts could help curb the use of forest wood as fuel and open up new
          avenues for societal development.
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
  )
}

Banner.defaultProps = {
  heading: 'Smart-Hive Vision',
}

Banner.propTypes = {
  heading: PropTypes.string,
}

export default Banner
