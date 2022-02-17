import React, { useState } from "react";
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import PlayerInfo from "./Home/PlayerInfo";
import Tictac from "./Home/TicTac";
export default function Page(){

    const[user,setUser]=useState([]);
    
    return( 
       
         <Router>
              <Routes >
          
                  <Route exact  path="/" element={<PlayerInfo  user={user} setUser={setUser}/>} />
                  <Route    path="/TicTac" element={<Tictac user={user} setUser={setUser}/>} />   
    
           </Routes>
           </Router>
    ) 
}