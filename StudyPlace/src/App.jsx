import './App.css';
import Department from './components/department/department';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Department/>} />
        <Route path="about" element={<h1>about</h1>} />
      </Routes>
    <Footer/>

    </>
  );
}

export default App;
