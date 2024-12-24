import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Drawings from './pages/Drawings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Drawing from './pages/Drawing';
import Biography from './pages/Biography';
import ErrorPage from './pages/404Page';
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import BiographyCard from './components/BiographyCard'
import Services from './components/Services'

const App = () => {
  return (
    <div className='bg-black' id='home'>
      <Navbar/>
      <Routes>
        {/* <Route exact path='/' element={
              <div>
                <Hero/>
                <Gallery/>
                <div className='p-2 mt-1'>
                <BiographyCard/>
                </div>
                <Services/>
              </div>
        } /> */}
                <Route exact path='/' element={<Home/>} />
        <Route exact path='/drawing' element={<Drawings/>} />
        <Route exact path='/drawing/:artId' element={<Drawing/>} />
        <Route exact path='/biography' element={<Biography/>} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
