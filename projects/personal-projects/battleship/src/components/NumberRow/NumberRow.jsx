import './numberRow.css';

const NumberColumn = () =>{
  const boardPositionNumbers = [0, 1, 2, 3, 4, 5, 6, 7 , 8 , 9];
  return(
    <div className='vertical-grid'>
      {boardPositionNumbers.map((i) => <div key={i}>{i}</div>)}  
    </div>
  )
}

export default NumberColumn;