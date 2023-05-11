import React from 'react'
import AboutImage from '../assets/photo.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
     <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}>

     </div>
    <div className="aboutBottom">

    <h3>About Us</h3>
    <p>The restaurant offers delicious dining options, with Italian authentic flavor. Waiters in the restaurant are friendly and respectful.

This place is no less than a typical example of how to build a restaurant.
The restaurant also offers different types of juices with meals. Such as lemon juice with mint mixed with crushed ice is an effective recipe for extinguishing the heat of the atmosphere.
</p>
    </div>
    </div>
  )
}

export default About