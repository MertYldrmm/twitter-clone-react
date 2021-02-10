import React from 'react'
import cn from 'classnames'

import style from './stack.module.css'

function Stack({ gap = 10, column = false, children }) {
  return (
    <div
      className={cn([style.stack, column && style.column])}
      style={{ '--gap': `${gap}px` }}
    >
      {children}
    </div>
  )
}

export default Stack
