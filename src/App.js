import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MainFooter from "./components/footer/MainFooter";
import MiniFooter from "./components/footer/MiniFooter";
import ChatBot from "./components/bot/ChatBot";

function App() {
  return (
    <>
      <div className="">
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        <MainFooter />
        <MiniFooter />
        <ChatBot />
        </Router>
      </div>
    </>
  );
}

export default App;
