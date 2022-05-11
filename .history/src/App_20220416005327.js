import SignUp from "./components/pages/Auth/SignUp";
import SignIn from "./components/pages/Auth/SignIn";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
