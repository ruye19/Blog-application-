import express from 'express';
import cors from 'cors';
import postRouter from "./routes/Posts.js";
import userRouter from "./routes/User.js";       
import authRouter from "./routes/Auth.js";
import cookieParser from "cookie-parser"

 
const app = express();

app.use(cors())

app.use(express.json());
app.use(cookieParser)

app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(5500, () => {
  console.log("server started on port 5500");
});
