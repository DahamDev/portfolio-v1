import React from 'react'
import "./hero.css"
import profileImage from "../../assets/profilePic.png"
import SkillImage from "../../assets/skillImages.png"

function Hero() {
  return (
    <div className="HeroCOntainer">
          <div className='Hero'>
        <div className="Left">
            <p>Hello!</p>
            <p className='animate-charcter'>Daham Navinda</p>
            <p>Software engineer</p>
            <p>As a back-end software engineer, I am an expert in developing distributed web services using cutting-edge technologies such as Java, Spring Boot, Docker, Kubernetes, Kafka, and MySQL. With 2 years of experience in the field, I have a strong track record of delivering high-quality, scalable solutions for a variety of clients.</p>
            <div className="HeroButtons ">
                <button>Contact me</button>
                <button>Download CV</button>
            </div>
        </div>
        <div className="Right">
            <img className='ProfileImage fade-in  ' alt='Daham Navinda' src={profileImage}></img>
        </div>
    </div>
    <div className='SkillImages'>
      
    </div>
    </div>
  )
}

export default Hero