import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./pages/Navbar";
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contact} from "./pages/Contact";
function App(){
    const [username,setUserName]=useState('haithem') ;
    return (
        <div className="App">
            <Router>
                <Navbar></Navbar>
                <Routes>
                    <Route path={'/'} element={<Home username={username}/>}/>
                    <Route path={'/profile'} element={<Profile username={username} />}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/*'} element={<h1>Page not found</h1>}/>

                </Routes>

            </Router>

        </div>
    );
}

export default App;
