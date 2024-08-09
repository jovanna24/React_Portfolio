import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar/NavBar.jsx';
import Footer from './components/Footer';
import Header from '../src/components/Header/Header.jsx';
import Project from './components/Project';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import About from '../src/components/About/About.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;