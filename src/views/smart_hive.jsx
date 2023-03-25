import './smart_hive.css'
import React from 'react'
import Hero from '../components/hero'
import Hero1 from '../components/hero1'
import Banner from '../components/banner'
import Hero2 from '../components/hero2'
import Hero3 from '../components/hero3'
import Stats from '../components/stats'
import Component from '../components/component'
import Nav from '../components/nav'
import Footer from '../components/footer'
const Smart_hive = (props) => {
  return (
    <div className='container'>
       <Nav smart_hive={true}></Nav>
      <Hero></Hero>
      <Hero1></Hero1>
      <Banner></Banner>
      <Hero2></Hero2>
      <Hero3></Hero3>
      <Stats></Stats>
      <Footer/>
    </div>
  )
}

export default Smart_hive