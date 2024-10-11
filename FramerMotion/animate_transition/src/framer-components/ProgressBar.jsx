import React from 'react'
import { motion } from 'framer-motion'

const ProgressBar = () => {
    return (
        <div className='mt-12'>
            <div className='w-full h-2 rounded bg-white'>
                <motion.div
                    animate={{
                        width: "100%",
                        scale: 2,
                        rotate: 23
                    }}
                    transition={{
                        duration: 5,
                    }}
                    className='w-1/12 h-full bg-cyan-300'></motion.div>
            </div>
        </div>
    )
}

export default ProgressBar
