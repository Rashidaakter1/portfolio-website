import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/Home/About';
import SingleProject from './Pages/Home/SingleProject';
import Footer from './Pages/Shared/Footer';
import Navbar from '../src/Pages/Shared/Navbar';
import Blogs from './Pages/Home/Blogs';
import Contacts from './Pages/Home/Contacts';
import Particle from './Particle';

function App() {
  return (
    <>
    <Particle></Particle>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/contacts" element={<Contacts></Contacts>} />
        <Route path="/singleproject/:id" element={<SingleProject />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
