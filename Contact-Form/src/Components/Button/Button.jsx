import React from 'react'
import "./Button.css"

const Button = ({className,icon,title,...rest}) => {
  return (
   <button {...rest}className={className === 'secondry-btn' ? 'secondry-btn' : 'primary-btn'}>
    {icon}
    {title}
    </button>
  )
}

export default Button;