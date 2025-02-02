import express from "express";
import jwt from "jsonwebtoken";
import { connectDB, UserModel } from "./db";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.use("/", (req, res) => {
  res.send("Hello World From node and Typescript");
});

app.post("/api/v1/signup", async (req, res) => {
  const { username, password } = req.body;

  await UserModel.create({
    username: username,
    password: password,
  });

  res.json({
    message: "User Signed Up",
  });
});

app.get("/api/v1/signup", (req, res) => {});

app.post("/api/v1/content", (req, res) => {});

app.get("/api/v1/content", (req, res) => {});

app.delete("/api/v1/content", (req, res) => {});

app.post("/api/v1/brain/share", (req, res) => {});

app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
