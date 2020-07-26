import React from 'react';
import {Link } from "react-router-dom";

export const HomeButton = () => {
    return (
        <div id="moveButton">
        <Link to="/drive"><button>
               Go to Drive 
             </button>
         </Link>
        </div>
    )  
}