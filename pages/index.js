import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Mert Yıldırım"
        slug="mertyldrm"
        datetime={new Date('2021-01-14')}
        text={`express,mongodb vs. :))
        
react,nextjs,postcss :/`}
      />

      <Tweet
        name="Mert Yıldırım"
        slug="mertyldrm"
        datetime={new Date('2021-01-14')}
        text={`express,mongodb vs. :))
        
react,nextjs,postcss :/`}
      />
    </Layout>
  )
}

export default HomePage
