import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import Colour from "./pages/Colour/Colour";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";

// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/tattoo/Home" element={<Home />} />
          <Route path="/tattoo/colour" element={<Colour />} />
          <Route path="/tattoo/about" element={<About />} />
          <Route path="/tattoo/contact" element={<Contact />} />
          <Route path="/tattoo/news" element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
