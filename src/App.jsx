import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Drawings from './pages/Drawings';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import Drawing from './pages/Drawing';
import Biography from './pages/Biography';

const App = () => {
  return (
    <div className='bg-black'>
      <Navbar2 />
      <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/drawing' element={<Drawings/>} />
        <Route path='/drawing/:artId' element={<Drawing/>} />
        <Route path='/biography' element={<Biography/>} />
      </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App;
