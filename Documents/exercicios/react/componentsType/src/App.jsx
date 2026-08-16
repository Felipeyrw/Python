import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ProductListWithData from './components/SmartComponents'
import ClientListWithData from './components/ClientsList'

function App() {
  return <>
  <ClientListWithData/>
    <ProductListWithData/>
  </>
}

export default App
