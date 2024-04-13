import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Signin } from "./Components/LoginSignup/Signin";
import { Signup } from "./Components/LoginSignup/Signup";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to = "/signup" />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
