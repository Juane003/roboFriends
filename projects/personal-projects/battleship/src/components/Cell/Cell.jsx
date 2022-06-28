import './cell.css';

const Cell = ( {text, value, onClick} ) => {
  return <td 
          className="cell" 
          value={value} 
          onClick={onClick} 
          >
            {text}
          </td>
}

export default Cell;