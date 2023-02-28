import { appContext } from '@app'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import style from './HelpLink.module.scss'

const HelpLink = () => {
  const { isHelpActive, setIsHelpActive } = useContext(appContext)

  const handleLinkClick = () => {
    isHelpActive ? setIsHelpActive(false) : setIsHelpActive(true)
  }

  const handleLinkKeyDown = (e) => {
    if (e.code === 'Enter') handleLinkClick()
  }

  return (
    <div
      className={`${style.helpLink} ${isHelpActive ? style.active : null}`}
      onClick={handleLinkClick}
      onKeyDown={handleLinkKeyDown}
    >
      <Link to={isHelpActive ? '/' : '/help'}>
        <FontAwesomeIcon icon={faCircleInfo} />
      </Link>
    </div>
  )
}

export default HelpLink
