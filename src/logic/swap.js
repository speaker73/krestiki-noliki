
const boardIsEnd = (board) => {
	let result = true;
	board.forEach((sq)=>{
		if(!sq.state.length){
			result = false;
		}
	});
	return result;
}

export default function(turn, board){
	if(boardIsEnd(board)){
		return 'end'	
	}
	if(turn === 'X'){
		return '0'
	}
	return 'X'
}