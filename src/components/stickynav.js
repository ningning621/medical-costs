import React from 'react'

const StickyNav = () => {
  return (
    <div className='nav_container'>
      <div className='nav_headDek'>
        <p className="nav_title">Medical Costs</p>
        <p className="nav_description">Lorem ipsum dolor sit amet</p>
      </div>
      <LocationDropdown />
    </div>
  )
}

export default StickyNav