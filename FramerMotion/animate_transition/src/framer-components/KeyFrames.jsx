import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const KeyFrames = () => {
    const [removeInnerCircle, setRemoveInnerCircle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setRemoveInnerCircle(true)
        }, 7000);
    })

    return (
        <div>
            <div className="bg-white h-32 w-32 rounded-full mx-auto mt-10">
                <AnimatePresence>
                    {removeInnerCircle === false && (
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ 
                                opacity: 1,
                                y: 40,
                                scale: [null, 0.2, 0.5, 1.1, 1],
                                backgroundColor: [null, "#11111", "#12ab12", "#000"],
                                borderRadius: [null, "40%", "10%", "100%"]
                             }}
                            transition={{ duration: 5 }}
                            exit={{ opacity: 0, y: 200 }}
                            className="bg-black h-24 w-24 rounded-full">
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default KeyFrames
