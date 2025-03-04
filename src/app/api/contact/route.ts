import { contactFormSchema } from "@/lib/contactSchema";
import { dbconnect } from "@/lib/dbconnect";
import contact from "@/model/contact";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("Connecting to MongoDB...");
    await dbconnect();
    console.log("Connected to MongoDB.");
    const body = await req.json();
    console.log("Received data:", body);
    const validatedData = contactFormSchema.parse(body);
    console.log("Validated data:", validatedData);
    await contact.create(validatedData);
    console.log("Data saved to MongoDB.");
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { message: "Error while contacting me", error },
      { status: 500 }
    );
  }
}
