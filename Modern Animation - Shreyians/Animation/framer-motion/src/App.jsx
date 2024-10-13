import { motion } from 'framer-motion'
import ReactToast from './components/React-Toast'

const App = () => {
  return (
    <div>
      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 400, scale: 0.5, borderRadius: '50%' }}
        transition={{ delay: 1, duration: 5, type: 'spring', stiffness: 260, repeat: Infinity, repeatType: 'loop' }}
        drag
        dragConstraints={{ left: 0, right: 400, top: 0, bottom: 400 }}
        dragSnapToOrigin={true}
        whileHover={{ scale: 0.2, backgroundColor: 'royalblue' }}
        id="box"
      ></motion.div>

      <ReactToast/>
    </div>
  )
}

export default App
