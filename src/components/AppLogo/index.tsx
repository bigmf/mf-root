import React from 'react'
import classNames from 'classnames'
import './style.css'

const AppLogo: React.FC<classAndStyleProps> = (props) => {
  return (
    <div
      className={classNames('app-logo', props.className)}
      style={props.style}
    />
  )
}

export default AppLogo
