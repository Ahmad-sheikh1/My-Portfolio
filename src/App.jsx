import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import About from './components/About'
import { Routes, Route } from 'react-router-dom';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {


  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* routes Declare */}
      <Routes>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
