import React, { Component } from 'react';
import Scene from '../components/scene';

class Game extends Component {
    state = {  }

    constructor(props){
        super(props);
        this.getGame = this.getGame.bind(this);
    }

    getGame(id){
        switch (id) {
            case "grid-shot":
                return <Scene></Scene>
                
                break;
        
            default:
                break;
        }
    }
    render() { 
        console.log(this.props.location);
        console.log(this.state);
        
        return ( 
            <>
            {this.props.location.state && this.getGame(this.props.location.state.id)}
            </>
         );
    }
}
 

export default Game;