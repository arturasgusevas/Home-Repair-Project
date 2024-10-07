import './App.css';
import TopBar from './components/TopBar/TopBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import Home from './pages/Home/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import SearchCategory from './pages/SearchCategory/SearchCategory';
import Login from './pages/Login/Login';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className='App'>
          <TopBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/login' element={<Login />} />
            <Route path='/search/:category' element={<SearchCategory />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
