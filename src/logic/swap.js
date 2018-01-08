export default function(turn, board, won){
	if(!won && boardIsEnd(board)){
		return 'end'	
	}
	if(turn === 'X'){
		return '0'
	}
	return 'X'
}

function boardIsEnd(board){
	let result = true;
	board.forEach((sq)=>{
		if(!sq.state.length){
			result = false;
		}
	});
	return result;
}