import { Outlet } from "react-router-dom";
import Contact from "./components/utilities/Contact";
import Footer from "./components/utilities/Footer";
import Navbar from "./components/utilities/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
