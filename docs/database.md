---
sidebar_label: "Access Database"
sidebar_position: 2
---

# MongoDB Database Connection

MongoDB is a popular NoSQL database that allows for easy scaling and high performance. If you're looking to connect to a MongoDB database, there are a few different ways to do so. Here are a few methods that you can use to connect to a MongoDB database hosted on MongoDB Atlas.

## MongoDB Compass

MongoDB Compass is a graphical user interface for MongoDB that allows you to easily navigate and manipulate your databases. To connect to a MongoDB database using MongoDB Compass, you can use the following connection URI:

```bash
mongodb+srv://read_dog:eThS2MFOqiwAQuln@cluster0.dgb4wek.mongodb.net/test
```

## MongoDB Driver

Another way to connect to a MongoDB database is by using one of the many MongoDB drivers available for different programming languages. Each driver provides a way to connect to a MongoDB database using a specific programming language, and most drivers support the MongoDB URI connection format. You can use the following connection URI to connect to a MongoDB database using a driver:

```bash
mongodb+srv://read_dog:eThS2MFOqiwAQuln@cluster0.dgb4wek.mongodb.net/?retryWrites=true&w=majority
```

## MongoDB for VS Code

If you're using Visual Studio Code as your code editor here's the steps.

URI : `mongodb+srv://read_dog:eThS2MFOqiwAQuln@cluster0.dgb4wek.mongodb.net/test`

1. Install the MongoDB extension for VS Code.
2. Open the Command Palette and search for "MongoDB: Connect"
3. Paste the connection URI into the Command Palette.
4. Click "Create New Playground" to start working with the database.

## Mongo Shell

Finally, you can also connect to a MongoDB database using the Mongo shell, a command-line interface for MongoDB. To connect to a MongoDB database using the Mongo shell, you need to run the following command in your terminal or command line interface:

```bash
mongosh "mongodb+srv://cluster0.dgb4wek.mongodb.net/myFirstDatabase" --apiVersion 1 --username read_dog
```

Please note that the provided read-only API key only allows for read operations and does not allow for any modifications to the database. To perform write operations, you will need to provide the appropriate credentials.
