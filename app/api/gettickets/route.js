//Connect to MongoDB
import connectDB from "../../(utils)/db.js";
connectDB();

//Ticket Schema
import Ticket from "../../(models)/ticket.js";

import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic'

export async function GET(){
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({tickets}, {status:200})
  } catch (error) {
    console.log("Error From getTickets catch", error)
    NextResponse.json({ message: "Error From route.js", error }, { status: 500 })
  }
}

