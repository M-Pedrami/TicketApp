import Ticket from "@/app/(models)/ticket";
import connectDB from "@/app/(utils)/db";
import { NextResponse } from "next/server";
connectDB();

export async function PUT(req, { params }) {
  try {
    const id = params.id;
    const body = await req.json();
    const { title, description, priority, progress, status, category } = body;
    const updateTicket = await Ticket.findByIdAndUpdate(id, {
      title,
      description,
      priority,
      progress,
      status,
      category,
    });
    return NextResponse.json({ message: "Ticket Updated" }, { status: 201 });
  } catch (error) {
    console.log("ERROR FROM UPDATE API");
    return NextResponse.json({ message: "Update Failed" }, { status: 500 });
  }
}
