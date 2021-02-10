import React from 'react'

import '../styles/app.css'

export default function MyApp({ Component, pageProbs }) {
  return <Component {...pageProbs} />
}
