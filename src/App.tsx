import React from 'react'
import Navbar from './section/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import Content from './section/Content'

const App = () => {
  return (
    <ThemeProvider>
      <main className='max-w-7xl mx-auto'>
        <Navbar />
        <Content />
      </main>
    </ThemeProvider>
  )
}

export default App