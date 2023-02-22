import { faGithub } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import React from 'react'

import './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <a className={StyleSheet.footerLink} href="https://github.com/MBright90/memory-card-game">
        <FontAwesomeIcon icon={faGithub} />
        MBright90
      </a>
    </footer>
  )
}

export default Footer
