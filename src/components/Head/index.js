import React from 'react'
import { Helmet } from 'react-helmet'

import Icon57 from '../../images/apple-touch-icon-57x57.png'
import Icon114 from '../../images/apple-touch-icon-114x114.png'
import Icon72 from '../../images/apple-touch-icon-72x72.png'
import Icon144 from '../../images/apple-touch-icon-144x144.png'
import Icon60 from '../../images/apple-touch-icon-60x60.png'
import Icon120 from '../../images/apple-touch-icon-120x120.png'
import Icon76 from '../../images/apple-touch-icon-76x76.png'
import Icon152 from '../../images/apple-touch-icon-152x152.png'
import Icon196 from '../../images/favicon-196x196.png'
import Icon96 from '../../images/favicon-96x96.png'
import Icon32 from '../../images/favicon-32x32.png'
import Icon16 from '../../images/favicon-16x16.png'
import Icon128 from '../../images/favicon-128.png'
import MsTile144 from '../../images/mstile-144x144.png'
import MsTile70 from '../../images/mstile-70x70.png'
import MsTile150 from '../../images/mstile-150x150.png'
import MsTile310x150 from '../../images/mstile-310x150.png'
import MsTile310 from '../../images/mstile-310x310.png'

const Head = () => {
  return (
    <Helmet
      meta={[
        { name: 'application-name', content: '&nbsp;' },
        { name: 'msapplication-TileColor', content: '#FFFFFF' },
        { name: 'msapplication-TileImage', content: `${MsTile144}` },
        { name: 'msapplication-square70x70logo', content: `${MsTile70}` },
        { name: 'msapplication-square150x150logo', content: `${MsTile150}` },
        { name: 'msapplication-wide310x150logo', content: `${MsTile310x150}` },
        { name: 'msapplication-square310x310logo', content: `${MsTile310}` }
      ]}
      link={[
        { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: `${Icon57}` },
        { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: `${Icon114}` },
        { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: `${Icon72}` },
        { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: `${Icon144}` },
        { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: `${Icon60}` },
        { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: `${Icon120}` },
        { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: `${Icon76}` },
        { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: `${Icon152}` },
        { rel: 'icon', type: 'image/png', href: `${Icon196}`, sizes: '196x196' },
        { rel: 'icon', type: 'image/png', href: `${Icon96}`, sizes: '96x96' },
        { rel: 'icon', type: 'image/png', href: `${Icon32}`, sizes: '32x32' },
        { rel: 'icon', type: 'image/png', href: `${Icon16}`, sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: `${Icon128}`, sizes: '128x128' }
      ]}
    />
  )
}

export default Head
