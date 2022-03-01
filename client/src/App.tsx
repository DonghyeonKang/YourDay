import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import MyDays from "./routes/MyDays";
import MyPage from "./routes/MyPage";
import Login from "./routes/Login";
import Schedule from "./routes/Schedule";
import Time from "./routes/Time";
import "./App.css";
import Header from "./components/Header";

function App() {
  const userid = 1212;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Time" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mydays" element={<MyDays id={userid} />} />
      </Routes>
    </Router>
  );
}

export default App;
