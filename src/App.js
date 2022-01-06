import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="site-wrapper">
      <Navbar></Navbar>
      <div className="site-section-container">
        <div className="section-1"></div>
        <div className="section-2"></div>
        <div className="section-3"></div>
        <div className="section-4"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
