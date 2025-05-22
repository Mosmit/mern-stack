import express, {Request, Response} from "express";
import mongoose from "mongoose";


const app = express();

const db = mongoose.connect("mongodb+srv://sirmosmit10:Mosmit10$@cluster0.wifaipd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.get("/", (req: Request, res: Response) => {
    res.send("hello world mos");
});

app.listen(5000);
