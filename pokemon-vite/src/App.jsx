import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pokecard from './Pokecard'
import Pokedex from './Pokedex'

function App() {
  return (
    <>
    <h1 className="title">Pokdex</h1>
      <Pokecard cards={Pokedex} />
    </>
  )
}

export default App
