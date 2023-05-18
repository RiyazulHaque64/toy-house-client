import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
