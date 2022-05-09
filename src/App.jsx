import { Outlet } from "react-router-dom";
import Contact from "./components/utilities/Contact";
import Footer from "./components/utilities/Footer";
import Navbar from "./components/utilities/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
