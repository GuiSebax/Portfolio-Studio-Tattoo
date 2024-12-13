import "./App.css";
import { BrowserRouter, useSearchParams } from "react-router-dom";
// Pages
import Home from "./pages/Home/Home";
import Colour from "./pages/Colour/Colour";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import News from "./pages/News/News";

// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function QueryRouter() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("p");

  switch (page) {
    case "home":
      return <Home />;
    case "colour":
      return <Colour />;
    case "about":
      return <About />;
    case "contact":
      return <Contact />;
    case "news":
      return <News />;
    default:
      return <Home />;
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <QueryRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
