import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';
const Home = () => {

  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { delay: 1.3, duration: 0.5 }
    },
    exit: {
      x: "-100vw",
      transition: { duration: 0.5 }
    }
  }

  const buttonVariant = {
    hidden: {
      scale: 0.9
    },
    visible: {
      scale: 1,
    },
    hover: {
      scale: 1.1,

      boxShadow: "0px 0px 8px rgb(255,255,255)",
      textShadow: "0px 0px 5px rgb(255,255,255)",
      transition: { duration: 0.4, yoyo: Infinity },
    }
  }
  return (
    <motion.div className="home container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariant}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div >
  )
}

export default Home;