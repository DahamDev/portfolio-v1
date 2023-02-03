import React, { useState } from 'react'
import "./workPlace.css"

function WorkPlace({logo, header, experience, summery}) {
    const[expand, setExpand] =useState(true);

    const clickButton =(state)=>{
        setExpand(!expand)
    }

  return (
    <div className="workContainer">
    <div className='workHeader'>
      <img src={logo}></img>
      <h1>{header}</h1>
    </div>
    <div className='workDetails'>
    {expand?
        <div className='experienceSummery'>
            <p>{summery}</p>
        </div>
    :
        <div className="workEntries">
        <ul>
        {experience.map(ex => {
            return <li>{ex}</li>
        })}
        </ul>
    </div>
    }
    </div>
    <p className='expandExperience' onClick={clickButton}>{expand?"read more":"read less"}</p>
  </div>
  )
}

export default WorkPlace