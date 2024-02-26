import TicketForm from "@/app/(components)/TicketForm";
const getTicket = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/getticket/${id}`, {
      cache: "no-store",
    });
    if (response.ok) {
      const ticket = await response.json();
      return ticket.found;
    }
  } catch (error) {
    console.log("ERROR from Catch getTicket/ticketpage");
  }
};

const TicketPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true;
  let ticketData = {};
  if (EDITMODE) {
    ticketData = await getTicket(params.id);
  } else {
    ticketData = {
      _id: "new"
    }
  }
  return <TicketForm ticket={ticketData}/>;
};

export default TicketPage;
