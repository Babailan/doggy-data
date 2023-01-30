// don't mind this file this is just for testing the mongo.

const { MongoClient, ObjectId } = require("mongodb");
const { randomBytes } = require("crypto");
const uri = "mongodb://localhost:27017";

async function run() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://read_dog:eThS2MFOqiwAQuln@cluster0.dgb4wek.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db("akc");
    const haleluja = db.collection("breeds");

    const query = "bulldog".replace(" ", "|");

    const regex = new RegExp(query, "gi");
    const cursor = haleluja.find({
      "settings.current_breed": regex,
    });

    await cursor.forEach((v) => {
      console.log(v);
    });
    console.log("Finished");
  } catch (error) {
    console.log(error);
  }
}

run();
