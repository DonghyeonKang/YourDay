import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Login from "./routes/Login";
import MyDays from "./routes/MyDays";
import MyPage from "./routes/MyPage";
import Schedule from "./routes/Schedule";
import Time from "./routes/Time";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mydays" element={<MyDays />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/time" element={<Time />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
