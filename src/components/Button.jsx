import React from 'react'
import './Button.css'
export default function Button({handleListItem}) {
  return <button className='button' onClick={handleListItem}> </button>
}
