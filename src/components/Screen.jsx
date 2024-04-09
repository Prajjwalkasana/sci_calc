import React from 'react'
import "./screen.css"

export default function Screen(props) {
  return (
    <div  className='screen'>
        <input type="text" onChange={props.inp} value={props.val}/>
        <p>{props.out}</p>
    </div>
  )
}
