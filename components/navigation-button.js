import React from 'react'
import cn from 'classnames'

import Button from './button'

import styles from './navigation-button.module.css'

function NavigationButton({ notify, selected, children, ...probs }) {
  return (
    <Button
      className={cn(styles.navButton, selected && styles.navButtonSelected)}
      {...probs}
    >
      {notify > 0 && <span className={styles.notify}>{notify}</span>}
      {children}
    </Button>
  )
}

export default NavigationButton
