import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Drawings from './pages/Drawings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Drawing from './pages/Drawing';
import Biography from './pages/Biography';
import ErrorPage from './pages/404Page';

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Routes>
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
