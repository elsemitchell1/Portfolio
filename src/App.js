import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } 
from 'react-router-dom';
import Home  from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Resume from './pages/ResumePage/Resume';
import Education from './pages/EducationPage/Education';
import Portfolio from './pages/PortfolioPage/Portfolio';
import { Navbar, Footer } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Resume' element={<Resume/>} />
        <Route path='/Education' element={<Education/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
