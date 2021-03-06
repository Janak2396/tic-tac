import { useRef } from "react";
import '../Home/PlayerInfo.css'
import { useNavigate } from 'react-router-dom';

export default function PlayerInfo(props){
    const playeroneRef = useRef(); 
	const playertwoRef = useRef();
    const navigate = useNavigate();
    const SubmitHandler =()=>
    {
        if((playeroneRef.current.value === '' ) || (playertwoRef.current.value === '' ))
        {
            alert("Enter Your Name")
        }
       else{
           
           props.setUser([playeroneRef.current.value,playertwoRef.current.value]);
           return(navigate('/TicTac'))
       }
        
    }

    
    return(
      <div className="user-container">
        <div className="card-user">
			Player 1: <input maxlength="8" type="text" placeholder='Enter Your Name' ref={playeroneRef}/>
			Player 2: <input maxlength="8" type="text" placeholder='Enter Your Name' ref={playertwoRef}/><br/>
            <button className="btn" onClick={()=>SubmitHandler()}>Let's Play</button>
	    </div>
        </div>
    )
}
