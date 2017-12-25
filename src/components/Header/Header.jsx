import React, { Component } from 'react'
import SiteLogo from '../../assets/logos/weird-bk-64.png'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <div className='header'>
          <div className='header__left'>
            <img
              className='header__site-logo'
              src={SiteLogo}
              alt='Kevin K. Lee site logo'
            />
            <p className='header__site-title'>
              i have no idea<br />
              what i am doing
            </p>
          </div>
          <div className='header__right'>
            <p className='header__link'>
              Data Structures<br />
              & Algorithms
            </p>
            <p className='header__link'>
              Coding<br />
              Thoughts
            </p>
            <p className='header__link'>
              Random<br />
              Ramblings
            </p>
            <p className='header__link'>
              About<br />
              Kevin
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
