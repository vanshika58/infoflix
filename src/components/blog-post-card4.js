import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card4.css'

const BlogPostCard4 = (props) => {
  return (
    <div className={`blog-post-card4-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-post-card4-image"
      />
      <div className="blog-post-card4-container">
        <h1 className="blog-post-card4-text">{props.pro_name}</h1>
        <span className="blog-post-card4-text1">{props.description}</span>
        <div className="blog-post-card4-separator"></div>
        <span className="blog-post-card4-text2">{props.label}</span>
        <div className="blog-post-card4-container1">
          
        
          <a href="#products" className="blog-post-card4-link">
          <span className="blog-post-card4-text3">{props.text}</span>
            <svg viewBox="0 0 1028 1028" className="blog-post-card4-icon">
              <path
                d="M473.045 892.331c-15.061 0-52.011-6.229-71.168-63.829l-51.584-154.752-154.795-51.584c-53.077-17.707-62.677-50.005-63.701-67.712s4.864-50.901 55.552-74.539l485.333-226.517c43.989-20.437 82.005-13.184 100.181 15.445 9.557 14.976 16.896 41.387-2.261 82.475l-226.517 485.333c-22.571 48.427-54.272 55.68-71.040 55.68zM243.072 548.096l174.677 58.155 58.24 174.635 203.733-436.608-436.651 203.819z"
                className=""
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

BlogPostCard4.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1573697610008-4c72b4e9508f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxob25leXxlbnwwfHx8fDE2Nzc0MjI5OTM&ixlib=rb-4.0.3&w=1500',
  text: 'Know More',
  label: 'Food & Drink',
  image_alt: 'image',
  link_text: 'https://example.com',
  rootClassName: '',
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  pro_name: 'Honey',
}

BlogPostCard4.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  link_text: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  pro_name: PropTypes.string,
}

export default BlogPostCard4
