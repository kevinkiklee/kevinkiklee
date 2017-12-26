import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <a
          href='https://github.com/kevinkiklee'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h6>GitHub</h6>
        </a>
        |
        <a
          href='https://linkedin.com/in/kevinkiklee'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h6>LinkedIn</h6>
        </a>
        |
        <a
          href='https://twitter.com/kevinkiklee'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h6>Twitter</h6>
        </a>
        |
        <a href='mailto:kevin.kik.lee@gmail.com'>
          <h6>Email</h6>
        </a>
      </footer>
    )
  }
}

export default Footer
