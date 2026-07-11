import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {

  return (
    <>
      <Loader />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default App;