import React from 'react'
import '../styles/Hero.css'
import Heroimg from '../assets/Hero-image.png'
function Hero() {
  return (
    <div className='hero-wrapper'>
      <div className="hero">
        <div className="content-left">
          <div className="heading">Schedule Organizer</div>
          <div className="subheading">Your Personal Time Management Revolution with AI Integration!"</div>
          <div className="detail">The Schedule Organizer application can help users efficiently manage their time by integrating artificial intelligence (AI) to optimize personal schedules, creating a flexible plan that reflects a deep understanding of the user's needs and priorities.</div>
        </div>
        <div className="content-right">
          <img className="hero-image" src={Heroimg} alt="Hero image" />
        </div>
      </div>
    </div>
  )
}

export default Hero