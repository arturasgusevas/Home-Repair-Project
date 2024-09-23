import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import SearchCategory from './pages/SearchCategory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search/:category' element={<SearchCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
