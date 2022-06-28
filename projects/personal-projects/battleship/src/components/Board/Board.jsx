import Grid from '../Grid/Grid';
import LetterColumn from '../LetterColumn/LetterColumn';
import NumberRow from '../NumberRow/NumberRow';
import './board.css'

const Board = () => {
  return(
    <div className="flex">
      <LetterColumn/>
      <NumberRow/>
      <Grid/>
  </div>
  )
}

export default Board;