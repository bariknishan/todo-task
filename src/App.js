
import './App.css';
import Navbar from './Pages/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Task from './Pages/Home/Task';
import ToDo from './Pages/Home/ToDo';
import Calender from './Pages/Home/Calender';
function App() {
  return (
    <div className='app-one' >
     <Navbar></Navbar>
     
    <Routes>
      <Route path='/'  element={<Home></Home>}></Route>
      <Route path='/task'  element={<Task></Task>}></Route>
      <Route path='/todo'  element={<ToDo></ToDo>}></Route>
      <Route path='/calender'  element={<Calender></Calender>}></Route>
    </Routes>
    </div>
  );
}

export default App;
