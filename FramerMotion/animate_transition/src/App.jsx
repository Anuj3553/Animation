import './App.css'
import DynamicVariants from './framer-components/DynamicVariants'
// import EmojisAnimation from './framer-components/Variants-EmojisAnimation'
// import DraggableDiv from './framer-components/DraggableDiv'
// import GestureButton from './framer-components/GestureButton'
// import KeyFrames from './framer-components/KeyFrames'
// import ExitAndEnterAnimation from './framer-components/ExitAndEnterAnimation'
// import ProgressBar from './framer-components/ProgressBar'

const App = () => {
  return (
    <>
      <div className='p-10 flex h-screen flex-col bg-black'>
        <h1 className='text-center text-white text-4xl font-semibold'>
          Framer motion components
        </h1>
        {/* <ProgressBar /> */}
        {/* <ExitAndEnterAnimation /> */}
        {/* <KeyFrames /> */}
        {/* <GestureButton /> */}
        {/* <DraggableDiv /> */}
        {/* <EmojisAnimation /> */}
        <DynamicVariants />
      </div>
    </>
  )
}

export default App
