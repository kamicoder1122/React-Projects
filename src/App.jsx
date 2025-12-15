import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import MainBody from './Components/BodyPage/MainBody'
// import ContactForm from './Components/ContactForm/ContactForm'

function App() {

  return (
    <>
    <Navigation />
    <main className='main_container'>
      <MainBody />
    {/* <ContactForm /> */}
    </main>
    </>
  )
}

export default App;
