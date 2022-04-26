
import './App.css';
import Nav from './components/nav/Nav';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
