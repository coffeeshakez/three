import React, { Component } from 'react';
import './InGameTopInfo.css';
import '../../styles/emoji.css';

class InGameTopInfo extends Component {
    state = {  }
    render() { 
        return ( 
            <ul className="in-game-top-info">
                <li className="in-game-top-info__element emoji emoji--timer"><h1>{this.props.props.totalTimeOnTaskRemaining}</h1></li>
                <li className="in-game-top-info__element emoji emoji--bullseye"><h1>{this.props.props.hits}</h1></li>
                <li className="in-game-top-info__element emoji emoji--miss"><h1>{this.props.props.misses}</h1></li>
                <li className="in-game-top-info__element"><h1>{Math.round((this.props.props.hits - this.props.props.misses) / this.props.props.hits * 100)}%</h1></li>
                
            </ul>
         );
    }
}
 
export default InGameTopInfo;