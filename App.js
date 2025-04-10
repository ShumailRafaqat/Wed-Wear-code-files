import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import VendorsSection from "./components/VendorsSection";
import Footer from "./components/Footer";
import ChatbotPage from "./components/ChatbotPage";

// ✅ Corrected path for Login & Signup
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<><HeroSection /><FeaturesSection /></>} />
          <Route path="/home" element={<><HeroSection /><FeaturesSection /></>} />
          <Route
            path="/explore"
            element={
              <>
                <div className="text-center py-20 text-4xl text-[#B17F6B]">Explore Our Features</div>
                <FeaturesSection />
              </>
            }
          />
          <Route path="/vendors" element={<VendorsSection />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
