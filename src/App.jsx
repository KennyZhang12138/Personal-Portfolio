import { Outlet } from "react-router-dom";
import Narbar from "./components/Narbar";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Narbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App
