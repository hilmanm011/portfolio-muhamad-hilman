'use client'
import { roundedProfilePic, imgAbout } from '../public/assets/index';
import { motion } from "framer-motion"
type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    whileInView={{
      opacity: 1
    }}
    transition={{
      duration: 1.5
    }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About
      </h3>
        <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{
          once: true
        }}
        src="/assets/images/imgAbout.jpg"
        className="opacity-50 -mb-20 mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
          <h4 className="text-4xl font-semibold sm:text-5xl">Empowering Digital{" "}
          <span className="underline decoration-[#F7AB8A]">Transformation</span>{" "}
          with Robust and Scalable Solutions
          </h4>
          <p className="text-sm">
          As a proficient Full Stack Web Developer with approximately 3 years of hands-on experience, I excel in designing and implementing web applications from conception to deployment. My technical expertise spans across Node.js, React.js, Express.js, Next.js, MongoDB, and MySQL, enabling me to build robust and scalable solutions. I thrive in dynamic environments, adept at both frontend and backend development, and committed to delivering high-quality code and seamless user experiences. My comprehensive skill set and dedication to continuous learning make me a valuable asset in the fast-evolving tech landscape.
          </p>
        </div>
    </motion.div>
  )
}

export default About