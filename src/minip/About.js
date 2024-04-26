import React from 'react'
import Footer1 from './Footer1'
import ProfilePic1 from './images1/srivatsa.jpg'
import ProfilePic2 from './images1/pranavi.jpg'
import ProfilePic3 from './images1/tanvi.jpg'
import Icon1 from './images1/github.png'
import Icon2 from './images1/linkedin.png'
import Icon3 from './images1/instagram.png'

export default function About() {
  return (
    <div>
        <Footer1 isVisible={false} />
        <h2>"Streamline your academic journey with our all-in-one platform designed for students. Say goodbye to the hassle of searching through multiple channels for previous year papers, YouTube playlists, and peer support. Our platform consolidates everything you need in one convenient place. Access a repository of previous year papers, curated YouTube playlists, and a chat feature to connect with peers for quick doubt resolution. Simplify your study experience and maximize your productivity with our comprehensive solution. Welcome to a smarter way to learn, collaborate, and excel academically."</h2>
        <br></br>
        <br></br>
        <h3>Developers info :</h3>
    <div className="card">
    <img  className="card-img" src={ProfilePic1} alt="img" title="damn"></img>
    <h2 className='card-title'>Srivatsa</h2>
    <p>22BCE3825</p>
    <p><a href='mailto:srivatsa.reddy2022@vitstudent.ac.in'>srivatsa.reddy2022@vitstudent.ac.in</a></p>
    <p>9573212063</p>
    <div className='iconpage'>
          <a href="https://www.linkedin.com/in/srivatsa-reddy-bokkasam-33a1542b9/" target="_blank" rel="noopener noreferrer"><img src={Icon1} alt="GitHub" /></a>
          <a href="https://github.com/srivatsa-bot" target="_blank" rel="noopener noreferrer"><img src={Icon2} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/b.srivatsareddy/" target="_blank" rel="noopener noreferrer"><img src={Icon3} alt="Instagram" /></a>
    </div>
    
    </div>
    <div className="card">
    <img  className="card-img" src={ProfilePic2} alt="img" title="damn"></img>
    <h2 className='card-title'>Pranavi</h2>
    <p>22BCE3810</p>
    <p><a href='mailto:allareddypranavi@gmail.com'>allareddypranavi@gmail.com</a></p>
    <p>9908875522</p>
    <div className='iconpage'>
          <a href="https://github.com/pranavi2610" target="_blank" rel="noopener noreferrer"><img src={Icon1} alt="GitHub" /></a>
          <a href="https://github.com/pranavi2610" target="_blank" rel="noopener noreferrer"><img src={Icon2} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/pranvi__reddy?igsh=bW12d3B0a250M3h3" target="_blank" rel="noopener noreferrer"><img src={Icon3} alt="Instagram" /></a>
    </div>
    </div>
    <div className="card">
    <img  className="card-img" src={ProfilePic3} alt="img" title="damn"></img>
    <h2 className='card-title'>Tanvi</h2>
    <p>22BCE0435</p>
    <p><a href='mailto:tanvi.gudiseva@gmail.com'>tanvi.gudiseva@gmail.com</a></p>
    <p>8790351423</p>
    <div className='iconpage'>
          <a href="https://github.com/tanvi1809" target="_blank" rel="noopener noreferrer"><img src={Icon1} alt="GitHub" /></a>
          <a href="https://github.com/srivatsa-bot" target="_blank" rel="noopener noreferrer"><img src={Icon2} alt="LinkedIn" /></a>
          <a href="https://www.instagram.com/tanvigudiseva?igsh=M2wyaDN4bWh6OHRw" target="_blank" rel="noopener noreferrer"><img src={Icon3} alt="Instagram" /></a>
    </div>
    
    
    </div>
      
    </div>
  )
}
