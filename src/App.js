import React, { Component } from 'react';
import './App.css';
import {Board} from './components/';
import { connect } from 'react-redux';

class App extends Component {
  turn(){
    const {won, turn} = this.props.game;
    if(turn == 'end'){
      return 'We have a draw!'
    }
    if(won.state){
      return `Yay! ${won.state} won!`
    }
    return `It's ${turn}'s turn.`
  }
  render() {
    return (
      <div>
        <div className='result'>{this.turn()}</div>
        <Board />
      </div>
    );
  }
}

export default connect(
  state => ({
      game:state.gameReducer
    }),
  dispatch => ({})
)(App);
