// @flow
// @flow
import * as React from 'react';
import {useContext, useState} from "react";
import {AppContext} from "../App";


export function ChangeProfile(props) {
const {setUserName}=useContext(AppContext) ;
const  [newUserName,setNewUserName]=useState('') ;
    return (
        <div>
 <input type={"text"} onChange={(event)=>setNewUserName(event.target.value)}  />
 <button onClick={setUserName(newUserName)} >change Username</button>
        </div>
    );
};