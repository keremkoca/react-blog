import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home";
import PostDetail from "./Components/Pages/Home/PostDetail/PostDetail";

function App() {
  return (
    <div className="site-wrapper">
      <Navbar></Navbar>
      <PostDetail></PostDetail>
      <Footer></Footer>
    </div>
  );
}

export default App;
