import React from 'react'
import DataModule from './datamodule'
import RangeChart from './rangechart'

const DataSection = ({ data }) => {
  console.log(data)
  return (
    <div className='datasection_container'>
      <div className='datasection_titlecontainer'>
        <p className='datasection_title'>How much does it cost?</p>
        <p className='datasection_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <DataModule title="Average Price" location="California" styleId="module_price">
        <p className='module_pricetext'>{`$${Math.round(data.percent50)}`}</p>
      </DataModule >
      <DataModule title="Typical Price Range" location="California" styleId="module_range">
        <RangeChart data={data} />
      </DataModule>
    </div>
  )
}

export default DataSection