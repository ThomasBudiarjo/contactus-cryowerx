import React from 'react'
import Navbar from './section/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import Content from './section/Content'
import Footer from './section/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <main className='w-full'>
        <Navbar />
        <Content />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App