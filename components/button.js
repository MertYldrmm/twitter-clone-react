import React from 'react'

import style from './button.module.css'

function Button({ children, ...probs }) {
  return (
    <button type="button" className={style.button} {...probs}>
      {children}
    </button>
  )
}

export default Button
