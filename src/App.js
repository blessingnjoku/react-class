import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./FunctionComponents/Counter";
import USESTATE from "./FunctionComponents/USESTATE";
import WindowSize from "./FunctionComponents/WindowSize";
import Nav from "./components/Nav";
import About from "./pages/About";
import Books from "./pages/Books";
import Countdown from "./pages/Countdown";
import Employees from "./pages/Employees";

import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/books" element={<Books />} />
          {/* <Route path="/:id" element={<Employees />} /> */}
          <Route path="*" element={<NotFound/>}/>
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
