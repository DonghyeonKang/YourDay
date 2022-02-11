import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";
import MyPage from "./routes/MyPage";
import "./App.css";
import FriendList from "./routes/FriendList";
import Edit from "./routes/Edit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/friendList" element={<FriendList />} />
        <Route path="/mypage/friendList/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;
