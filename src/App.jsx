import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import SingnIn from "./assets/pages/SignIn";
import SignUp from "./assets/pages/SignUp";
import About from "./assets/pages/About";
import Profile from "./assets/pages/Profile";
import Header from "./assets/components/Header";

export default function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/sign-in" element={<SingnIn/>}></Route>
    <Route path="/sign-up" element={<SignUp/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
    
   </Routes>
   </BrowserRouter>
  )
}
