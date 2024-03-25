
import './App.css'
import Home from './components/Home'
import SignUp from './components/SignUp'
import {Routes,Route} from 'react-router-dom'

function App() {

  return (
   <div className="flex justify-center items-center">
    <Routes>
      <Route path="/submitForm" element={<SignUp />} />
      <Route path="/getUser" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
    
   </div>
  )
}

export default App
