import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Signin from './sign-in/Signin.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

    </div>
  )
}

export default App
