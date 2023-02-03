import React from 'react'
import "./home.css"
import { Hero, Skills, Work, Projects } from '../../components'

function Home() {
  return (
    <div className='HomeContainer'>
        <Hero></Hero>
        <Skills></Skills>
        <Projects></Projects>
        <Work></Work>
        
    </div>
  )
}


export default Home