import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import Home from './pages/Home';
import WhyScanning from './pages/WhyScan';
import Customers from './pages/Customers';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Scanning from './pages/Scanning';
import Capacity from './pages/Capacity';
import { Features } from './components/Features';
import ContactPage from './pages/ContactPage';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (

    <Router>
      <Routes >
        <Route path='/features' element={<Features />} />

      </Routes>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/SPTech1.0" element={<Home />} />
            <Route path="/SPTech1.0/about" element={<AboutUs/>}/>  
         
           <Route path="/SPTech1.0/services" element={<Services />} />
            <Route path="/SPTech1.0/what-we-scan" element={<Scanning />} /> 
          <Route path="/SPTech1.0/why-scanning" element={<WhyScanning />} />
          <Route path="/SPTech1.0/customers" element={<Customers />} />
          <Route path="/SPTech1.0/capacity" element={<Capacity />} />
          <Route path="/SPTech1.0/contact" element={<ContactPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
