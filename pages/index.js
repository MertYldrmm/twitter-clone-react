import React from 'react'

import Layout from '../components/layout'
import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
  const size = useWindowSize()

  return (
    <Layout>
      <div>sidebar</div>
      <div>{JSON.stringify(size)}</div>
      {size.width > 1270 && <div>extra</div>}
    </Layout>
  )
}

export default HomePage
