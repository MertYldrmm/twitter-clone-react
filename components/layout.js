import React from 'react'
import cn from 'classnames'

import style from './layout.module.css'
import Sidebar from '../components/col-sidebar'
import Main from '../components/col-main'
import Extra from '../components/col-extra'
import useWindowSize from '../hooks/useWindowSize'

import CONST from '../constants'

function Layout({ children }) {
  const size = useWindowSize()
  return (
    <div className={cn([style.layout])}>
      <Sidebar flat={size.width < CONST.DEKSTOP_SIZE}>sidebar</Sidebar>
      <Main>{children}</Main>
      {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
    </div>
  )
}

export default Layout
