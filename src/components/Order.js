import React, { useEffect } from 'react';
import { motion } from 'framer-motion';


const BASE_CONTAINER_VARIANT = {
  hidden: {
    x: "100vw"
  },
  visible: {
    x: 0,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 80,
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }
}

const CHILD_VARIANT = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5 }
  }

}
const Order = ({ pizza, setOpenModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setOpenModal(true)
    }, 4000)
  }, [setOpenModal])
  return (
    <motion.div className="container order"
      variants={BASE_CONTAINER_VARIANT}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 >Thank you for your order :)</motion.h2>
      <motion.p variants={CHILD_VARIANT}>You ordered a {pizza.base} pizza with:</motion.p>
      {pizza.toppings.map(topping => <motion.div variants={CHILD_VARIANT} key={topping}>{topping}</motion.div>)}
    </motion.div>
  )
}

export default Order;