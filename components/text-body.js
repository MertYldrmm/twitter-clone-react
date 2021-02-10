import React from 'react'
import cn from 'classnames'

import styles from './text-body.module.css'

function TextBody({ bold = false, className, children, ...probs }) {
  return (
    <span
      className={cn([styles.body, bold && styles.bold, className])}
      {...probs}
    >
      {children}
    </span>
  )
}

export default TextBody
