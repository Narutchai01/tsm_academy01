import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nevbar from './component/Nev';
import Carousel from './component/Carousel';
import { Route, Routes } from 'react-router-dom';
import Dancepage from './Pages/Dancepage';
import Homepage from './Pages/Homepage';
import Footer from './component/Footer';

function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <div className="App">
      <Nevbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="dance" element={<Dancepage/>} />
      </Routes>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
