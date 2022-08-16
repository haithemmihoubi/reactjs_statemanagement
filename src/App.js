import React, {createContext, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Navbar} from "./pages/Navbar";
import {Home} from "./pages/Home";
import {Profile} from "./pages/Profile";
import {Contact} from "./pages/Contact";
import {createRenderer} from "react-dom/test-utils";

export const AppContext=createContext(undefined, undefined);

function App(){
    const [username,setUserName]=useState('haithem') ;

    return (
        <div className="App">
            <AppContext.Provider value={{username, setUserName}}>

            <Router>
                <Navbar></Navbar>
                <Routes>
                    <Route path={'/'} element={<Home />}/>
                    <Route path={'/profile'} element={<Profile />}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                    <Route path={'/*'} element={<h1>Page not found</h1>}/>

                </Routes>

            </Router>
            </AppContext.Provider>
        </div>
    );
}

export default App;
