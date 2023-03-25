import React from 'react'
import { Link } from 'react-router-dom'

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
      {/* <header data-thq="thq-navbar" className="home-navbar-interactive">
        <img
          alt="logo"
          src="/playground_assets/sal%20png%20mitr-1500h.png"
          className="home-logo"
        />
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <Link to="/about" className="home-navlink">
              About
            </Link>
            <a href="#gallery" className="home-link">
              Gallery
            </a>
            <a href="#products" className="home-link1">
              Products
            </a>
            <Link to="/contact" className="home-navlink1">
              Contact-us
            </Link>
            <a
              href="https://www.salmitra.com/hive"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              Bees-box
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group"></div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container01">
              <img
                alt="image"
                src="/playground_assets/sal%20png%20mitr-1500h.png"
                className="home-image"
              />
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <Link to="/about" className="home-navlink2">
                About
              </Link>
              <a href="#gallery" className="home-link3">
                Gallery
              </a>
              <a href="#products" className="home-link4">
                Products
              </a>
              <Link to="/contact" className="home-navlink3">
                Contact
              </Link>
              <a
                href="https://www.salmitra.com/hive"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                Bees-box
              </a>
            </nav>
            <div className="home-container02"></div>
          </div>
          <div className="home-icon-group">
          <a href="https://twitter.com/sal_mitra">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/sal-mitra-3452a8266/">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
            </a>
            <a href="https://www.instagram.com/salmitra.llp/">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon08">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            </a>
            <a href="https://www.instagram.com/salmitra.llp/">
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon10">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
            </a>
          </div>
        </div>
      </header> */}
      <Nav/>
      <div className="home-hero">
        <div className="home-container03">
          <h1 className="home-text">Who is Sal Mitra</h1>
          <span className="home-text01">
            <span>
            Salmitra is a company that specializes in honeybee farming,
            producing high-quality honey using the latest technology and IoT
            solutions.
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
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
    </div>
  )
}

export default Home
