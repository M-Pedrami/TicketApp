import Ticket from "@/app/(models)/ticket";
import connectDB from "@/app/(utils)/db";
import { NextResponse } from "next/server";
connectDB();

export async function DELETE(req, {params}) {
  try {
    const id = params.id
    const response = await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 202 });
  } catch (error) {
    console.log("Error from catch deleteTicket", error);
    return NextResponse.json({ message: "Unable To Delete" });
  }
}
