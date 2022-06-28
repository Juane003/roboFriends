import './letterColumn.css'

const LetterRow = () =>{
  const boardPositionLetters = ['A', 'B', 'C' ,'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  return(
    <div className='flex-horizontal'>
      <div className='horizontal-grid'>
        {boardPositionLetters.map((i) => <p key={i}>{i}</p>)}
      </div>
    </div>
  )
}

export default LetterRow;