import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


 const App = ()=> {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
    <Footer></Footer>
    </div>
  );
}

export default App