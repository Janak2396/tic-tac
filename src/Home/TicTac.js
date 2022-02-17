import './TicTac.css'
import {  useState} from 'react'
import { useNavigate } from 'react-router-dom';

 export default  function Tictac(props){
    const [turn, setTurn] = useState('X');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();
	const navigate = useNavigate();

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
				
				  }
					
			}
		
			
			);
			
            
		}
	};
	
	
	const handleClick = (num) => {
		if(winner){
			return;
		}
		else {
		if (cells[num] !== '') {
			return;
		}
	
		let squares = [...cells];

		if (turn === 'X') {
			squares[num] = 'X';
			setTurn('O');
		} else {
			squares[num] = 'O';
			setTurn('X');
		}
	
		checkForWinner(squares);
		setCells(squares);
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
       
		return <td className='card' onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		
		<div className='container'>
			<div className='user-name'>
			 X : {props.user[0]}<br/>
			 O : {props.user[1]}
			</div>
			<p  className='header'>Turn: {turn}</p> 
			<table>
				<p>X / O</p>
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
			{winner && (
				<>
					<p>{winner} is the winner!</p>
					<button onClick={()=>handleRestart()} >Reset</button>
					<button onClick={()=>handleReset()} >Play Again</button>
				</>
			)}
		</div>
	);

    };
    

	