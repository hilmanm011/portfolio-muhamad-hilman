/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from "framer-motion"

type Props = {
    jobPosition: string
    company: string
    str_startEndWork: string
    arr_summary: string[]
    arr_iconlink: string[]
}

const ExperienceCard = ({ jobPosition, company, str_startEndWork, arr_summary, arr_iconlink }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto">
        {/* <motion.img 
            initial={{
                y: -100,
                opacity: 0
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://i.ibb.co/z8mVmJ7/fotor-2023-5-28-23-24-19.png" 
            alt="" 
        /> */}

        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">{jobPosition}</h4>
            <p className="font-bold text-2xl mt-1">{company}</p>
            <div className="flex space-x-2 my-2">

                {arr_iconlink && arr_iconlink.map((link, i)=>{
                    return (
                        <img 
                            key={i}
                            className="h-10 w-10 rounded-full"
                            src={link}
                            alt="icon" 
                        />
                    )
                })}
            </div>
            <p className="uppercase py-5 text-gray-300">{str_startEndWork}</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                {arr_summary && arr_summary.map((text, i)=> {
                    return (
                        <li key={i}>{text}</li>
                    )
                })}
            </ul>

        </div>
    </article>
  )
}

export default ExperienceCard