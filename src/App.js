import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MainFooter from "./components/footer/MainFooter";
import MiniFooter from "./components/footer/MiniFooter";

function App() {
  return (
      <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <MainFooter />
      <MiniFooter />
      </>
  );
}

export default App;
