"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const TicketForm = () => {
  const router = useRouter();
  const [ticketData, setTicketData] = useState({
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  });
  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/createticket", {
        method: "POST",
        body: JSON.stringify(ticketData),
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.ok) {
        toast.success("Ticket Created");
        router.push("/");
      }
      if (!response.ok) {
        const data = await response.json()
        toast.error(`Ticket Submission Failed: ${data.message && data.message}`);
        console.log("error from handlesubmit IF Statement");
      }
    } catch (error) {
      console.log("Error from handleSubmit CATCH", error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 w-1/2" method="post">
        <h3>Create Your Ticket</h3>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          required={true}
          value={ticketData.title}
          onChange={(e) =>
            setTicketData((prevData) => ({
              ...prevData,
              title: e.target.value,
            }))
          }
        />
        <label>description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          required={true}
          value={ticketData.description}
          rows={5}
          onChange={(e) =>
            setTicketData((prevData) => ({
              ...prevData,
              description: e.target.value,
            }))
          }
        />
        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            value={1}
            checked={ticketData.priority == 1}
            onChange={(e) => {
              setTicketData((prevData) => ({
                ...prevData,
                priority: e.target.value,
              }));
            }}
          />
          <label>1</label>
          <input
            type="radio"
            id="priority-2"
            name="priority"
            value={2}
            checked={ticketData.priority == 2}
            onChange={(e) => {
              setTicketData((prevData) => ({
                ...prevData,
                priority: e.target.value,
              }));
            }}
          />
          <label>2</label>
          <input
            type="radio"
            id="priority-3"
            name="priority"
            value={3}
            checked={ticketData.priority == 3}
            onChange={(e) => {
              setTicketData((prevData) => ({
                ...prevData,
                priority: e.target.value,
              }));
            }}
          />
          <label>3</label>
          <input
            type="radio"
            id="priority-4"
            name="priority"
            value={4}
            checked={ticketData.priority == 4}
            onChange={(e) => {
              setTicketData((prevData) => ({
                ...prevData,
                priority: e.target.value,
              }));
            }}
          />
          <label>4</label>
          <input
            type="radio"
            id="priority-5"
            name="priority"
            value={5}
            checked={ticketData.priority == 5}
            onChange={(e) => {
              setTicketData((prevData) => ({
                ...prevData,
                priority: e.target.value,
              }));
            }}
          />
          <label>5</label>
        </div>
        <label>Category</label>
        <select
          name="categor"
          id="category"
          value={ticketData.category}
          onChange={(e) => {
            setTicketData((prevData) => ({
              ...prevData,
              category: e.target.value,
            }));
          }}
        >
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Project">Project</option>
        </select>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={ticketData.progress}
          min={0}
          max={100}
          onChange={(e) => {
            setTicketData((prevData) => ({
              ...prevData,
              progress: e.target.value,
            }));
          }}
        />
        <label>Status</label>
        <select
          name="status"
          id="status"
          value={ticketData.status}
          onChange={(e) => {
            setTicketData((prevData) => ({
              ...prevData,
              status: e.target.value,
            }));
          }}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <button className="btn max-w-xs" onClick={handleSubmit}>
          Create Ticket
        </button>
      </div>
    </div>
  );
};

export default TicketForm;
