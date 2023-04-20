import "./App.css";
import Pricing from "./components/Pricing/Pricing";
import AboutUs from "./pages/About/AboutUs";
import Blogs from "./pages/Blog/Blogs";
import Classes from "./pages/Class/Classes";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <div>
        <Home />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Classes/>
      </div>
      <div>
        <Blogs/>
      </div>
      <div>
        <Pricing/>
      </div>
    </>
  );
}

export default App;
