import React, { Component } from 'react'
import Link from 'gatsby-link';
import SiteLogo from '../../assets/logos/weird-bk-64.png'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <div className='header'>
          <Link to='/'>
            <div className='header__left'>
              <img
                className='header__site-logo'
                src={SiteLogo}
                alt='Kevin K. Lee site logo'
              />
              <h1 className='header__site-title'>
                i have no idea<br />
                what i am doing
              </h1>
            </div>
          </Link>
          <div className='header__right'>
            <Link to='/algods'>
              <p className='header__link'>
                Algorithms &<br />
                Data Structures
              </p>
            </Link>
            <Link to='/code'>
              <p className='header__link'>
                Coding<br />
                Thoughts
              </p>
            </Link>
            <Link to='/random'>
              <p className='header__link'>
                Random<br />
                Ramblings
              </p>
            </Link>
            <Link to='/about'>
              <p className='header__link'>
                About<br />
                Kevin
              </p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
