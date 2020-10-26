import React from 'react';

export const Countdown = (props) => {
    return (
        <div className="countdown">
            <h1>{props.countDown}</h1>
        </div>
    );
}