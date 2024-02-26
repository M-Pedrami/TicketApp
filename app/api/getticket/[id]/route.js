import Ticket from "@/app/(models)/ticket";
import connectDB from "@/app/(utils)/db";
import { NextResponse } from "next/server";
connectDB();

export async function GET(req, { params }) {
  try {
    const id = params.id;
    const found = await Ticket.findById(id);
    return NextResponse.json({ found }, {status: 200});
  } catch (error) {
    console.log("ERROR FROM getticket/route", error);
    return NextResponse.json({ status: 500 }, { message: "Invalid ID" });
  }
}
