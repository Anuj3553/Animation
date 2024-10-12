import { useState } from "react"
import { motion } from 'framer-motion'

const variant1 = {
    "show": {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    },
    "hide": {
        opacity: 0,
        transition: {
            when: "afterChildren",
        }
    }
}

const variant2 = {
    "show": {
        opacity: 1,
        y: 0
    },
    "hide": {
        opacity: 0,
        y: -10
    }
}

const EmojisAnimation = () => {
    const [showEmojis, setShowEmojis] = useState(false)
    return (
        <div>
            <motion.div
                animate={showEmojis ? "show" : "hide"}
                className="mt-10 flex flex-col space-y-6 justify-center items-center">
                <motion.div
                    variants={variant1}
                    className="flex items-center rounded-full p-4 justify-evenly w-64 text-3xl h-12 bg-white">
                    {/* some emojis */}
                    <motion.span
                        variants={variant2}
                        className="bg-transparent">👍</motion.span>
                    <motion.span
                        variants={variant2} className="bg-transparent">😂</motion.span>
                    <motion.span
                        variants={variant2} className="bg-transparent">❤️</motion.span>
                    <motion.span
                        variants={variant2} className="bg-transparent">👏</motion.span>
                    <motion.span
                        variants={variant2} className="bg-transparent">😭</motion.span>
                </motion.div>
                <button
                    onClick={() => setShowEmojis(!showEmojis)}
                    className="bg-sky-500 text-white font-bold py-2 px-8 rounded-lg cursor-pointer">{!showEmojis ? "Show emojis" : "Hide emojis"}</button>
            </motion.div>
        </div>
    )
}

export default EmojisAnimation
