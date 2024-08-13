'use client'
import { motion } from "framer-motion"

type Props = {}

const Projects = (props: Props) => {
    const projects = [
        {
            image: "/assets/images/project1.png",
            title: "3D Interactive Website",
            description: "Developed a cutting-edge 3D responsive website using Next.js, TailwindCSS, and Spline design to create an immersive user experience. This project showcases innovative design and advanced web development techniques, featuring interactive 3D models and animations that adapt seamlessly to various screen sizes. The combination of Next.js for server-side rendering, TailwindCSS for rapid UI development, and Spline for 3D design results in a visually stunning and highly responsive portfolio website. This project demonstrates my ability to integrate modern web technologies to deliver dynamic and engaging user interfaces.",
            linkProject: "https://3d-website-nextjs.vercel.app/"
        }
    ]
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>
            {/*  z-20 mt-20 */}
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory mb-10">
                {projects.map((project, i)=>(
                    <div key={i} className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        
                        <div className="relative group">
                        <a href={project.linkProject} target="_blank" rel="noopener noreferrer">
                            <motion.img 
                            initial={{ y: -300, opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={project.image}
                            alt={project.title}
                            className="w-[300px] transition-opacity duration-300 group-hover:opacity-80"
                            />
                        </a>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-3 bg-gray-800 text-white text-sm p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view directly
                        </div>
                        </div>

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-4xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">
                                    Project: {i+1} of {projects.length}
                                </span>: <a href={project.linkProject} className="link">{project.title}</a>
                            </h4>
                            <p className="text-lg items-center md:text-left">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />

        </div>
    )
}

export default Projects