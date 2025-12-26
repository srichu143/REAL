import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages Import (Placeholder for now)
import Home from './pages/Home';
import Properties from './pages/Properties';
import Exchange from './pages/Exchange';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename="/REAL/">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
