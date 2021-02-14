import React from 'react'
import cn from 'classnames'

import style from './button.module.css'
import Button from './button'

function IconButton({ children, className, ...props }) {
  return (
    <Button className={cn(style.iconButton, className)} {...props}>
      {children}
    </Button>
  )
}

export default IconButton
