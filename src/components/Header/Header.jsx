import React, { Component } from 'react'
import Link from 'gatsby-link';
import SiteLogo from '../../assets/logos/weird-bk-64.png'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className='header-container'>
        <div className='header'>
          <Link to='/'>
            <div className='header__left'>
              <img
                className='header__site-logo'
                src={SiteLogo}
                alt='kevinkiklee site logo'
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
            <Link to='/rambles'>
              <p className='header__link'>
                Coding<br />
                Rambles
              </p>
            </Link>
            <Link to='/memes'>
              <p className='header__link'>
                Coding<br />
                Memes
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
      </header>
    )
  }
}

export default Header
