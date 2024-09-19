import React from 'react'

const GifGridItem = ({id,title,url}) => {
  return (
    <div className='card animate__animated animate__backInDown'>
      <p>{title}</p>
      <img src={url} alt={title}/>
    </div>
  )
}

export default GifGridItem
