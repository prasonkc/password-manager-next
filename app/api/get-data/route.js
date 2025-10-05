import { connectToDB } from "@/lib/db";
import UserData from "@/models/datamodel";

export async function GET(req) {
  try {
    await connectToDB(process.env.MONGODB_URI);
    const data = await UserData.find();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
