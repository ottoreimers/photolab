import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotoNavbar from './components/Navbar';
import HomeLayout from './components/HomeLayout';
import UserLayout from './components/UserLayout';

function App() {
  return (
    <BrowserRouter>
    <div>

        <PhotoNavbar />
        <Routes>
        <Route exact path="/" element={<HomeLayout />} />
        <Route exact path="/profile" element={<UserLayout />} />
        </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
