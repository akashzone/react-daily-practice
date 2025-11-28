
import { useState } from 'react';
import './Lottery.css';
import { generateRandomNumber } from './Helper.js';
import Ticket from './Ticket.jsx';
export default function Lottery() {
    const [ticket, setTicket] = useState(generateRandomNumber(3));
    console.log("CURRENT TICKET:", ticket);

    function buyNewTicket() {
        setTicket(generateRandomNumber(3)); 
    }
    let isWin = ticket.reduce((sum, curr)=> sum + curr, 0) === 15;
    return (
        <>
        <h1>Lottery Game</h1>
        <div className="ticket">
            <Ticket ticket={ticket} />
        </div>

        <button onClick={buyNewTicket}>Buy new Ticket</button>
        {isWin && <h2 className="win">Congradulations !!</h2> }
        </>
    );
}