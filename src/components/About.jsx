import React from 'react'
import { motion } from 'framer-motion'
import MernStack from '../assets/mernstack.png'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import ReduxLogo from '../assets/Redux.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Express from '../assets/Express.png'
import NextJs from '../assets/NextJs.png'

const About = () => {
    return (
        <div className='relative' id='about'>
            <div className='bg-gray-100 py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                    <div className='text-center'>
                        <motion.h2
                            className='text-base text-red-600 font-semibold tracking-wide uppercase'
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 1, type: "spring", stiffness: 120, delay: 0.2 }}
                        >
                            About Me
                        </motion.h2>
                        <motion.p
                            className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'
                            initial={{ opacity: 0, y: 20, rotateX: 20 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 120 }}
                        >
                            Hi, I'm Nurulla Hasan
                        </motion.p>
                        <motion.p
                            className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'
                            initial={{ opacity: 0, y: 20, x: -20 }}
                            animate={{ opacity: 1, y: 0, x: 0 }}
                            transition={{ duration: 1.2, delay: 0.6, type: "spring", stiffness: 120 }}
                        >
                            A Full-Stack Developer with expertise in web development, WordPress, SEO, and the MERN stack.
                        </motion.p>
                    </div>


                    <div className='mt-10'>
                        <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                            <div>
                                <motion.h3
                                    className='text-2xl font-semibold text-gray-900'
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 80 }}
                                >
                                    My Journey
                                </motion.h3>
                                <motion.p
                                    className='mt-4 text-lg text-gray-600'
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 80 }}
                                >
                                    I started my journey in web development with a passion for creating intuitive and scalable applications. With proficiency in the MERN stack (MongoDB, Express.js, React, and Node.js), I have built Projects such as a full-stack food ordering website, ajob portal, and even a LinkedIn clone. My projects demonstrate my ability to integrate powerful backend solutions with sleek, user-friendly frontend designs.
                                </motion.p>
                                <motion.img
                                    src={MernStack} alt=""
                                    className='p-2 rounded-lg w-52 mt-4'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 1, type: "spring", stiffness: 100 }}
                                />
                            </div>
                            <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                                <motion.h3
                                    className='text-2xl font-semibold text-red-600'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 80 }}
                                >
                                    Skills & Expertise
                                </motion.h3>
                                <div className='flex items-center justify-center flex-wrap gap-3'>
                                    {[
                                        { src: Html, title: "HTML" },
                                        { src: Css, title: "CSS" },
                                        { src: Javascript, title: "Javascript" },
                                        { src: ReactLogo, title: "React", className: 'rounded-full' },
                                        { src: ReduxLogo, title: "Redux" },
                                        { src: Tailwind, title: "Tailwind Css", className: 'rounded-full' },
                                        { src: Bootstrap, title: "Bootstrap" },
                                        { src: NodeLogo, title: "Node Js" },
                                        { src: Mongodb, title: "Mongodb" },
                                        { src: Express, title: "Express Js" },
                                        { src: NextJs, title: "Next Js" },
                                    ].map((item, index) => (
                                        <motion.div
                                            className='border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.8, delay: 1.4 + index * 0.2, type: "spring", stiffness: 100 }}
                                        >
                                            <img src={item.src} alt={item.title} className={`w-10 ${item.className}`} />
                                            <span className='font-semibold'>{item.title}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12'>
                        <motion.h3
                            className='text-2xl font-semibold text-gray-900'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 2.4, type: "spring", stiffness: 80 }}
                        >
                            More About Me
                        </motion.h3>
                        <motion.p
                            className='mt-4 text-lg text-gray-600'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 2.6, type: "spring", stiffness: 100 }}
                        >
                            Apart from coding, I am passionate about learning new technologies and keeping myself up-to-date with the latest trends in web development. I also run a YouTube channel where I teach Javascript, MERN Stack development, WordPress and digital Marketing, helping others dive deep into the world of programming and technology.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
