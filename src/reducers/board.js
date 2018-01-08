
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
		console.log(old, o);
		if( (o.cord.x === old.cord.x) && (o.cord.y === old.cord.y) ){
			index = id;
		}
	});
	return index;
}
function another(turn){
	if(turn === 'X'){
		return '0'
	}
	return 'X'
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a].state && squares[a].state === squares[b].state && squares[a].state === squares[c].state) {
      return squares[a];
    }
  }
  return {state:null};
}
export default function gameReducer(state = initialState, action) {
  if (action.type === 'UPDATE_BOARD') {
  	const clone = {...state};
  	clone.board[findSqareId(action.old, clone.board)].state = clone.turn;
  	clone.turn = another(clone.turn);
  	console.log("clone",clone);
  	if(calculateWinner(clone.board).state){
  		console.log('WE HAVE WINNER', calculateWinner(clone.board).state)
  	}
    return clone;
  } 
  return state;
}

