import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { AboutUs, Home } from './pages'


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about_us' element={<AboutUs/>} />
          
      </Routes>
    </>
  )
}

export default App
