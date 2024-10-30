import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Home.css'

const Home = () => {
  return (
    
        <div className='homepage'>
          <div className='home-h1'>
            <h1>Welcome to  eact Nike</h1>
          </div>
          <div className='home-p'>
            <p></p>
          </div>
          <div>
          <Link to='/product'><button class="btn2"><span class="spn2">Get Started</span></button></Link>
          </div>
        </div>
      )

}

export default Home
