import React, { useEffect, useLayoutEffect, useState } from 'react'

import StoreContext from '../store'

import '../styles/app.css'

export default function MyApp({ Component, pageProbs }) {
  const [theme, themeSet] = useState(null)

  useLayoutEffect(() => {
    const theme = localStorage.getItem('THEME') || 'light'
    themeSet(theme)
  }, [])

  const changeTheme = (theme) => {
    themeSet(theme)
    localStorage.setItem('THEME', theme)
  }

  useEffect(() => {
    const $html = document.querySelector('html')
    $html.classList.remove('light')
    $html.classList.remove('dim')
    $html.classList.remove('dark')
    $html.classList.add(theme)
  }, [theme])

  return (
    <StoreContext.Provider value={{ theme, changeTheme }}>
      <Component {...pageProbs} />
    </StoreContext.Provider>
  )
}
