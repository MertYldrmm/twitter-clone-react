import React from 'react'
import cn from 'classnames'

import style from './col-main.module.css'

function Main({ children }) {
  return <div className={cn([style.main])}>{children}</div>
}

export default Main
