import { calcWinner, swap } from '../logic';

const board_map = ( (size)=>{
	let game_map = [];
	let calc = Math.sqrt(size);
	for (let x = 0; x<calc; x++){
		for (let y = 0; y<calc; y++){
			game_map.push({cord:{x,y}, state:''});
		}	
	}
	return game_map;
} )(9);

export const initialState = {
  board:copyBoard(board_map),
  won: {state:null},
  wonLine: undefined,
  turn: 'X'
};
function copyBoard(board){
	return board.map((sq)=> { return {...sq, cord:{...sq.cord} } })
};
function findSqareId(old, board_map){
	let index = undefined;
	board_map.forEach((o,id)=>{
		if( (o.cord.x === old.cord.x) && (o.cord.y === old.cord.y) ){
			index = id;
		}
	});
	return index;
}
function updateBoard(board,index, turn){
	return board.map((sq, id)=>{
		if(index === id){
			return {...sq, state:turn, cord:{...sq.cord}}
		}
		return {...sq, cord:{...sq.cord}}
	});
}
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
        clone.turn = swap( clone.turn, clone.board, clone.won.state );
        return clone;
    }
  	return state;
  } 
  return state;
}

