import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import RouterApp from "./router";

function App() {
  return (
    <>
      <RouterProvider router={RouterApp} />
    </>
  );
}

export default App;
