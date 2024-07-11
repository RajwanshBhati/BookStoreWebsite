import { useState } from 'react'


import Home from './Home/Home'
import Course from './Components/Course'
import { Route,Routes } from 'react-router-dom'

import Courses from './Courses/Courses'
import Signup from './Components/Signup.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/*  <Home/>
    <Course/> */}

    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Courses />}/>
      <Route path="/signup" element={<Signup />}/>
     
     
      
    </Routes>
    </div>
    </>
  )
}

export default App
