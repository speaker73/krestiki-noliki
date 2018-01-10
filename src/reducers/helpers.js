
const copyBoard = (board)=>{
	return board.map((sq)=> { return {...sq, cord:{...sq.cord} } })
};

const findSqareId = (old, board_map)=> {
	let index = undefined;
	board_map.forEach((o,id)=>{
		if( (o.cord.x === old.cord.x) && (o.cord.y === old.cord.y) ){
			index = id;
		}
	});
	return index;
};

const updateBoard = (board, index, turn)=>{
	return board.map((sq, id)=>{
		if(index === id){
			return {...sq, state:turn, cord:{...sq.cord}}
		}
		return {...sq, cord:{...sq.cord}}
	});
};
const board = (size)=>{
	let game_map = [];
	let calc = Math.sqrt(size);
	for (let x = 0; x<calc; x++){
		for (let y = 0; y<calc; y++){
			game_map.push({cord:{x,y}, state:''});
		}	
	}
	return game_map;	 
}
export {
	copyBoard,
	findSqareId,
	updateBoard,
	board
}