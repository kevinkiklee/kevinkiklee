import React, { Component } from 'react'
import Link from 'gatsby-link';
import SiteLogo from '../../assets/logos/weird-bk-64.png'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className='header-container'>
        <div className='header'>
          <Link to='/' className='header__site'>
            <img
              className='header__site-logo'
              src={SiteLogo}
              alt='kevinkiklee site logo'
            />
            <h1 className='header__site-title'>
              i have no idea<br />
              what i am doing
            </h1>
          </Link>
          <div className='header__links'>
            <Link to='/algods' className='header__link'>
              <p className='header__link-text'>
                Algorithms &<br />
                Data Structures
              </p>
            </Link>
            <Link to='/rambles' className='header__link'>
              <p className='header__link-text'>
                Coding<br />
                Rambles
              </p>
            </Link>
            <Link to='/memes' className='header__link'>
              <p className='header__link-text'>
                Coding<br />
                Memes
              </p>
            </Link>
            <Link to='/about-kevin' className='header__link'>
              <p className='header__link-text'>
                About<br />
                Kevin
              </p>
            </Link>
          </div>
          <div className='header__links--mobile'>
            <Link to='/algods' className='header__link'>
              <p className='header__link-text'>
                AlgoDS
              </p>
            </Link>
            <Link to='/rambles' className='header__link'>
              <p className='header__link-text'>
                Rambles
              </p>
            </Link>
            <Link to='/memes' className='header__link'>
              <p className='header__link-text'>
                Memes
              </p>
            </Link>
            <Link to='/about-kevin' className='header__link'>
              <p className='header__link-text'>
                About
              </p>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
