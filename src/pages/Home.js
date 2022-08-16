import React, {useContext} from "react";
import {AppContext} from "../App";

export  function Home(props){
const {username,setUserName }=useContext(AppContext);
    return(
        <div>
            <h1>this is home page , username is{username}</h1>
        </div>
    ) ;
}