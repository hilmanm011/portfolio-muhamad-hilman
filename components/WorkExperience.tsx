'use client'

import { motion } from "framer-motion"
import ExperienceCard from "./ExperienceCard"

type Props = {}

const WorkExperience = (props: Props) => {

  const myWorkData = [
    {
      jobPosition: "Node Js Developer",
      company: "PT Egogohub Indonesia",
      start: "Oktober 2021",
      end: "September 2023",
      summary: [
        "Write clean, scalable, and efficient code using Node.js.",
        "Design and implement high-performance applications.",
        "Develop and maintain RESTful APIs.",
        "Ensure smooth and reliable real-time data processing.",
        "Identify and fix bugs and performance bottlenecks.",
        "Work closely with cross-functional teams.",
        "Continuously improve skills and knowledge related to Node.js and web development."
      ],
      icon: [
        "/assets/images/mongodb.jpg",
        "/assets/images/mysql.png",
        "/assets/images/bootstrap.jpeg",
        "/assets/images/expressjs-logo.png",
        "/assets/images/nodejs-logo.png",
      ]
    },
    {
      jobPosition: "Backend Developer Developer",
      company: "PT Digital Seucom Indonesia",
      start: "Oktober 2023",
      end: "present",
      summary: [
        "Write clean, scalable, and efficient code for server-side logic.",
        "Design and implement high-performance applications.",
        "Develop and maintain RESTful APIs.",
        "Work closely with front-end developers to integrate user-facing elements with server-side logic.",
        "Collaborate with cross-functional teams including designers, developers, and project managers.",
        "Identify and fix bugs and monitor and optimize application performance.",
        "Implement real-time communication features using technologies like Socket.io.",
        "Continuously improve skills and knowledge related to Node.js and web development."
      ],
      icon: [
        "/assets/images/mysql.png",
        "/assets/images/expressjs-logo.png",
        "/assets/images/nodejs-logo.png",
        "/assets/images/sequelize.png",
        "/assets/images/socket.png",
      ]
    },
  ]

  return (
    
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Experience
        </h3> */}

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            {myWorkData.map((work, i) =>{
              return (
                <ExperienceCard 
                  key={i}
                  jobPosition={work.jobPosition}
                  company={work.company}
                  str_startEndWork={`${work.start} - ${work.end}`}
                  arr_summary={work.summary}
                  arr_iconlink={work.icon}
                />
              )
            })}
        </div>
    </motion.div>
  )
}

export default WorkExperience