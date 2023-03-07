import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import About from './ReactMenu/About';
import Contact from './ReactMenu/Contact';
import Home from './ReactMenu/Home';
import Service from './ReactMenu/Service';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './ReactMenu/Navbar';
import Footer from './ReactMenu/Footer';

function App() {
  return (
    <>

   <Router>
   <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/service' element={<Service/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes> 
   </Router>
   <Footer/>
    </>
  );
}

export default App;
