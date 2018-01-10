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
  save(){
    console.log('save start', this);
   localStorage.setItem('krestiki-noliki', JSON.stringify(this.props.game));
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

 
            <li onClick={this.props.onClickNewGame}>New Game</li>
            <li onClick={ ()=>{ this.save() }}>Save Game</li>
            <li onClick={this.props.loadGame}>Load Game</li>
            <li onClick={this.props.onClickNewGame}>End Game</li>
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
      dispatch({type:'NEW_GAME'});
    },
  loadGame: ()=>{
    dispatch({type:'LOAD_GAME'});
  }    
  })
)(App);
