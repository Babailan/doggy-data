import type { VercelRequest, VercelResponse } from "@vercel/node";
import connectToDatabase from "../../mongodb/db";
import { ObjectId } from "mongodb";

export default async function getBreedList(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    const client = await connectToDatabase();
    const db = client.db("akc");
    const breedList = await db
      .collection("breeds")
      .findOne({ _id: new ObjectId("63ce818dac514953330336eb") });
    if (breedList) {
      await client.close();
      response.status(200).send(breedList.data).end();
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
