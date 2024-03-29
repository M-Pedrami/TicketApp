"use client"
import { TiDelete } from "react-icons/ti";
import {useRouter } from "next/navigation";
import { toast } from "react-toastify"
const BASE_URL = process.env.BASE_URL || ""

const DeleteBlock = ({id}) => {
  const router = useRouter()
  const ID = id
  const handleDelete = async () =>{
    try {
      const response = await fetch(`${BASE_URL}/api/deleteticket/${ID}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }})
      if(response.ok){
        toast.success("Ticket Deleted")
        router.refresh()
      }
      
    } catch (error) {
      console.log("Error from catch DeleteBlock", error)
    }
  }
  return (
    <TiDelete className="text-red-400 hover:text-red-200 cursor-pointer text-xl absolute right-2 top-4"  onClick={handleDelete} />
  );
};

export default DeleteBlock;
