import React, { Component } from 'react';
import Square from './Square';
import { connect } from 'react-redux';
import './Board.css';

const BOARD_WIDTH = 460;


class Board extends Component {
	renderSquares(){
		const {won} = this.props.game,
			  margin = 3,
			  padding = 3;

		const width = ( BOARD_WIDTH - ( (margin * 3 *2) + (padding * 3 *2) ) )/3;	

		return this.props.game.board.map( (square,id)=>{
				const {cord,state} = square,
					  {x, y} = square.cord;
					  
				const key = `${x},${y}`;
				const select = won.state && (won.wonLine.indexOf(id) !== -1);
				return( <Square select={select} 
								margin={3}
								width={width}
								key={key}
								cord={cord}
								state={state}
								onClick={(old)=>this.props.onClickSqare(old)}
						/> )
			}
		);
	};
  render() {
    return (
      <div className="board" style={{width:BOARD_WIDTH}}>
      		{this.renderSquares()}
      </div>
    );
  }
}

export default connect(
  state => ({
    	game:state.gameReducer
    }),
  dispatch => ({
  	onClickSqare: (old) =>{
  		dispatch({type:'UPDATE_BOARD', old});
  	}
  })
)(Board);


