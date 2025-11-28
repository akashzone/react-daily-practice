
import { useState } from 'react';
import './Lottery.css';
import { generateRandomNumber } from './Ticket.js';
export default function Lottery() {
    const [ticket, setTicket] = useState(generateRandomNumber(3));

    function buyNewTicket() {
        setTicket(generateRandomNumber(3)); 
    }
    let isWin = ticket.reduce((sum, curr)=> sum + curr, 0) === 15;
    return (
        <>
        <h1>Lottery Game</h1>
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>

        <button onClick={buyNewTicket}>Buy new Ticket</button>
        {isWin && <h2 className="win">Congradulations !!</h2> }
        </>
    );
}