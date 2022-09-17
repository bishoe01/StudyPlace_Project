import './App.css';
import Department from './components/department/department';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import { Routes, Route, Link } from "react-router-dom";
import Rent from './components/Rent/rent';
import { useState } from 'react';
function App() {
  const [roomInfo, setRoomInfo] = useState(
  {
    "경상대학" : {
    department:["경제학부", "경영학부" , "보험계리학과", "회계세무학과"],
    room : [1,2,3,4,5,6,7,8],
    type : ["스터디","회의","팀플", "투명벽", "4인추천"],
    people : [2,3,4,5,6],
    description : "투명한 벽으로 구분된 경상대학 팀플실",
    img : ["https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80"],},
    "소프트웨어융합대학" : 
    {
    department:["소프트웨어학부(컴퓨터학부)", "ICT융합학부"],
    room : [1,2,3,4,5,6,7,8],
    type : ["study","meeting","seminar"],
    people : [2,3,4,5,6],
    img : "",}
});
  return (
    <>
    <Navigation/>
    <Routes>
        <Route path="/" element={<Department/>} />
        <Route path="engineer" element={<Rent roomInfo={roomInfo}/>} />
      </Routes>
    <Footer/>

    </>
  );
}

export default App;
