import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Signin } from "./Components/LoginSignup/Signin";
import { Signup } from "./Components/LoginSignup/Signup";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to = "/signup" />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
