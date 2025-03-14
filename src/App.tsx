import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Createpost from "./pages/Createpost/Createpost";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<Createpost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
