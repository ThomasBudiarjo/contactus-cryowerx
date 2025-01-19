import Navbar from './section/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import Content from './section/Content'
import Footer from './section/Footer'
import { ToastProvider } from './components/Toast'

const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <main className='w-full'>
          <Navbar />
          <Content />
          <Footer />
        </main>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App