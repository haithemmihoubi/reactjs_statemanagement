import React, {useContext} from "react";
import {ChangeProfile} from "./ChangeProfile";
import {AppContext} from "../App";
export function Profile(props) {
    const {username,setUserName}=useContext(AppContext) ;
    return(
        <div className={"profile"}>
            hello profile username is { username}
            <ChangeProfile />

        </div>
    ) ;
}