import type { VercelRequest, VercelResponse } from "@vercel/node";
import connectToDatabase from "../../mongodb/db";

export default async function getBreed(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const { slug } = request.query;
    const client = await connectToDatabase();
    const db = client.db("akc");
    const breed = await db
      .collection("breeds")
      .findOne({ "settings.current_breed": slug });
    if (breed) {
      await client.close();
      response.status(200).send(breed).end();
    } else {
      await client.close();
      throw "No breed list found";
    }
  } catch (error) {
    response
      .status(500)
      .send("Error: " + error)
      .end();
  }
}
