import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <BrowserRouter>
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
