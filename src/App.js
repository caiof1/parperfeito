// CSS
import './App.css';

// Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Components
import Header from './components/Header/Header';

// Swiper
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination"

// Pages
import Home from './pages/Home/Home';

register();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
