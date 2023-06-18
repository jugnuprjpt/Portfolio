import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import MainHome from './Component/MainHome/MainHome';
import Project from './Component/Project/Project';

const Routing = () => {
  return (
    <>
        <Routes>  
            <Route exact path="/" element={<MainHome />} ></Route>
            <Route path='/about-us' element={<About /> } ></Route>
            <Route path='/project' element={<Project /> } ></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </>
  )
}

export default Routing;