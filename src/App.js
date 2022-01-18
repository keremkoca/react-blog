import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
function App() {
  return (
    <div className="site-wrapper">
      <Navbar></Navbar>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
