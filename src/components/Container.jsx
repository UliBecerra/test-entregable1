import React from 'react'
import Button from './Button'
import './Container.css'

export default function container({handleListItem, quote}) {
  return (
    
      <section className='container'>
        <h1 className='container--title'>INFOGALAX</h1>
        <article className='container--phrase'>
          <p> {quote.phrase} </p>
        </article>
        
          <Button handleListItem={handleListItem} />
          <article className='container--author'>
            <h4>Fuente {quote.author} </h4>
        </article>
      </section>
    
  )
}
