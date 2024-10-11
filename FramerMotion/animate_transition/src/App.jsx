import './App.css'
import KeyFrames from './framer-components/KeyFrames'
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
        <KeyFrames />
      </div>
    </>
  )
}

export default App
