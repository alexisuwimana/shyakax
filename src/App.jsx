import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services  from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Our Services' title='What we do(offer)'/>
        <Services/>
        <About/>
        <Testimonials/>
      </div>
      
    </div>
  )
}
export default App