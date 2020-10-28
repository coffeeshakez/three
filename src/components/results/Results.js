import React from 'react';
import "./Results.css";
import { Overlay } from '../overlay/Overlay';

export const Results = (props) => {
    return (
        <Overlay>
            <h1>Results:</h1>
            <ul className="result-list">
                <li className="result-list__item">Hits: {props.props.hits}</li>
                <li className="result-list__item">misses: {props.props.misses}</li>
                <li className="result-list__item">shots fired: {props.props.misses + props.props.hits}</li>
                <li className="result-list__item">Precision: {Math.round((props.props.hits - props.props.misses) / props.props.hits * 100)}%</li>
                <li className="result-list__item">Time to target: {(props.props.totalTimeOnTask / props.props.hits).toFixed(3) + " s" }</li>
            </ul>
        </Overlay>
    )
}
