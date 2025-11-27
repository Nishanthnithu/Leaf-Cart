import Home from './componenets/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
=======
import About from './componenets/About'
import Contact from './componenets/Contact'
>>>>>>> 40a85c609c8ca4887f9d21b0f16d8a87fcd1e2e5

function App() {
 

  return (
    <>
      <BrowserRouter> 
            <Routes>
              <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/Contact" element={<Contact />}/>
              </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
