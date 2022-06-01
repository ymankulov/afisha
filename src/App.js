import logo from './logo.svg';
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Performance from "./pages/Performance";
import Kids from "./pages/Kids";
import Music from "./pages/Music";
import Fai from "./pages/Fai";
import Sport from "./pages/Sport";
import Exhibition from "./pages/Exhibition";
import Free from "./pages/Free";
import Cinema from "./pages/Cinema";
import All from "./pages/All";
import Home from "./pages/Home";
import Concerts from "./pages/Concerts";
import Festivals from "./pages/Festivals";
import Other from "./pages/Other";

function App() {
    return (
        <div className="App">
            <Header/>
            <Hero/>
            <Routes>
                <Route path="/all" element={<All/>}/>
                <Route path="/performances" element={<Performance/>}/>
                <Route path="/kids" element={<Kids/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/fairs" element={<Fai/>}/>
                <Route path="/sport" element={<Sport/>}/>
                <Route path="/exhibitions" element={<Exhibition/>}/>
                <Route path="/free" element={<Free/>}/>
                <Route path="/movie" element={<Cinema/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/concerts" element={<Concerts/>}/>
                <Route path="/festivals" element={<Festivals/>}/>
                <Route path="/other" element={<Other/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
