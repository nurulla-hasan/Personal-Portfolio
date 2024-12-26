import { motion } from "framer-motion";
import Fodies from '../assets/Fodies.png'
import Gravo from '../assets/Gravo.png'
import Book from '../assets/Book.png'
import Recipe from '../assets/Recipe.png'
import Hockys from '../assets/Hockys.png'
import Biker from '../assets/Biker.png'
import Tea from '../assets/Tea.png'
import Influence from '../assets/Influence.png'
import Cards from './Cards'


const Projects = () => {

  const projectJson = [
    {
      title: 'Foodies',
      desc: 'Foodies is a restaurant website where users can log in and post their food items, which are stored in MongoDB.',
      image: Fodies,
      live: "https://assignment-11-5ce6f.web.app/",
      github: "https://github.com/nurulla-hasan/Foodies-client"
    },
    {
      title: 'Gravo',
      desc: 'Welcome to Gravo, your ultimate destination for exploring the world of art! Dive into a realm where creativity knows no bounds.',
      image: Gravo,
      live: "https://assignment-9-73e6d.web.app/",
      github: "https://github.com/nurulla-hasan/Gravo-client"
    },
    {
      title: 'Book Vive',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Book,
      live: "https://glistening-blancmange-7faeb4.netlify.app/",
      github: "https://github.com/nurulla-hasan/Book-Vive"
    },
    {
      title: 'Recipe Calories',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Recipe,
      live: "https://verdant-cheesecake-3b551a.netlify.app/",
      github: "https://github.com/nurulla-hasan/Recipe-Calories"
    },
    // {
    //   title: 'PropertyPulse',
    //   desc: 'Welcome to PropertyPulse, your one-stop destination for finding the perfect property!',
    //   image: Supercar,
    //   live: "https://supercar123.netlify.app/",
    //   github: "https://github.com/rohitsingh93300/supercars"
    // },
    {
      title: 'Hockys',
      desc: 'Welcome to PropertyPulse, your one-stop destination for finding the perfect property!',
      image: Hockys,
      live: "https://nurulla-hasan.github.io/Hockys/",
      github: "https://github.com/nurulla-hasan/Hockys"
    },
    {
      title: 'Biker Zone',
      desc: 'Welcome to PropertyPulse, your one-stop destination for finding the perfect property!',
      image: Biker,
      live: "https://nurulla-hasan.github.io/biker-zone-website/",
      github: "https://github.com/nurulla-hasan/biker-zone-website"
    },
    {
      title: 'Tea House',
      desc: 'Welcome to PropertyPulse, your one-stop destination for finding the perfect property!',
      image: Tea,
      live: "https://nurulla-hasan.github.io/Tea-House/",
      github: "https://github.com/nurulla-hasan/Tea-House"
    },
    {
      title: 'Influencer-Gear',
      desc: 'Welcome to PropertyPulse, your one-stop destination for finding the perfect property!',
      image: Influence,
      live: "https://nurulla-hasan.github.io/Influencer-Gear/",
      github: "https://github.com/nurulla-hasan/Influencer-Gear"
    },
  ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        {/* Section Title */}
        <motion.h2
          className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 120 }}
        >
          My Projects
        </motion.h2>

        {/* Project Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((items, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.3), type: "spring", stiffness: 120 }}
              >
                <Cards item={items} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

  )
}

export default Projects
