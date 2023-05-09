import { useState } from 'react'
import db from './assets/db.json'
import './App.css'
import Container from './components/Container'
import sound from '/public/audio/sfx.mp3';

function App() {
  
  const images = ['bg', 'bg2', 'bg3', 'bg4']
  const getListItemt = (db) => {
    const randomItem = Math.floor(Math.random() * db.length)
    return db[randomItem]
  }
  const [quote, setQuote] = useState(getListItemt(db));

  
  
  const [bgImage, setBgImage] = useState(getListItemt(images));

  const handleListItem = () => {
    setQuote(getListItemt(db))
    setBgImage(getListItemt(images))
    new Audio(sound).play()

  }


  

  return (
    <div className={`App ${bgImage} img `}>
      <Container handleListItem={handleListItem} quote={quote} bgImage={bgImage}/>
      
    </div>
  )
}


export default App
