import React from "react";
export function Profile(props) {
    return(
        <div className={"profile"}>
            <h1>hello profile username is { props.username}</h1>

        </div>
    ) ;
}