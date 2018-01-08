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
  board:[...board_map],
  won: undefined,
  wonLine: undefined,
  turn: 'X'
};

function findSqareId(old, board_map){
	let index = undefined;
	board_map.forEach((o,id)=>{
		//console.log(old, o);
		if( (o.cord.x === old.cord.x) && (o.cord.y === old.cord.y) ){
			index = id;
		}
	});
	return index;
}

export default function gameReducer(state = initialState, action) {
  if (action.type === 'UPDATE_BOARD') {
    const index = findSqareId(action.old, state.board);
    if( !state.board[index].state.length ){
        const clone = {...state};
        clone.board[ index ].state = clone.turn;
        clone.turn = swap( clone.turn );
        console.log("clone",clone);
        clone.won = calcWinner( clone.board );
        if(clone.won.state){
          console.log('WE HAVE WINNER', calcWinner(clone.board) )
        }
        return clone
    }
  	return state;
  } 
  return state;
}

