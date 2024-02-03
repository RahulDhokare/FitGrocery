import React from 'react' 
import './App.css'
import { Route, Routes , BrowserRoute, BrowserRouter} from 'react-router-dom'
import Home from './PAGES/HomePage/Home'
function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Home" element={<Home/>}/>
  <Route path="*" element={<div>
    <h1>Page Not Found</h1>
  </div>}/>

 </Routes>
 </BrowserRouter>
  )
}

export default App
