import React from 'react'
import cn from 'classnames'

import style from './photo.module.css'

function Photo({
  src = 'https://instagram.fsaw2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/76854851_453197238668320_2877389786354548736_n.jpg?_nc_ht=instagram.fsaw2-1.fna.fbcdn.net&_nc_ohc=oCwyNW0yXwgAX_Fqkjg&tp=1&oh=816d754b97df4d869d0567754386966c&oe=604FCAEA',
  alt,
  size = 47
}) {
  return (
    <div className={cn([style.photo])} style={{ width: size, height: size }}>
      <img className={style.img} src={src} alt={alt} />
    </div>
  )
}

export default Photo
