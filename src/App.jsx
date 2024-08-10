import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar/NavBar.jsx';
import Footer from '../src/components/Footer/Footer.jsx';
import Header from '../src/components/Header/Header.jsx';
import Project from '../src/components/Project/Project.jsx';
import Portfolio from '../src/components/Portfolio/Portfolio.jsx';
import Contact from '../src/components/Contact/Contact.jsx';
import Resume from '../src/components/Resume/Resume.jsx';
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