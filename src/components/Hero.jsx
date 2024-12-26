import React from 'react'
import { motion } from 'framer-motion'
import hero from '../assets/Hero.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>
          <motion.div
            className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className='lg:text-7xl text-4xl font-bold lg:leading-snug'
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 50 }}
            >
              Hi There, <br />I'm Nurulla <span className='text-red-500'>Hasan</span>
            </motion.h1>
            <motion.p
              className='md:text-2xl text-xl mb-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Web Developer & Designer
            </motion.p>
            <motion.p
              className='mb-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              I'm a passionate web developer with expertise in React, Next.js, and modern web technologies. I love creating beautiful and functional websites that solve real-world problems.
            </motion.p>
            <motion.button
              className='bg-black text-white px-3 py-2 w-max rounded-md'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="https://drive.google.com/file/d/10069VpfUdPNnqjo3ueYIAoield5qYDAEY2vYfO7RFFg/view?usp=sharing" download target='_blank' rel="noopener noreferrer">
                Download CV
              </a>
            </motion.button>
          </motion.div>

          <motion.div
            className='md:w-1/2 relative flex justify-center items-end'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={hero}
              alt=""
              className='lg:h-[70vh] h-96'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img
              src={reactLogo}
              alt=""
              className='absolute w-10 top-36 left-0 rounded-full md:hidden'
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.img
              src={reduxLogo}
              alt=""
              className='absolute w-10 top-0 right-5 md:hidden'
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            />
            <motion.img
              src={tailwind}
              alt=""
              className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.img
          src={facebook}
          alt=""
          className='w-14'
          whileHover={{ scale: 1.2 }}
        />
        <motion.img
          src={instagram}
          alt=""
          className='w-14'
          whileHover={{ scale: 1.2 }}
        />
        <motion.img
          src={twitter}
          alt=""
          className='w-14'
          whileHover={{ scale: 1.2 }}
        />
        <motion.img
          src={linkedin}
          alt=""
          className='w-14'
          whileHover={{ scale: 1.2 }}
        />
      </motion.div>
    </section>
  )
}

export default Hero
