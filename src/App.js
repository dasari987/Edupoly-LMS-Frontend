import logo from './logo.svg';
import './App.css';
import Allcourses from './features/allcourses/Allcourses';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
       <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  );
}

export default App;
