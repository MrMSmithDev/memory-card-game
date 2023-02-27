import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import style from './HelpLink.module.scss'

const HelpLink = () => {
  const [isActive, setIsActive] = useState(false)

  const handleLinkClick = () => {
    isActive ? setIsActive(false) : setIsActive(true)
  }

  const handleLinkKeyDown = (e) => {
    if (e.code === 'Enter') handleLinkClick()
  }

  return (
    <div
      className={`${style.helpLink} ${isActive ? style.active : null}`}
      onClick={handleLinkClick}
      onKeyDown={handleLinkKeyDown}
    >
      <Link to={isActive ? '/' : '/help'}>
        <FontAwesomeIcon icon={faCircleInfo} />
      </Link>
    </div>
  )
}

export default HelpLink
