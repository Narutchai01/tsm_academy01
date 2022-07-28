import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nevbar from './component/Nev';
// import Carousel from './component/Carousel';
import { Route, Routes } from 'react-router-dom';
import Aboutpage from './Pages/Aboutpage';
import Homepage from './Pages/Homepage';
import Footer from './component/Footer';
import Dancepages from './Pages/Dancepages';
import Contactpage from './Pages/Contactpage';


function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <div className="App">
      <Nevbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="about" element={<Aboutpage/>} />
        <Route path="dance" element={<Dancepages/>} />
        <Route path="contact" element={<Contactpage/>} />
      </Routes>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
