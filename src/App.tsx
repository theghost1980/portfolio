import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//TODO decide if using modules css or just css.
import "./App.css";
import NavBar from "./components/common-ui/NavBar/NavBar";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import NotFound from "./pages/not-found/not-found";

//TODO When need nested routes for Blog, etc:
//  - https://blog.logrocket.com/react-router-v6-guide/

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
