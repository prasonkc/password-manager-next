import { connectToDB } from "@/lib/db";
import UserData from "@/models/datamodel";

export async function POST(req) {
  try {
    const body = await req.json();
    const { URL, userName, password } = body;

    if (!URL || !userName || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await connectToDB(process.env.MONGODB_URI);

    const newUserData = new UserData({ URL, userName, password });
    const result = await newUserData.save();

    return new Response(
      JSON.stringify({ message: "Data Saved", entry: result }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to save data", details: err }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
