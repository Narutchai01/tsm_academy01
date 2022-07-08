import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nevbar from './component/Nev';
import Carousel from './component/Carousel';

function App() {
  return (
    <div className="App">
      <Nevbar/>
      <Carousel/>
      <div className='App-grid'>
          <h2>อร่อย</h2>
        </div>
    </div>
  );
}

export default App;
