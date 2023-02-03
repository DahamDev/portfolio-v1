import React from 'react'
import "./work.css"
import adlLogo from "../../assets/adlLogo.png"
import zeroBetaLogo from "../../assets/zerobetaLogo.png"
import WorkPlace from './workPlace/WorkPlace.jsx'
import leLogo from "../../assets/leLogo.png"

function work() {
  return (
    <div className='WorkWrapper'>
        <h1 className='WorkWaterMark'>EXPERIENCE</h1>
        <div className="WorkHeading">
            <h1>Experience</h1>
        </div>
        <div className="workBody ">
          <WorkPlace  logo={zeroBetaLogo}
           header={"Zerobeta, Sri Lanka | 2021 June to Precent"}
           experience={[
            "The project involved the development of an execution management system for routing orders to FIX market gateways with a latency of less than 1 millisecond. This was achieved using Java concurrency and in-memory caches to validate orders. Orders were received through inbound Kafka topics, with all messages encoded using the Simple Binary Encoding (SBE) standard to further reduce latency. Extensive unit testing was also carried out to ensure a high level of accuracy for the application, with a target of at least 98% accuracy being achieved. Overall, the goal of the project was to create a highly efficient and reliable system for routing orders in the financial market",
            "Writing secure Ethereum smart contracts following ERC20 and ERC721 standards using solidity",
            "Develop a generic framework to produce Kafka messages for load testing applications."]}
          summery={"Worked as a Back end Software engineer. Developed low latency financial trading applications using java/ springboot. "}
           />

          <WorkPlace  logo={adlLogo}
           header={"Axiata Digital Labs, Sri Lanka | 2020 June to 2021 June"}
           experience={[
            "Worked on developing distributed applications, microservices, and REST APIS to handle subscribers charging transactions of a major telco service provider using java and spring boot adhering to CMMI and agile practices. Ensured the security and reliability of applications and provide 24/7 support for technical teams",
            "Load balanced the message queue of major Kafka consumer applications which handle all the transaction data of more than 20 million subscribers within multiple consumer groups and migrate with zero downtime and a zero-revenue impact.",
            "Worked on modernizing legacy applications. Improved the code quality, fixed vulnerabilities, and fixed bugs of monolithic web applications and re-wrote them following microservice architecture and effective design patterns. Migrated old applications from on-premises servers to AWS EKS with the minimum revenue impact",
            "Migrated 10 million customer transaction data from the on-premises oracle database to the AWS RDS instance with new table structure.Conducted sessions with technical teams on Test Driven Development and adapted it to everyday development",
            "Provided production support to manage applications on-premises servers and Kubernetes cluster and participated in critical incident management events. Migrating ten million telco customer payment records from Oracle to MySQL Using the Pentaho Data Integration tool.",
            "Applied the latest DevOps technologies and managed CI/CD pipelines to ensure the fast delivery of applications."]}
          summery={"Worked as a Back end Software engineer/Devops Engineer. Developed efficient microservices, API for custoemr charging gateways. Modernized legacy applications to latest standards. Provide realitime support for applications and infrastructure. "}
          />
          <WorkPlace  logo={leLogo}
           header={"LE Robotics | 2019 July - 2020 June "}
           experience={[
            "Worked on developing distributed applications, microservices, and REST APIS to handle subscribers charging transactions of a major telco service provider using java and spring boot adhering to CMMI and agile practices. Ensured the security and reliability of applications and provide 24/7 support for technical teams",
            "Load balanced the message queue of major Kafka consumer applications which handle all the transaction data of more than 20 million subscribers within multiple consumer groups and migrate with zero downtime and a zero-revenue impact.",
            "Worked on modernizing legacy applications. Improved the code quality, fixed vulnerabilities, and fixed bugs of monolithic web applications and re-wrote them following microservice architecture and effective design patterns. Migrated old applications from on-premises servers to AWS EKS with the minimum revenue impact",
            "Migrated 10 million customer transaction data from the on-premises oracle database to the AWS RDS instance with new table structure.Conducted sessions with technical teams on Test Driven Development and adapted it to everyday development",
            "Provided production support to manage applications on-premises servers and Kubernetes cluster and participated in critical incident management events. Migrating ten million telco customer payment records from Oracle to MySQL Using the Pentaho Data Integration tool.",
            "Applied the latest DevOps technologies and managed CI/CD pipelines to ensure the fast delivery of applications."]}
          summery={"Worked on developing permananet magnet synchronous motor driver development and developing required tools to simulate designs"}
          />
       
        </div>
    </div>
  )
}

export default work