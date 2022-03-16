import './App.css';
import styled from "styled-components";
import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import MyList from "./pages/MyList";
import LikedList from "./pages/LikedList";
import Setting from "./pages/Setting";
import Dashboard from "./components/Dashboard"

import { BrowserRouter, Routes, Route} from "react-router-dom";
const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                     <Routes>
                         {/*<Route path="/" element={<Home />} />*/}
                         <Route path="/mylist" element={<MyList />} />
                         <Route path="/likedlist" element={<LikedList />} />
                         <Route path="/setting" element={<Setting />} />
                     </Routes>
                <Dashboard />
            </BrowserRouter>

        );
    }
}


export default App;
