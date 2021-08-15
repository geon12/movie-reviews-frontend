import { BsFillCaretLeftFill,BsFillCaretRightFill } from "react-icons/bs";

function MoveButton({handleMove,goBack}) {
    return ( 
    <span className="d-flex align-items-center btn" onClick={handleMove}>
      {goBack ? <BsFillCaretLeftFill size={30}/> : <BsFillCaretRightFill size={30}/>}
    </span>
    )
  }
  
export default MoveButton;