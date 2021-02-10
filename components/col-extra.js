import React from 'react'
import cn from 'classnames'

import style from './col-extra.module.css'

function Extra({ children }) {
  return <div className={cn([style.extra])}>{children}</div>
}

export default Extra
