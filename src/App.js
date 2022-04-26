import './App.css';
import UserLoginPage from './Pages/LoginPage/UserLoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserRegisterPage from './Pages/RegisterPage/UserRegisterPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/register" element={<UserRegisterPage/>} />
        <Route exact path="/login" element={<UserLoginPage/>}/>

      </Routes>
    </Router>
  );
}

export default App;
