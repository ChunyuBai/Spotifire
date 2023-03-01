import React from 'react'
import './SidebarOption.css'


function SidebarOption({ option, Icon }) {
  return (
    <div className='sidebarOption'>
      <p>{option}</p>
    </div>
  )
}

export default SidebarOption