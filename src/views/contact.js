import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { useState } from 'react'
import Footer from '../components/footer'
import './contact.css'
import Nav from '../components/nav'

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject,setSubject]=useState("");
  const [message, setMessage] = useState("");
  const [status,setStatus]=useState(false);

  const handleSubmit =async (e) => {
    e.preventDefault();
    const res=await fetch("https://www.salmitra.com/api/v1/contact_us/",{
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body:  new URLSearchParams({
        'Email': email,
        'Name': name,
        'subject':subject,
        'msg':message
          }),
    })
    const response= await res.json();
    if(res.status===200){
    
     if(response.status===200){
      console.log("contact form submitted successfully :)");
      setEmail("");
      setName("");
      setSubject("");
      setMessage("");
     setStatus(true);
    }
    } 
    else if(response.status===400){
    console.log("something went wrong!!")
    }
    else{
      console.log("something went wrong!!")
    }

    // Handle form submission
  };


  return (
    <div className="contact-container">
      <Helmet>
        <title>contact - Sal Mitra</title>
        <meta property="og:title" content="contact - Sal Mitra" />
      </Helmet>
    <Nav contact={true}/>
      <div className="contact-hero">
      </div>
      <div className='bg-text'> <h1 className="contact-text">Be the Part of change contact Us</h1></div>
      <div className="contact-container03">
        <div className="contact-container04">
          <h1 >Contact Info</h1>
          <div className="contact-container05">
            <svg viewBox="0 0 1024 1024" className="contact-icon12">
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 516c-108.248 0-196-87.752-196-196s87.752-196 196-196 196 87.752 196 196-87.752 196-196 196zM388 320c0-68.483 55.517-124 124-124s124 55.517 124 124c0 68.483-55.517 124-124 124s-124-55.517-124-124z"></path>
            </svg>
            <h1 className="contact-text2">Address</h1>
          </div>
          <span className="contact-text3">
            SAL MITRA LLP LG03 MANSAROVAR ARCADE TEGORE NAGAR NEAR SOS BALGRAM
            BHOPAL 462022.
          </span>
          <div className="contact-container06">
            <svg viewBox="0 0 1024 1024" className="contact-icon14">
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <h1 className="contact-text4">Phone</h1>
          </div>
          <a href="tel:+911234567890" className="contact-text5">
            +91 1234567890
          </a>
          <div className="contact-container07">
            <svg viewBox="0 0 1024 1024" className="contact-icon16">
              <path d="M853.342 0h-682.656c-93.874 0-170.686 76.81-170.686 170.69v682.622c0 93.938 76.812 170.688 170.686 170.688h682.656c93.876 0 170.658-76.75 170.658-170.69v-682.62c0-93.88-76.782-170.69-170.658-170.69zM182.628 886.626l-77.256-77.254 256-256 29.256 29.254-208 304zM153.372 198.628l29.256-29.256 329.372 265.374 329.374-265.374 29.254 29.256-358.628 422.626-358.628-422.626zM841.374 886.626l-208-304 29.254-29.254 256 256-77.254 77.254z"></path>
            </svg>
            <h1 className="contact-text6">Email</h1>
          </div>
          <a
            href="mailto:salmitra850@gmail.com?subject=Hey let's talk"
            className="contact-text7"
          >
            Salmitra850@gmail.com
          </a>
        </div>
        <div className="contact-container08">
          <div className="contact-container09">
            <h1 className="contact-text8">Send Message</h1>
            <div className="contact-container10">
              <input
                type="text"
                required
                autoFocus
                placeholder="Name"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                autoComplete="name"
                className="contact-textinput input"
              />
              <input
                type="email"
                name="email"
                // pattern="+@gmail.com"
                required
                autoFocus
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                maxLength="30"
                minLength="5"
                placeholder="Email"
                autoComplete="off"
                className="contact-input input"
              />
              <input
                type="text"
                autoFocus
                placeholder="Subject"
                value={subject}
                onChange={(e)=>{setSubject(e.target.value)}}
                autoComplete="off"
                className="contact-textinput1 input"
              />
              <textarea
                cols="100"
                name="msg"
                rows="20"
                value={message}
                onChange={(e)=>{setMessage(e.target.value)}}
                autoFocus
                placeholder="Message"
                className="contact-textarea textarea"
              ></textarea>
              <button 
                name="submit"
                type="submit"
                className="btn btn-dark"
                onClick={(e)=>{handleSubmit(e)}}
              >
                Send
              </button>
              {status?<div style={{'color':"green",'font-size':'25px','marginTop':'20px'}}>Thanks For contacting US! Our team will contact you soon :)</div>:""}
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Contact
