import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

// Connect to MongoDB database using the connection string from environment variables
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string) // Connect to MongoDB database
  .then(() => console.log("Connected to database!")); // Log successful database connection

// Initialize Express application
const app = express(); // Create Express app

// Configure middleware
app.use(express.json()); // Parse JSON bodies in requests
app.use(cors()); // Enable CORS for all routes

// Define a test route to check if the server is running
app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.get("health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

// Mount user route module under the "/api/my/user" endpoint
app.use("/api/my/user", myUserRoute); // Delegate requests with path starting with "/api/my/user" to the user route module

// Start the server and listen on port 7000
app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});
