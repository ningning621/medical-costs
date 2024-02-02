import React from 'react'

const DataModule = ({ title, location, styleId, children }) => {
  return (
    <div className='module_container' id={styleId}>
      <p className='module_title'>{title}</p>
      <div className='module_children'>
        {children}
      </div>
      <div>
        <div className='module_icon'></div>
        <p className='module_location'>{location}</p>
      </div>
    </div>
  )
}

export default DataModule