import type { VercelRequest, VercelResponse } from "@vercel/node";
import connectToDatabase from "../../mongodb/db";
import formatSearchString from "../../libs/search";

export default async function getBreedList(
  request: VercelRequest,
  response: VercelResponse
) {
  const { q, limit } = request.query;
  if (!q) {
    response.status(400).send({ message: "Missing search query" }).end();
    return;
  }
  try {
    const client = await connectToDatabase();
    const db = client.db("akc");
    const format = formatSearchString(q as string);
    const regex = new RegExp(format, "g");
    const breedList = await db
      .collection("breeds")
      .find(
        {
          "settings.current_breed": regex,
        },
        { limit: limit && 10 }
      )
      .toArray();

    if (breedList.length > 0) {
      response.status(200).send(breedList).end();
      await client.close();
    } else {
      response.status(404).send({ message: "No breeds found" }).end();
      await client.close();
    }
  } catch (error) {
    response.status(500).send({ message: error.toString() }).end();
  }
}
