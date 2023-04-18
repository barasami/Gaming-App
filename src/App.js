import './App.css';
import Gnews from './G-news/Gnews';
import Rnews from './R-leases/Rnews';
import Homeonsale from './Onsale/Homeonsale';

function App() {
  return (
    <div className="App">
      <Gnews/>
      <Rnews/>
      <Homeonsale/>
    </div>
  );
}

export default App;
