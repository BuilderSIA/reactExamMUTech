import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, Navbar, ProtectedRoute } from './components'
import { AboutUs, Cards, Cart, Home, Profile } from './pages'
import { UseGlobalContext } from './context'



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
