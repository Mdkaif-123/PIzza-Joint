import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import React from 'react'


const MODAL_VARIANT = {
  hidden: {
    y: -1000,
    transition: {
      duration: 0.5,
    }
  },
  visible: {
    y: 200,
    originX: 0,
    transition: {
      duration: 0.5,
    }
  }
}

function Modal({ openModal, setOpenModal }) {
  return (
    <>
      {
        openModal && (
          <motion.div className="backdrop"
          >
            <motion.div className="modal"
              variants={MODAL_VARIANT}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >

              <h4>Do you want to make another?</h4>
              <Link to="/">
                <motion.button
                  className="border-btn"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 8px rgb(0,0,0.8)",
                    textShadow: "0px 0px 5px rgb(255,255,255)"
                  }}
                >Go to Home</motion.button></Link>

            </motion.div>
          </motion.div >
        )
      }
    </>

  )
}

export default Modal
