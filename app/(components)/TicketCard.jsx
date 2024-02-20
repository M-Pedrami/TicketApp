import DeleteBlock from "./DeleteBlock";
import Priority from "./Priority";
import ProgressBar from "./ProgressBar";
import Status from "./Status";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <Priority />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        this is the ticket description!Please do this ticket
      </p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col ">
          <p className="text-xs my-1">08/31/23 10:34PM</p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end">
          <Status />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
