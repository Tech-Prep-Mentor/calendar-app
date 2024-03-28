import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feature from "./pages/Home/Feature";
import Hero from "./pages/Home/Hero";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Calendar from "./pages/calendar/Calendar";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
function App() {
  return (
    <Router>
      <div className="App">
        <LoginButton/>
        <LogoutButton/>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Hero />
                <Feature />
                <Footer />
              </div>
            }
          />
          <Route
            path="/calendar"
            element={
              <div>
                <Calendar />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
