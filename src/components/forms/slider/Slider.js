import React from 'react';
import './SliderStyles.css';

const Slider = (props) => (

        <div className="slidercontainer">
            <input type="range" min="1" max="100" value={props.value} onChange={props.onChange} class="slider" id="myRange"></input>
            <p>{props.value / 1000}</p>
        </div>
    )


export default Slider;
    
