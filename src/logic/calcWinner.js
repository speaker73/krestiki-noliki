export default function(squares) {
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
  let sqare = {state:null};
  let wonLine = [];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a].state && squares[a].state === squares[b].state && squares[a].state === squares[c].state) {
      sqare = squares[a];
      wonLine = lines[i];
    }
  }
  return {...sqare, wonLine};
}

