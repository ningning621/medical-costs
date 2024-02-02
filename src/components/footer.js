import React from 'react'

const Footer = () => {
  return (
    <div className='footer_container'>
      <hr />
      <div className='footer_content'>
        <div className='footer_left'>
          <p>Medical Costs</p>
          <p className='footer_copyright'>Copyright ©2024. All rights reserved. Website for personal, non-commercial use only.</p>
        </div>
        <div className='footer_right'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada ac nunc vel auctor. Integer convallis tristique laoreet. Sed purus leo, feugiat sit amet dui luctus, congue feugiat tortor. Aliquam tempus vitae arcu nec dictum.</p>
          <div className='footer_links'>
            <p>Email us</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer