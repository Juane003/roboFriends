import './button.css';

const Button = ({ className, onClick, value, position }) => {
  return(
    <button 
      className={className} 
      onClick={onClick} 
      value={value}
      position={position}>
    </button>
  )
}

export default Button;