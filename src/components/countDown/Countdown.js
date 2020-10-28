import React from 'react';
import "./Countdown.css";
import { Overlay } from '../overlay/Overlay';

export const Countdown = (props) => {
    return (
        <Overlay>
            {!props.props.hasStarted &&
                <h1>Click To Start</h1>
            }
            {props.props.countDownRunning &&
                <h1>Starting in: {props.props.countDownTimer}</h1>
            }
        </Overlay>
    );
}