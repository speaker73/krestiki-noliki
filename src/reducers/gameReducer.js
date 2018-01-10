import { calcWinner, swap } from '../logic';
import { copyBoard, findSqareId, updateBoard, board } from './helpers';

const board_map = board(9);

const initialState = {
  board:copyBoard(board_map),
  won: {state:null},
  wonLine: undefined,
  turn: 'X'
};

export default function gameReducer(state = {...initialState, won:{...initialState.won}}, action) {
  if (action.type === 'UPDATE_BOARD') {
  	if(state.won.state){
          return state;
    }
    if(state.turn === 'end'){
    	return state;
    }	
    const index = findSqareId(action.old, state.board);
    if( !state.board[index].state.length ){
        const clone = {...state, board:updateBoard(state.board, index, state.turn)};
        clone.won = calcWinner( clone.board );
        clone.turn = swap(clone.turn, clone.board);
        return clone;
    }
  	return state;
  } 
  if (action.type === 'NEW_GAME'){
  	return {...initialState, won:{...initialState.won}};
  }
  if(action.type === 'LOAD_GAME'){
    const load =  localStorage.getItem('krestiki-noliki');
    if(load && load.length){
      return JSON.parse(load);
    }
    return {...initialState, won:{...initialState.won}};
  }
  return state;
}

