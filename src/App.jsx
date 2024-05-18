import './App.css'

import React from 'react';
import Navbar from './Home/components/Navbar'
import Footer from './Home/components/Footer'
import HomeSection from './Home/components/HomeSection'

function App() {

  return (
    <>
      {/* <Navbar className="w-full" /> */}
      <span className='posi size-auto grid grid-cols-3 gap-10 m-10'>
        <HomeSection link={'/Blog'} title={"Bit al vento"} description={"un blog disordinato"}></HomeSection>
        <HomeSection link={'/Places'} title={"Visited Places"} description={"una mappa dove tenere traccia dei propri viaggi"}></HomeSection>
        <HomeSection link={'/Canvas'} title={"Draw on canvas"} description={"disegna!"}></HomeSection>

      </span>

      {/* <Footer className="w-full"></Footer> */}
    </>
  )
}

export default App
