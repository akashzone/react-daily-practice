import TicketNum from "./TicketNum.jsx";
export default function Ticket({ ticket }) {
    console.log("TICKET RECEIVED:", ticket);
    return (
        <>
            {ticket.map((num, idx) => 
                <TicketNum number={num} key={idx} />
            )}
        </>
    );
}
