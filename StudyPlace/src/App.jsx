import './App.css';
import Department from './components/department/department';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import { Routes, Route, Link } from "react-router-dom";
import Rent from './components/Rent/rent';
import { useState } from 'react';
function App() {
  const [user, setuser] = useState([{
    id :1 ,
    name : "Kim",
    age: 23,
    department : "Software",
    grade : 3,
  }]);
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
