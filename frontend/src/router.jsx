import {
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import PAS from "./components/pages/PAS";
import Internships from "./components/pages/Internships";
import NotFound from "./components/pages/NotFound";

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<Home />} />
    <Route path="/pas" element={<PAS />} />
    <Route path="/internships" element={<Internships />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="*" element={<NotFound />} />
  </>,
);

export const router =
  import.meta.env.VITE_HASH_ROUTER === "true"
    ? createHashRouter(routes)
    : createBrowserRouter(routes); // instead of browserrouter for gh-pages
