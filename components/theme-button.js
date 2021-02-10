import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './theme-button.module.css'

function ThemeButton({ className, children, big = false, ...probs }) {
  return (
    <Button
      className={cn(styles.button, big && styles.bigButton, className)}
      {...probs}
    >
      {children}
    </Button>
  )
}

export default ThemeButton
