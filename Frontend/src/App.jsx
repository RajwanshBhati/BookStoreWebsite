import { useState } from 'react'
import  { Toaster } from 'react-hot-toast';

import Home from './Home/Home'
import Course from './Components/Course'
import { Navigate, Route,Routes } from 'react-router-dom'

import Courses from './Courses/Courses'
import Signup from './Components/Signup.jsx'
import { useAuth } from './context/AuthProvider.jsx';
//import Contacts from './Components/Contact.jsx';
import About from './Components/About.jsx';

import Contacts from './Contact/Contacts.jsx';









function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup"
              />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

