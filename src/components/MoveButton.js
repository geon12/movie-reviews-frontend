import { BsFillCaretLeftFill,BsFillCaretRightFill } from "react-icons/bs";

function MoveButton({handleMove,goBack}) {
    return <button onClick={handleMove}>{goBack ? <BsFillCaretLeftFill /> : <BsFillCaretRightFill />}</button>;
  }
  
export default MoveButton;