import { Routes, Route } from "react-router-dom";
import MyNavbar from "./component/organisme/MyNavbar";
import ArticleSaved from "./pages/ArticleSaved";
import ToTop from "./component/organisme/ToTop";
import Footer from "./component/organisme/Footer";
import Covid19 from "./pages/Covid19";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Search from "./pages/Seacrh";

function App() {

  return (
    <div className="App">
      <div className="">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Indonesia />} />
          <Route path="/covid19" element={<Covid19 />} />
          <Route path="/programming" element={<Programming />} />
          <Route path={"/search/:search"} element={<Search />} />
          <Route path="saved" element={<ArticleSaved />} />
        </Routes>
        <ToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
