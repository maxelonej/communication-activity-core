import { HashRouter, Routes, Route } from "react-router"; // instead of browserrouter for gh-pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import PAS from "../pages/PAS";
import Internships from "../pages/Internships";
import NotFound from "../pages/NotFound";

import "../../styles/index.scss";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pas" element={<PAS />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
