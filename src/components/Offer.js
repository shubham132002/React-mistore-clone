import React from 'react'
import "../styles/Offers.css"

const Offer = ({src,link,index}) => {
  return (
    <a href={link}> <img src={src} alt={'${index}offer'}/></a>
  )
}

export default Offer