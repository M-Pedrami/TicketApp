import DeleteBlock from "./DeleteBlock";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import Status from "./Status";

const TicketCard = ({ticket}) => {
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;
  
    return formattedDate;
  };
  const dateCreated = formatDate(ticket.createdAt)
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Priority priority={ticket.priority} />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        {ticket.description}
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col ">
          <p className="text-xs my-1">{dateCreated}</p>
          <ProgressBar progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <Status status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
