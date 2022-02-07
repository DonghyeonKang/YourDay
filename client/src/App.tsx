import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./routes/Main";
import MyPage from "./routes/MyPage";
import MyPagesFriend from "./routes/MyPagesFriend";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" element={ Main }/>
        <Route path="/mypage" element={ MyPage }/>
        <MyPagesFriend />
      </Router>
    </div>
  );
}

export default App;
