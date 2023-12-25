import React from 'react'
import { motion, useCycle } from 'framer-motion'

const LOADER_VARIANTS = {
  animateOne: {
    x: [-20, 20],
    y: [0, -40],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  },
  animateTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    }
  }
}
function Loader() {
  const [animation, cycleAnimation] = useCycle("animateOne", "animateTwo")
  return (
    <>
      <motion.div variants={LOADER_VARIANTS} animate={animation} className='loader' />
      <div onClick={() => cycleAnimation()}>Cycle Animation</div>
    </>
  )

}

export default Loader
