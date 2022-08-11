
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects/:name" element={<SessionMain />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
