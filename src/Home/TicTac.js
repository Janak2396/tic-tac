import './TicTac.css'
import {  useState} from 'react'
import { renderMatches, useNavigate } from 'react-router-dom';

 export default  function Tictac(props){
    const [turn, setTurn] = useState('X');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();
	const navigate = useNavigate();
	const [count,setCount] = useState(0);
	const[draw,setDraw] = useState('')
	
	const checkForWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagnol: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};
       
	
       
		for (let combo in combos) {
			
			combos[combo].forEach((pattern) => {
				
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					
				} else {
					if(squares[pattern[0]] === squares[pattern[1]] &&
						squares[pattern[1]] === squares[pattern[2]])
					{
						 //console.log(pattern)
						setWinner(squares[pattern[0]]);
						handleClick();
					}
					else{
						 if(count === 8)
						 {
							 setDraw("Draw")
						 }
					}
				
				  }
				 
			}
			); 
		}
	};
	 
	
	const handleClick = (num) => {
		
		if(winner){
			return ;
		}
		else {
		if (cells[num] !== '') {

			return ;
		}
	
		let squares = [...cells];
	//	console.log(squares)
		if (turn === 'X') {
			squares[num] = 'X';
			
			setTurn('O');
			setCount(count+1)
		} else {
			squares[num] = 'O';
			setTurn('X');
			setCount(count+1)
		}
		setCells(squares);
		checkForWinner(squares);
		
	}
	};
	const handleReset = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	}
	const handleRestart = () => {
		
		return( navigate('/'))
	};
	
	const Cell = ({ num }) => {
       
		return <td  className={(cells[num]=== `X`) ? "card" : "Ocard"} onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		
		<div className='container'>
			
			<div className='header'>
				<div className='xandy'>
					<p className='x'>X : {props.user[0]}</p>
					
					<p className='o'> O :{props.user[1]}</p>
				</div>
				<p className='userTurn'>Turn: {turn}</p> 
			</div>
			<table>
				<tbody>
					<tr >
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			
			{winner  &&(
				<>
					
					<p className='finalresult'>{winner} is the winner!!!</p>
					<div className='reset'>
					<button className="btn" onClick={()=>handleRestart()} >Reset</button>
					<button className="btn" onClick={()=>handleReset()} >Play Again</button>
					</div>
				</>
			)||draw &&(
				<>
					
					<p  className='finalresult'>Game is {draw} !!!</p>
					<div className='reset'>
					<button className="btn" onClick={()=>handleRestart()} >Reset</button>
					<button className="btn" onClick={()=>handleReset()} >Play Again</button>
					</div>
				</>
			)
			
			}
		</div>
	);

    };
    

	
