import './index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import Blog from './pages/blogs/Blog';

function App() {
  return (
    <>
    <Header/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </>
  );
}

export default App;
