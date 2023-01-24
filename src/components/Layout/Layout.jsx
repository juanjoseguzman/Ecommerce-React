import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { homeMenu } from "../const/homeMenu";
import Header from "../Header/Header";
import logo from "../../assets/logo.png";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header logo={logo} />
      <Navbar menuItems={homeMenu} />
      <Outlet />
      <Footer logo={logo} />
    </>
  );
}
