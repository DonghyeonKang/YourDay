import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import MyDays from "./routes/MyDays";
import MyPage from "./routes/MyPage";
import Intro from "./components/Intro";
import Login from "./routes/Login";
import Schedule from "./routes/Schedule";
import Time from "./routes/Time";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Time" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mydays" element={<MyDays />} />
      </Routes>
    </Router>
  );
}

export default App;
