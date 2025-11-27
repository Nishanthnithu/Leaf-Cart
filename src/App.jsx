import Home from './componenets/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import About from './componenets/About'
import Contact from './componenets/Contact'

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
