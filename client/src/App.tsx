import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import MyDays from "./routes/MyDays";
import MyPage from "./routes/MyPage";
import Login from "./routes/Login";
import Schedule from "./routes/Schedule";
import Time from "./routes/Time";
import "./App.css";
import FriendList from "./routes/FriendList";
import Edit from "./routes/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mydays" element={<MyDays />} />
        <Route path="/mypage/friendList" element={<FriendList />} />
        <Route path="/mypage/friendList/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
