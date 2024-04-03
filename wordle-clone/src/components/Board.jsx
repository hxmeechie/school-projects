import { NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from "@/Constants";
import Letter from "@/components/Letter";

const Board = () => {
  const board = Array.from({ length: NUMBER_OF_ROWS }).map((_, rowIndex) => (
    <div className="row" key={rowIndex}>
      {Array.from({ length: NUMBER_OF_COLUMNS }).map((_, colIndex) => (
        <Letter key={colIndex} position={colIndex} attempt={rowIndex} />
      ))}
    </div>
  ));

  return <div className="board">{board}</div>;
};

export default Board;
