// File name: MainRouter.jsx
// Student name: Vu Huy Hoang Son
// Student ID: 301366093
// Date: 21 Sep 2024

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Service from './src/service'
import Project from './src/project'
import Layout from './components/Layout'
import Resume from './components/Resume'

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/service" element={<Service />} />
                        <Route exact path="/project" element={<Project />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/resume" element={<Resume />}/>// resume.jsx
                </Routes>
        </div>
        )
}
export default MainRouter
