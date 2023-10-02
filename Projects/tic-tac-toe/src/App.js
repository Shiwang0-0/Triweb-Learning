import { useState } from 'react';
function Square({value,onSquareClick}){
    // const [value,setValue]=useState(null); //value stores the value and setvalue function changes the value.
    // function click()
    // {
    //     setValue('X'); //as onclick works it sets the setvalue to X.
    // }
    return <button className="square" onClick={onSquareClick}>
        {value}
        </button> //empty sqaure before the game begin 
}

export default function Board(){
    const [isNextX,setXIsNext]=useState(true);
    const [squares,setSquares]=useState(Array(9).fill(null)); //array of 9 square which stores the states when game is played.
    function handleClick(i){
        if(squares[i] || calculateWinner(squares))
        {
            return;
        }
        const nextSq=squares.slice();
        if(isNextX)
        {
            nextSq[i]='X';
        }
        else
        {
            nextSq[i]='O';
        }
        setSquares(nextSq);
        setXIsNext(!isNextX);
    }
    const val =squares?.every(ele => ele!==null)
    const winner=calculateWinner(squares);
    let status;
    if(winner)
    {
        status="Winner is : "+winner;
    }
   
    else
    {  
        if(!val)
        {
                status="Next chance : "+(isNextX?'X':'O');
        } 
        else
        {
            status="Draw";
        }
        
    }

    return (    
       <> 
       <div className='status'>{status}</div>
       <div className='completeBoard'>

       
       <div className='centerBoard'>
       <div className="boardRow"> 
        <Square value={squares[0]} onSquareClick={()=>{handleClick(0)}}/>  
             {/* first on click of onSquareClick will work means we have to click,as we click the arrow function of onSquareClick is started it calls Click() and 0th square will be updated. */}
            {/*passing value to the component */}
        <Square value={squares[1]} onSquareClick={()=>{handleClick(1)}}/>
        <Square value={squares[2]} onSquareClick={()=>{handleClick(2)}}/>
        </div>
        </div>
        <div className='centerBoard'> 
        <div className="boardRow"> 
       <Square value={squares[3]} onSquareClick={()=>{handleClick(3)}}/>
       <Square value={squares[4]} onSquareClick={()=>{handleClick(4)}}/>
       <Square value={squares[5]} onSquareClick={()=>{handleClick(5)}}/>
        </div>
        </div>
        <div className='centerBoard'> 
        <div className="boardRow">
        <Square value={squares[6]} onSquareClick={()=>{handleClick(6)}}/>
        <Square value={squares[7]} onSquareClick={()=>{handleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}}/>
        </div>
        </div>
        </div>
        </>
    );
}

function calculateWinner(squares){
    const lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
}


