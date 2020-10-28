import React from 'react';
import "./Overlay.css";
export const Overlay = (props) => {

    return(
        <div className="overlay">
            {props.children}
        </div>
    )
}