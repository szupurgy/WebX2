import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import { ArContext } from './context/ArContext'
import { UserContext } from './context/UserContext'
import PlaceOrder from './pages/PlaceOrder'

function App() {
  return (
    <>
      <BrowserRouter>
        <ArContext>
          <UserContext>
            <Toaster />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/login' element={<Belepes />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/products' element={<Products />} />
              <Route path='/info/:id' element={<TermekOldal />} />
              <Route path='/profile' element={<Profiles />} />
              <Route path='/logout' element={<LogOut />} />
              <Route path='/kosar' element={<Kosar />} />
              <Route path='/placeorder' element={<PlaceOrder/>}/>
              <Route path='*' element={<NoPage />} />
            </Routes>
          </UserContext>
        </ArContext>
      </BrowserRouter>
    </>
  )
}

export default App