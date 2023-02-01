import type { VercelRequest, VercelResponse } from "@vercel/node";
import { ObjectId } from "mongodb";
import connectToDatabase from "../../mongodb/db";

export default async function getBreed(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const { q } = request.query;
    const client = await connectToDatabase();

    const db = client.db("akc");
    const breed = await db
      .collection("breeds")
      .findOne({ _id: new ObjectId(q as string) });

    if (breed) {
      await client.close();
      response.status(200).send(breed).end();
    } else {
      await client.close();
      response.status(200).send("No breed was found").end();
    }
  } catch (error) {
    response
      .status(500)
      .send("message: " + error)
      .end();
  }
}
