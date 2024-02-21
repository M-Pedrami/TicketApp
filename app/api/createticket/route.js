//Connect to MongoDB
import connectDB from "../../(utils)/db.js";
connectDB();

//Ticket Schema
import Ticket from "../../(models)/ticket.js";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {title, description, priority, progress, status, category} = body
    //add validation for missing fields here 
    await Ticket.create({title, description, priority, progress, status, category});
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    console.log("Error From route.js", error)
    return NextResponse.json({ message: "Error From route.js", error }, { status: 500 });
  }
}
