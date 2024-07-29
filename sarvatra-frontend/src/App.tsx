import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'
import CollectionsPage from './pages/CollectionsPage'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <Toaster 
          toastOptions={{
            success: {
              iconTheme: {
                primary: '#131313',
                secondary: '#EDE6D6'
              },
              style: {
                background: '#EDE6D6',
                border: '0.5px solid #131313'
              }
            },//
            error: {
              iconTheme: {
                primary: '#131313',
                secondary: '#EDE6D6'
              },
              style: {
                background: '#EDE6D6',
                border: '0.5px solid #131313'
              }
            },
            style: {
              fontFamily: 'avenir',
              padding: '2px 6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }
          }}
        />
        <ScrollToTop />
        <div>
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/collection' element={<CollectionsPage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/contact' element={<ContactPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
