'use client'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import DownloadSection from './DownloadSection'
type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20'>
        {/* Sosial Icons */}
        <motion.div 
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate = {{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center'
            >
                {/* <SocialIcon 
                url='https://www.linkedin.com/in/muhamad-hilman-b5a22b17b/' 
                fgColor='gray'
                bgColor='transparent'
                /> */}
            </motion.div>
                
        
        <motion.div
            initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
            }}
            animate = {{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-row items-center text-gray-300 cursor-pointer' >
            {/* <SocialIcon 
                className="cursor-pointer" 
                network='email'
                fgColor='gray'
                bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Resume</p> */}
            <DownloadSection />
        </motion.div>
    </header>
  )
}

export default Header