import React, { Component } from 'react';
import './App.css';
import {Board} from './components/';
import { connect } from 'react-redux';

class App extends Component {
  turn(){
    const {won, turn} = this.props.game;
    if(won.state){
      return `Yay! ${won.state} won!`
    }
    if(turn == 'end'){
      return 'We have a draw!'
    }
    return `It's ${turn}'s turn.`
  }
  render() {
    return (
      <div className='game-screen'>
        <div>
          <div className='result'>{this.turn()}</div>
          <Board />
        </div>
        <div className='menu'>
          <ul>
            <li onClick={ ()=>{ this.props.onClickNewGame() } }>New Game</li>
            <li>Save Game</li>
            <li>Load Game</li>
            <li>End Game</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
      game:state.gameReducer
    }),
  dispatch => ({
  onClickNewGame: () =>{
      dispatch({type:'NEW_GAME', n:''});
    }    
  })
)(App);
