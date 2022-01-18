import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Write from "./Pages/Write/Write";
function App() {
  return (
    <div className="site-wrapper">
      <Navbar></Navbar>
      <Write></Write>
      <Footer></Footer>
    </div>
  );
}

export default App;
