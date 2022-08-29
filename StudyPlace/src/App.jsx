import './App.css';
import Department from './components/department/department';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import { Routes, Route, Link } from "react-router-dom";
import Rent from './components/Rent/rent';
function App() {
  return (
    <>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Department/>} />
        <Route path="engineer" element={<Rent/>} />
      </Routes>
    <Footer/>

    </>
  );
}

export default App;
