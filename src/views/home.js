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
        <title>Infoflix Services</title>
        <meta property="og:title" content="Infoflix Services" />
      </Helmet>

      <Nav/>
      <div className="home-hero">
        <div className="home-container03">
          <h1 className="home-text">About-Infoflix Services</h1>
          <span className="home-text01">
            <span>
            Infoflix Services is a leading provider of secure banking services, specializing in KYC (Know Your Customer) processes. With years of experience in the financial industry, we have honed our skills in ensuring that all customer information is entered accurately and efficiently, reducing errors and enhancing security.
            <span
                
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
            <span>Infoflix Services</span>
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
          Welcome to Infoflix Services! At Infoflix Services , we prioritize security and accuracy in handling all your banking needs. Our expertise in financial services and meticulous attention to detail ensures that your KYC (Know Your Customer) process is seamless and compliant with all regulations. Trust us to protect your financial information with the highest level of integrity.
          </span>
        </div>
        <img
          alt="image"
          src="/playground_assets/logo.jpg"
          loading="lazy"
          className="home-image1"
        />
      </div>
    
      <div id="products" className="home-features">
        <h1 className="home-text12">
          <span>Unlock the Tools for Financial Precision

</span>
          <br></br>
        </h1>
        <span className="home-text15">
        <section id="products">
  <h2>Enhance Your Financial Operations with [Company Name]</h2>
  <p>
    At [Company Name], we provide a comprehensive suite of products designed to ensure accuracy, security, and compliance in your financial operations. Our specialized tools cater to the unique demands of the banking industry, helping you streamline processes and protect your data.
  </p>

  <h3>Our Products</h3>
  <ul>
    <li>
      <strong>KYC Management System:</strong> A powerful platform that automates and secures the KYC process, ensuring precise data capture and compliance with industry standards.
    </li>
    <li>
      <strong>Data Validation Tools:</strong> Advanced software that meticulously checks and corrects discrepancies in financial records, reducing errors and enhancing accuracy.
    </li>
    <li>
      <strong>Compliance Tracker:</strong> Stay current with the latest regulations and ensure your financial operations remain compliant with our real-time monitoring tool.
    </li>
    <li>
      <strong>Secure Document Vault:</strong> A highly secure, encrypted storage solution for your sensitive financial documents, accessible only to authorized personnel.
    </li>
  </ul>

  <h3>Why Choose Our Products?</h3>
  <ul>
    <li><strong>Cutting-edge Technology:</strong> Our tools leverage the latest technology for unmatched reliability and security.</li>
    <li><strong>User-friendly Interfaces:</strong> Designed with ease of use in mind, our products are intuitive, even for non-technical staff.</li>
    <li><strong>Proven Success:</strong> Trusted by leading financial institutions for their accuracy and efficiency.</li>
  </ul>

  <p>Start exploring today and discover how our products can transform your financial operations.</p>
</section>
        </span>
        
        <div className="home-blog">
          <BlogPostCard4
            label="How KYC Management Systems are Revolutionizing Financial Security"
            rootClassName="rootClassName1"
            pro_name="How KYC Management Systems are Revolutionizing Financial Security"
            image_src="/playground_assets/blog1.webp"

            description="KYC management systems are crucial for financial institutions to verify customer identities and reduce fraud risk. These systems enhance security, ensure regulatory compliance, and build trust with customers."
          ></BlogPostCard4>
          <div className="home-container11">
            <BlogPostCard4
              label="The Importance of Data Validation Tools in Financial Accuracy"
              pro_name="The Importance of Data Validation Tools in Financial Accuracy"
              image_src="/playground_assets/blog2.webp"
              rootClassName="rootClassName2"
              description="Data validation tools are essential for maintaining accurate financial data, reducing errors, and ensuring compliance with regulations. Accurate data leads to better decision-making and financial stability."
            ></BlogPostCard4>
              <BlogPostCard4
              label="Why Compliance Trackers Are Essential for Modern Banking"
              pro_name="Why Compliance Trackers Are Essential for Modern Banking:"
              image_src="/playground_assets/blog3.webp"
              rootClassName="rootClassName2"
              description="Compliance trackers help financial institutions stay updated with regulatory changes, reducing the risk of non-compliance. They streamline the management of regulations and protect institutions from potential penalties."
            ></BlogPostCard4>
          </div>
          <BlogPostCard4
                      label="Secure Document Vaults: Protecting Your Most Sensitive Information"
            image_src="/playground_assets/blog4.webp"
            rootClassName="rootClassName4"
            pro_name="Secure Document Vaults: Protecting Your Most Sensitive Information:"
description="Secure document vaults provide encrypted storage for sensitive financial documents, ensuring that only authorized personnel can access them. These vaults are critical for protecting data against cyber threats and unauthorized access."
></BlogPostCard4>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
      {/* <FloatingWhatsApp phoneNumber="917566643334" accountName="Infoflix" avatar={"/playground_assets/logo.jpg"}  statusMessage="Typically replies within 5 minutes" notification={true} notificationSound={true}  /> */}
    </div>
  )
}

export default Home
