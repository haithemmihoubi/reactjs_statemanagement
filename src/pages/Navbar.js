// @flow
import * as React from 'react';
import {Link} from "react-router-dom";



export function Navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/profile">profile</Link>
            <Link to="/contact">Contact</Link>

        </div>
    );
};