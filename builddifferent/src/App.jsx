import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";

import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
    
      
      </Routes>
    </>
  );
}

export default App;