import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./pages/Layout";

function App() {
  return (
    <RouterProvider router={createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Layout />} />))} />
  );
}

export default App;
