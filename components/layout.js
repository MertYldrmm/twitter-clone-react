import React from 'react'
import cn from 'classnames'

import style from './layout.module.css'

function Layout({ children }) {
  return <div className={cn([style.layout])}>{children}</div>
}

export default Layout
