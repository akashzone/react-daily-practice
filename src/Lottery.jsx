
import { useState } from 'react';
import './Lottery.css';
import { generateRandomNumber } from './Helper.js';
import Ticket from './Ticket.jsx';
export default function Lottery({n=3,winCondition}) {
    const [ticket, setTicket] = useState(generateRandomNumber(n));
    console.log("CURRENT TICKET:", ticket);

    function buyNewTicket() {
        setTicket(generateRandomNumber(n)); 
    }
    let isWin = winCondition(ticket);
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