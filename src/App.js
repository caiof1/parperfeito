// CSS
import "./App.css";

// Router
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Swiper
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

// Hooks
import { useState, useEffect } from "react";

// Components
import HeaderSimple from "./components/HeaderSimple/HeaderSimple";

// Pages
import Register from "./pages/Register/Register";

// firebase
import { onAuthStateChanged, getAuth } from "firebase/auth";

// Pages
import Home from "./pages/Home/Home";
import PageProduct from "./pages/PageProduct/PageProduct";
import Login from "./pages/Login/Login";
import MyAccount from "./pages/MyAccount/MyAccount";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import MessageAlert from "./components/MessageAlert/MessageAlert";
import Cookies from "./components/Cookies/Cookies";

register();

function App() {
  const [isHeader, setIsHeader] = useState(true);

  // MessageAlert
  const [timeMessage, setTimeMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  
  const [cookie, setCookie] = useState()

  const [user, setUser] = useState("");

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth, user]);

  useEffect(() => {
    setCookie(localStorage.getItem("acceptCook"))
  }, [])

  console.log(cookie)

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [pathname]);

    return null;
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isHeader ? (
          <Header
            user={user}
            setType={setType}
            setMessage={setMessage}
            setTimeMessage={setTimeMessage}
          />
        ) : (
          <HeaderSimple />
        )}
        {cookie !== "true" && <Cookies setCookie={setCookie} />}
        <ScrollToTop />
        {timeMessage && (
          <MessageAlert
            type={type}
            message={message}
            setTimeMessage={setTimeMessage}
          />
        )}
        <Routes>
          <Route path="/" element={<Home setIsHeader={setIsHeader} />} />
          <Route
            path="/pdp"
            element={<PageProduct setIsHeader={setIsHeader} />}
          />
          <Route
            path="/login"
            element={
              !user ? <Login setIsHeader={setIsHeader} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/register"
            element={
              !user ? (
                <Register
                  setIsHeader={setIsHeader}
                  setType={setType}
                  setMessage={setMessage}
                  setTimeMessage={setTimeMessage}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/myaccount"
            element={
              user ? (
                <MyAccount setIsHeader={setIsHeader} user={user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/cart" element={<Cart setIsHeader={setIsHeader} />} />
          <Route
            path="/checkout"
            element={
              user ? (
                <Checkout setIsHeader={setIsHeader} user={user} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
        {isHeader && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
