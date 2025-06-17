import React from 'react';
import './Home.css';
import pic1 from '../../assets/logo-no-background.png';
import HomeFront from '../../components/homeFront/HomeFront';
import About from '../../components/about/About';

const Home = () => {
  return (
    <div className='home-wrapper'>
        <div className="header">
            <header>
              <div className="header-img">
                <img src={pic1} alt="logo" />
              </div>
              <ul className='header-unordered-list'>
                  <li className='nav-list-item'><a href='#'>Home</a></li>
                  <li className='nav-list-item'><a href='#'>About</a></li>
                  <li className='nav-list-item'><a href='#'>Services</a></li>
                  <li className='nav-list-item'><a href='#'>Portfolio</a></li>
                  <li className='nav-list-item'><a href='#'>Contact</a></li>
              </ul>
            </header>
        </div>
        <div className='home-front'>
          <HomeFront />
        </div>
        <div className="about-front">
          <About />
        </div>
    </div>
  )
}

export default Home
