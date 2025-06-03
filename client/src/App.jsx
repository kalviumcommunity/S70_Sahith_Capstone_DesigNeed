import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home'
// import LoginPage from "./pages/LoginPage"; // or whatever page you're showing

function App() {
  return (
    <div>
      <Navbar />
      <Home/>
      {/* <LoginPage /> */}
    </div>
  );
}

export default App;
