import { motion } from 'framer-motion'

const GestureButton = () => {
    return (
        <div className="flex justify-center mt-10">
            <motion.button
                whileHover={{
                    scale: 1.1,
                    backgroundColor: "#e1413a",
                    color: "#fff",
                    borderRadius: ["30%", "25%", "20%", "10%", "5%", "0%"]
                }}
                whileTap={{
                    scale: 0.7
                }}
                className="bg-white p-2 rounded-full w-44 text-gray-700 font-bold">Submit</motion.button>
        </div>
    )
}

export default GestureButton
