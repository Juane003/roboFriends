import { useEffect, useState } from 'react'
import Button from '../Button/Button';
import './grid.css';

const generateBoard = Array(10*10).fill(0);
const maxWarships = 7;
const minWarships = 3;

const generateWarshipNumber = () =>{
  return Math.floor(Math.random() * maxWarships) + minWarships;
}

const warshipNumber = generateWarshipNumber();
 
for(let i = 0; i < warshipNumber; i++) {
  const warshipPosition = Math.floor(Math.random() * 100) + 1;
  if(generateBoard[warshipPosition] != 1){
    if(
        generateBoard[warshipPosition + 1] != 1
        && generateBoard[warshipPosition - 1] != 1
        && generateBoard[warshipPosition + 10] != 1 
        && generateBoard[warshipPosition - 10] != 1
      ) {
      generateBoard[warshipPosition] = 1;
    }; 
  }
}

const Grid = () => { 
  const [warship, setWarship] = useState();
  const [moveHistory, setMoveHistory] = useState([]);

  const handleClick = (event) => {
    setWarship(event.target.value);
    if (warship === '1') {
      event.target.className = 'warship';
      event.currentTarget.disabled = true;
    } else {
      event.target.className = 'water';
      event.currentTarget.disabled = true;
    }
  }

  return(
    <div className="grid">
      {generateBoard.map((i, j) => <Button className='default' value={i} position={j} key={j} onClick={handleClick}/>)}
    </div>
  )
}

export default Grid;