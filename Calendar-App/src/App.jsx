import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Feature from './components/Feature.jsx'
import Signin from './sign-in/Signin.jsx'
import MyCalendar from './components/Calendar.jsx'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
<MyCalendar />

      {/* <Navbar />
      <Hero />
      <Feature/>
      <Footer/> */}
    </div>
  )
}

export default App
