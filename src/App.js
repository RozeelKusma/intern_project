
import './App.css';
import Nav from './components/nav/Nav';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import About from './components/about/About'
import Projects from './components/projects/Projects';
import JoinUs from './components/joinus/JoinUs';
import Alumini from './components/about/alumini/Alumini';
import Impacts from './components/projects/impacts/Impacts';
import Sponsor from './components/joinus/sponsor/Sponsor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about_us' element={<About/>} />
          <Route path='/alumini' element={<Alumini/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/impacts' element={<Impacts/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/shaper' element={<JoinUs/>}/>
          <Route path='/sponsor' element={<Sponsor/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
