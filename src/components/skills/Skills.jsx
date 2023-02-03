import React from 'react'
import "./skills.css"
import BlockChainImage from "../../assets/blockchain.png"

function Skills() {
  return (
    <div className='SkillsWrapper'>
        <h1 className='SkillsWaterMark'>SKILLS</h1>
        <div className="SkillsHeading">
            <h1>Skills</h1>
        </div>
        <div className="SKills">
            {getSkillComponent("Programing languages",
             [ ["Java",100],["Python",80],["Java Script",60]], 
             "/java.png")}

            {getSkillComponent("Web Frameworks",
             [["React JS",60], ["Springboot",70]],
              "/java.png")}

            {getSkillComponent("Data bases",
             [["MySQL",80], ["Oracle",70], ["MongoDB",30]],
              "/java.png")}

            {getSkillComponent("Containers",
             [["Docker",90], ["Kubernetes",70]], 
              "/java.png")}

            {getSkillComponent("Cloud",
             [["AWS",20]], 
             "/java.png")}

            {getSkillComponent("Messaging",
             [["Kafka",50]], 
             "/java.png")}

            {getSkillComponent("Block chain",
             [["Ethereum",50],["Smart contracts",60]], 
             "/java.png")}

        </div>
        <div className='OtherSkills css-selector'>
            <div className="OtherSkillsText">
                <p>In addition to my technical skills, I am also an enthusiast in the fields of financial services and blockchain technology. I am always seeking to learn more about these exciting areas and how they can be used to drive innovation and value for businesses and consumers alike.</p>
                <p>Whether you are a potential employer, client, or collaborator, I am always open to discussing new opportunities and ways to work together. Let's connect and see how we can drive success together</p>
            </div>
            <div className="OtherSkillsImage"><img src={BlockChainImage}></img></div>
        </div>
    </div>
  )
}

const getSkillComponent= (title, tools, image, skillLevel)=>{
    return (
        <div className="Skill">
        <div className="SkillDetail">
            <div className="SkillTitle"><div>{title} </div> </div>
            <div className="SKillTools">
                <div>
                    {tools.map(tool=>{
                       return(<div className='tool'>
                                <p key={tool}>{tool[0]}</p>
                                <div className='skillLevel'>
                                    <p>{tool[1]}%</p>
                                    <div style={{width:tool[1]+"%", backgroundColor:getSkillMeterColour(tool[1])}}></div>
                                </div>
                            </div>)
                        })}
                </div>
            </div>
        </div>
     </div>
    )
}


const getSkillMeterColour = (skillLevel) =>{
    if(skillLevel>80){
      return "#25007A";
    }
    else if(skillLevel>60){
        return "#004F7A";
    }
    else{
        return "#007A78"
    }
  }
  

export default Skills