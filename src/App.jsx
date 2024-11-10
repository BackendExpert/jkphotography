import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HoemPage/HomePage";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/NavBar/Footer";


export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showNavBar ? "translate-y-0" : "-translate-y-full"}`}>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/AboutUs" element={<AboutUs /> } />
      </Routes>

      {
        location.pathname === '/'
        ?
        <div className=""></div>
        :
        <Footer />
      }
      
    </BrowserRouter>
  )
}