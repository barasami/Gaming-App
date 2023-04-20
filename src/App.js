import './App.css';
import Gnews from './G-news/Gnews';
import Rnews from './R-leases/Rnews';
import Homeonsale from './Onsale/Homeonsale';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Gnews/>}/>
            <Route path='/news' element={<Rnews/>}/>
            <Route path='/sale' element={<Homeonsale/>}/>
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
