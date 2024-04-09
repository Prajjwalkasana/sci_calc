import React from 'react'
import  "./wrapper.css"

export default function Wrapper({children}) {
  return (
    <div className='wrap'>{children}</div>
  )
}
