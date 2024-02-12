import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home'
import NoPage from './pages/NoPage'
import Belepes from './pages/login'
import SignUp from './pages/singup'
import Products from './pages/Termekek'
import TermekOldal from './pages/Product'
import LogOut from './pages/kilep'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<Belepes />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/products' element={<Products />} />
        <Route path='/info' element={<TermekOldal />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
