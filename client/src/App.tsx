import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import MyDays from "./routes/MyDays";
import MyPage from "./routes/MyPage";
import Intro from "./components/Intro/Intro";
import Schedule from "./routes/Schedule";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/Time" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mydays" element={<MyDays />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
