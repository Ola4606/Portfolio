
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/general/scrollToTop";
import Home from "./components/home/home";
import ProjectDisplay from "./components/projects/projectDisplay";

function App() {
  return (
    <div>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:name" element={<ProjectDisplay />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
