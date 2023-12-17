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
import Category from "./pages/Category/Category";
import SucessBuy from "./pages/SucessBuy/SucessBuy";
import Search from "./pages/Search/Search";

register();

function App() {
  const [isHeader, setIsHeader] = useState(true);

  // MessageAlert
  const [timeMessage, setTimeMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const [cookie, setCookie] = useState();

  const [user, setUser] = useState("");

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth, user]);

  useEffect(() => {
    setCookie(localStorage.getItem("acceptCook"));
  }, []);

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
        {timeMessage && (
          <MessageAlert
            type={type}
            message={message}
            setTimeMessage={setTimeMessage}
          />
        )}
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

        <Routes>
          <Route path="/" element={<Home setIsHeader={setIsHeader} />} />
          <Route
            path="/pdp/:id"
            element={
              <PageProduct
                user={user}
                setIsHeader={setIsHeader}
                setType={setType}
                setMessage={setMessage}
                setTimeMessage={setTimeMessage}
              />
            }
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
                <MyAccount setIsHeader={setIsHeader} user={user} setTimeMessage={setTimeMessage} setType={setType} setMessage={setMessage} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/cart"
            element={<Cart setIsHeader={setIsHeader} user={user} />}
          />
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
          <Route path="/categoria/:id" element={<Category setIsHeader={setIsHeader} />} />
          <Route path="/search" element={<Search setIsHeader={setIsHeader} />} />
          <Route path="/compra-bem-sucedida" element={<SucessBuy setIsHeader={setIsHeader} user={user} />} />
        </Routes>
        {isHeader && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
