import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Layout from './components/Layout';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Branches from './pages/Branches';
import Career from './pages/Career';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='branch' element={<Branches/>}/>
        <Route path='achievements' element={<Achievements/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='contact' element={<ContactUs/>}/>
      </Route>
    </Routes>
  );
}

export default App;
