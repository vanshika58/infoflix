import React from 'react'
import { Link } from 'react-router-dom'
import {FloatingWhatsApp} from "react-floating-whatsapp";
import { Helmet } from 'react-helmet'

import GalleryCard2 from '../components/gallery-card2'
import BlogPostCard4 from '../components/blog-post-card4'
import Footer from '../components/footer'
import Nav from '../components/nav';
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sal Mitra</title>
        <meta property="og:title" content="Sal Mitra" />
      </Helmet>

      <Nav/>
      <div className="home-hero">
        <div className="home-container03">
          <h1 className="home-text">About Sal Mitra</h1>
          <span className="home-text01">
            <span>
            Sal mitra is a winner of Government incubation program among many bright ideas from India. We are sustainable Agri-tech company trying to adress the environmental issues with a techno-social intervention. We specializes in first ever honeybee farming, producing high-quality honey using the latest technology and IoT solutions.
              <span
                // dangerouslySetInnerHTML={{
                //   __html: ' ',
                // }}
              />
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
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
       
          <Link to="/contact" className="home-navlink4 home-button">
              Contact
            </Link>
    
          {/* <button className="home-button button">Contact</button> */}
        </div>
      </div>
      <div className="home-hero1">
        <div className="home-container04">
          <h1 className="home-text06">
            <span>Want To know more about </span>
            <span>Sal Mitra</span>
            <span>?</span>
          </h1>
          <h2 className="home-text10">
            Let&apos;s connect and be the part of change.
          </h2>
          <div className="home-btn-group1">
            <Link to="/contact" className="home-navlink4 button">
              Contact US
            </Link>
            <Link to="/about" className="home-navlink5 button">
              Learn More
            </Link>
          </div>
          <span className="home-text11">
            Salmitra is a company that specializes in honeybee farming,
            producing high-quality honey using the latest technology and IoT
            solutions. Their colonies are located in pristine areas to ensure
            their honey is free from contaminants and pesticides. The company is
            committed to sustainability and preserving the environment and also
            provides educational opportunities to those interested in learning
            about honeybee farming and the importance of bees in the ecosystem.
            They are dedicated to providing customers with the best honey
            possible, whether you&apos;re a honey connoisseur or simply looking
            for a healthy and delicious alternative sweetener.
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/sal%20mitra1%20%5B1%5D-1500w.png"
          loading="lazy"
          className="home-image1"
        />
      </div>
      <div id="gallery" className="home-gallery">
        <div className="home-container05">
          <div className="home-container06">
            <div className="home-container07">
              <GalleryCard2 image_src="/Images/1.jpg"  
              rootClassName="rootClassName2"></GalleryCard2>
            </div>
            <div className="home-container08">
              <GalleryCard2
                image_src="/Images/2.jpg"
                rootClassName="rootClassName3"
              ></GalleryCard2>
            </div>
          </div>
          <div className="home-container09">
            <GalleryCard2
              image_src="/Images/3.jpg"
              rootClassName="rootClassName"
            ></GalleryCard2>
          </div>
        </div>
        <div className="home-container10">
          <GalleryCard2
            image_src="/Images/4.jpg"
            rootClassName="rootClassName4"
          ></GalleryCard2>
        </div>
      </div>
      <div id="products" className="home-features">
        <h1 className="home-text12">
          <span>Explore our Products</span>
          <br></br>
        </h1>
        <span className="home-text15">
        The company is committed to sustainability and preserving the environment and also provides educational opportunities to those interested in learning about honeybee farming and the importance of bees in the ecosystem.
        </span>
        <div className="home-blog">
          <BlogPostCard4
            label="Food &amp;Drink"
            rootClassName="rootClassName1"
            description="Millets are a group of small-seeded cereal crops that have been cultivated for thousands of years. They are known for their high nutritional value, tolerance to drought, and versatility in cooking. Millets such as sorghum, finger millet, and pearl millet are staple foods in many countries, especially in Africa and Asia."
          ></BlogPostCard4>
          <div className="home-container11">
            <BlogPostCard4
              label="Food &amp;Drink"
              pro_name="Milletes"
              image_src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGhvbmV5JTIwbWVsbGV0c3xlbnwwfHx8fDE2Nzc0MjM2OTY&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName2"
              description="Millets are a group of small-seeded cereal crops that have been cultivated for thousands of years. They are known for their high nutritional value, tolerance to drought, and versatility in cooking. Millets such as sorghum, finger millet, and pearl millet are staple foods in many countries, especially in Africa and Asia."
            ></BlogPostCard4>
            <BlogPostCard4
              image_src="https://images.unsplash.com/photo-1625600243103-1dc6824c6c8a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDl8fGhvbmV5JTIwbWVsbGV0c3xlbnwwfHx8fDE2Nzc0MjM2OTY&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName3"
              description="Honey is a versatile and highly valued product that has been used for thousands of years. It is made by bees collecting nectar from flowers and transforming it into a thick, sweet syrup through enzymes in their bodies. Honey is a natural sweetener that is widely recognized for its unique flavor and health benefits. It is rich in antioxidants, antibacterial properties, and essential vitamins and minerals. Honey is widely used in cooking and baking, as well as being a popular ingredient in health and beauty products."
            ></BlogPostCard4>
          </div>
          <BlogPostCard4
            image_src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGhvbmV5JTIwbWVsbGV0c3xlbnwwfHx8fDE2Nzc0MjM2OTY&amp;ixlib=rb-4.0.3&amp;w=1500"
            rootClassName="rootClassName4"
            pro_name="Millets"
            description="Millets are a group of small-seeded cereal crops that have been cultivated for thousands of years. They are known for their high nutritional value, tolerance to drought, and versatility in cooking. Millets such as sorghum, finger millet, and pearl millet are staple foods in many countries, especially in Africa and Asia."
          ></BlogPostCard4>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
      <FloatingWhatsApp phoneNumber="918237184918" accountName="Sal Mitra" avatar={"/playground_assets/sal%20mitra1%20%5B1%5D-1500w.png"}  statusMessage="Typically replies within 5 minutes" notification={true} notificationSound={true}  />
    </div>
  )
}

export default Home
