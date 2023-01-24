import "./App.css";
import Cabezera from "./components/Header/Header.jsx";
import logo from "./assets/logo.png";
import Navbar from "./components/Navbar/Navbar.jsx";
import Carrusel from "./components/Carrusel/Carrusel";
import Footer from "./components/Footer/Footer";
import Card from "./components/card/Card";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Cart from "./views/Cart/Cart";
import Login from "./views/Login/Login";
import Todos_Productos from "./views/Todos_Productos/Todos_Productos";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvaider } from "./Context/AuthContext";
import PublicRoute from "./components/router/PublicRoute/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <AuthContextProvaider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
            {/*Rutas Publicas*/}
            <Route path="/login" element={<PublicRoute />}>
              <Route index element={<Login />} />
            </Route>
            {/*Rutas Privadas*/}
            <Route path="/u" element={<PrivateRoute />}>
              <Route index element={<Todos_Productos />} />

              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvaider>
    </>
  );
}

export default App;
