import { Routes, Route } from "react-router-dom";
import MyNavbar from "./component/organisme/MyNavbar";
// import ArticleSaved from "./pages/ArticleSaved";
import ToTop from "./component/organisme/ToTop";
import Footer from "./component/organisme/Footer";
import Covid19 from "./pages/Covid19";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Search from "./pages/Seacrh";
import { useSelector } from "react-redux";

// import PagesArticles from "./component/template/PageArticles";

function App() {
  const env = process.env.REACT_APP_BASE_URL;
  console.log(env);

  const { search } = useSelector((state) => state.search);
  return (
    <div className="App">
      <div className="">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Indonesia />} />
          <Route path="/covid19" element={<Covid19 />} />
          <Route path="/programming" element={<Programming />} />
          <Route path={"/search=" + search} element={<Search />} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="saved" element={<ArticleSaved />} /> */}
          {/* <Route path="/:article" element={<PagesArticles />} /> */}
        </Routes>
        <ToTop />
        <Footer />
      </div>
    </div>
  );
}

export default App;
