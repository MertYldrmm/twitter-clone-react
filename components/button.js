import React from 'react'
import cn from 'classnames'

import style from './button.module.css'

function Button({ children, className, ...probs }) {
  return (
    <button type="button" className={cn(style.button, className)} {...probs}>
      {children}
    </button>
  )
}

export default Button
