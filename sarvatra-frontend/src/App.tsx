import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
