import React, { useEffect, useState } from 'react'

const Hero = ({ head, deck }) => {
  return (
    <div className='hero_container'>
      <h1>{head}</h1>
      <h2>{deck}</h2>
    </div>
  )
}

export default Hero