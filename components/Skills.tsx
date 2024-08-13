'use client'

import { motion } from "framer-motion"
import Skill from "./Skill"

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 

        className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Skills
        </h3>

        <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for currency proficiency
        </h3>

        <div className="grid grid-cols-4 gap-5">
          <Skill imgLink="/assets/images/nextjs-logo.png" percent={90} />
          <Skill imgLink="/assets/images/reactjs-logo.png" percent={95} />
          <Skill imgLink="/assets/images/expressjs-logo.png" percent={100} />
          <Skill imgLink="/assets/images/nodejs-logo.png" percent={100} />
          <Skill imgLink="/assets/images/socket.png" percent={80} />
          <Skill imgLink="/assets/images/mongodb.jpg" percent={85} />
          <Skill imgLink="/assets/images/mysql.png" percent={95} />
          <Skill imgLink="/assets/images/sequelize.png" percent={75} />
          <Skill imgLink="/assets/images/tailwindcss-logo.png" percent={70} />
          <Skill imgLink="/assets/images/bootstrap.jpeg" percent={95} />
        </div>
    </motion.div>
  )
}

export default Skills