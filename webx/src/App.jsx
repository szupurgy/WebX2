import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import HomePage from './pages/Home'
import NoPage from './pages/NoPage'
import Belepes from './pages/login'
import SignUp from './pages/singup'
import Products from './pages/Termekek'
import TermekOldal from './pages/Product'
import LogOut from './pages/kilep'
import Kosar from './pages/kosar'
import Profiles from './pages/Profile'

function App() {
  return (
    <>
    <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<Belepes />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/products' element={<Products />} />
        <Route path='/info/:id' element={<TermekOldal />} />
        <Route path='/profile' element={<Profiles/>}/>
        <Route path='/logout' element={<LogOut />} />
        <Route path='/kosar' element={<Kosar />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App