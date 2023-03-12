import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Editor from "./pages/Editor";
import Layout from "./pages/Layout";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />}>
            <Route path="notes/:noteId" element={<Editor />} />
            <Route path="folders/:folderId/notes/:noteId" element={<Editor />} />
          </Route>
        )
      )}
    />
  );
}

export default App;
