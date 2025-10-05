import { connectToDB } from "@/lib/db";
import UserData from "@/models/datamodel";

export async function DELETE(req) {
  try {
    const { pathname } = new URL(req.url);
    const segments = pathname.split("/"); 
    const idIndex = segments.findIndex(seg => seg === "api") + 1;
    const id = segments[idIndex]; // gets the dynamic [id] part

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
    }

    await connectToDB(process.env.MONGODB_URI);
    const result = await UserData.findByIdAndDelete(id);

    if (!result) {
      return new Response(JSON.stringify({ error: "Data not found" }), { status: 404 });
    }

    return new Response(
      JSON.stringify({ message: "Deleted successfully", result }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Delete failed", details: err }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
