/* eslint-disable @next/next/no-img-element */
'use client'
// import Link from "next/link"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles"

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name's Muhamad Hilman",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000,
    })

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
            <BackgroundCircles />
            <img 
            src="/assets/images/roundedProfilePic.png" 
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            alt="" 
            />
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 tracking-[15px]">Fullstack Developer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className="pt-5">
                    <button className="heroButton" onClick={() => scrollToSection('about')}>About</button>
                    <button className="heroButton" onClick={() => scrollToSection('experience')}>Experience</button>
                    {/* <button className="heroButton" onClick={() => scrollToSection('skills')}>Skills</button> */}
                    {/* <button className="heroButton" onClick={() => scrollToSection('projects')}>Projects</button> */}
                    {/* <button className="heroButton" onClick={() => scrollToSection('contact')}>Contact</button> */}
                </div>
            </div>

        </div>
    )
}

export default Hero