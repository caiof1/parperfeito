// CSS
import './App.css';

// Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Swiper
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination"

// Pages
import Home from './pages/Home/Home';
import PageProduct from './pages/Home/PageProduct/PageProduct';


register();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pdp" element={<PageProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
