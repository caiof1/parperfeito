// CSS
import './App.css';

// Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Swiper
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination"

// Hooks
import { useState, useEffect } from 'react';

// Components
import HeaderSimple from './components/HeaderSimple/HeaderSimple';

// Pages
import Register from './pages/Register/Register';

// firebase 
import { onAuthStateChanged, getAuth } from 'firebase/auth';

// Pages
import Home from './pages/Home/Home';
import PageProduct from './pages/PageProduct/PageProduct';
import Login from './pages/Login/Login';
import MyAccount from './pages/MyAccount/MyAccount';
import Cart from './pages/Cart/Cart';


register();

function App() {

  const [isHeader, setIsHeader] = useState(true)

  const [user, setUser] = useState("");

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth, user]);

  return (
    <div className="App">
      <BrowserRouter>
        {isHeader ? <Header user={user} /> : <HeaderSimple />}
        <Routes>
          <Route path="/" element={<Home setIsHeader={setIsHeader} />} />
          <Route path="/pdp" element={<PageProduct setIsHeader={setIsHeader} />} />
          <Route path="/login" element={!user ? <Login setIsHeader={setIsHeader} /> : <Navigate to="/" />} />
          <Route path="/register" element={!user ? <Register setIsHeader={setIsHeader} /> : <Navigate to="/" />} />
          <Route path="/myaccount" element={user ? <MyAccount setIsHeader={setIsHeader} /> : <Navigate to="/login" /> } />
          <Route path="/cart" element={<Cart setIsHeader={setIsHeader} />} />
        </Routes>
        {isHeader && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
