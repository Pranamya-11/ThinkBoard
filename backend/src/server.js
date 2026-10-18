
import express from "express";
import "dotenv/config";
// const express=require ("express")
import notesRoutes from "./routes/notesRoutes.js"
import {  connectDB } from "./config/db.js";

const app=express();
const PORT=process.env.PORT || 5001
connectDB();

app.use("/api/notes",notesRoutes);

// app.get("/api/notes",(req,res) =>{
//   res.status(200).send("you got 6 notes");
// });




app.use(express.json)
app.listen(PORT,() => {
  console.log("Server started on PORT:",PORT);

});

