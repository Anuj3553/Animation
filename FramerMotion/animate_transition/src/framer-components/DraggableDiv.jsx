import { motion } from 'framer-motion'

const DraggableDiv = () => {
    return (
        <motion.div
            drag
            // drag="x"
            // drag="y"
            whileDrag={{ scale: 1.2, backgroundColor: 'deepskyblue' }}
            dragConstraints={{
                left: -100,
                right: 100,
                top: -100,
                bottom: 100
            }}
            dragElastic={0.2}
            dragSnapToOrigin={true}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragPropagation
            className="h-44 w-44 rounded-full bg-white mt-20 mx-auto flex items-center justify-center">
            <h2>Circle</h2>
        </motion.div>
    )
}

export default DraggableDiv
