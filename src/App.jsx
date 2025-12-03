import Home from './componenets/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import About from './componenets/About'
import Contact from './componenets/Contact'
import Shop from './componenets/Shop'
import ShowProduct from "./componenets/ShowProduct"
import CartProducts from"./componenets/CartProducts"


function App() {
 

  return (
    <>
      <BrowserRouter> 
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='/Shop'element={<Shop/>}/>
               <Route path="/About" element={<About />}/>
               <Route path="/Contact" element={<Contact />}/>
               <Route path='/ShowProduct/:id' element={<ShowProduct/>}/>
               <Route path='/Cart'element={<CartProducts/>}/>
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App()
