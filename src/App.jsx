import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar, ProtectedRoute } from './components'
import Cards from './pages/Cards/Cards'
import { Home } from './pages'
import AboutUs from './pages/AboutUs/AboutUs'
import Login from './components/Login'
import { UseGlobalContext } from './context'
import Profile from './pages/Profile/Profile'
import Cart from './pages/Cart/Cart'


function App() {
  const {login} = UseGlobalContext()
  return (
    <>
      <Navbar />
    <Routes>
    <Route path='login' element={ login ? <Login/> : < Profile/>}/>
      <Route path='about_us' element={<AboutUs/>}/>
      <Route path='/' element={<Home />} />
      <Route path='/cards' element={<Cards />} />
      <Route path='/cart' element={
      <ProtectedRoute>
        <Cart/>
      </ProtectedRoute>
      }/>
    </Routes>
   
    </>
  )
}

export default App
