import './App.css';
import TopBar from './components/TopBar/TopBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import AboutUs from './pages/AboutUs/AboutUs';
import SearchCategory from './pages/SearchCategory/SearchCategory';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

const App: React.FC = () => {
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
            <Route path='/register' element={<Register />} />
            <Route path='/search/:category' element={<SearchCategory />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
