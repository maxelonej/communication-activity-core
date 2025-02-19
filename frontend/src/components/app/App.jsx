import { RouterProvider } from "react-router";
import "../../styles/index.scss";
import { router } from "../../router.jsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
