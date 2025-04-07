import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/form";
import Data from "./components/data";
import Header from "./components/header";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/data" element={<Data />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
