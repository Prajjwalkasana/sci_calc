import React from 'react'
import './button.css'

export default function Button({value,onclick ,class1}) {
  return (
    <button onClick={onclick} className={class1}>{value}</button>
  )
}
