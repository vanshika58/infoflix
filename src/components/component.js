import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <video
        src={props.video_src}
        poster="/playground_assets/sal%20mitra1%20%5B1%5D-1500h.png"
        controls
        muted
        preload="none"
        playsInline
        autoPlay
        loop
        className="component-video"
      ></video>
    </div>
  )
}

AppComponent.defaultProps = {
  video_src:
    'https://www.youtube.com/watch?v=0jbB-SQdCTw&ab_channel=VMMusicSeries',
}

AppComponent.propTypes = {
  video_src: PropTypes.string,
}

export default AppComponent
