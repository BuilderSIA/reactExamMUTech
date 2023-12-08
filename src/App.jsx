import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar, ProtectedRoute } from './components'
import Cards from './pages/Cards/Cards'
import { Home } from './pages'

function App() {

  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cards' element={
        <ProtectedRoute>
          <Cards />
        </ProtectedRoute>
      } />
    </Routes>
    </>
  )
}

export default App
