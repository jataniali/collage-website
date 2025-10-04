import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlaystate}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img}alt="" className='about-img' />
        <img src={play_icon}alt="" className='play-icon' onClick={()=>{
          setPlaystate(true)
        }} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive 
        education program.our cutting-edge curriculum is designed to empower student
        with the knowledge, skills, and values necessary to succeed in an ever-evolving world.
        </p>
        <p>Embark on a transformative educational journey with our university's comprehensive 
        education program.our cutting-edge curriculum is designed to empower student
        with the knowledge, skills, and values necessary to succeed in an ever-evolving world.
        </p>
        <p>Embark on a transformative educational journey with our university's comprehensive 
        education program.our cutting-edge curriculum is designed to empower student
        with the knowledge, skills, and values necessary to succeed in an ever-evolving world.
        </p>
      </div>
    </div>
  )
}

export default About
