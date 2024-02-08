import React from 'react'

const DataModule = ({ title, location, styleId, children }) => {
  return (
    <div className='module_container' id={styleId}>
      <p className='module_title'>{title}</p>
      <div className='module_children'>
        {children}
      </div>
      <LocationDropdown />
    </div>
  )
}

export default DataModule