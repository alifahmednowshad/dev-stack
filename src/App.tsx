import { ToastContainer } from "react-toastify";
import Bannar from "./components/Bannar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Navbar />
      <Bannar />
      <Technologies />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </>
  );
}

export default App;
