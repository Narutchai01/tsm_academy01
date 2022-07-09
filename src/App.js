import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nevbar from './component/Nev';
import Carousel from './component/Carousel';
import { Route, Routes } from 'react-router-dom';
import Dancepage from './Pages/Dancepage';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
      <Nevbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="dance" element={<Dancepage/>} />
      </Routes>
    </div>
  );
}

export default App;
