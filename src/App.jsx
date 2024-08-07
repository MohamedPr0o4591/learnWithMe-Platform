import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import NavBar from "./utilities/NavBar";
import Footer from "./utilities/footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <div className="blurBall" /> */}
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="*"
          element={
            <h2 className="text-center fw-bold mt-5 text-danger">
              Page not found
            </h2>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
