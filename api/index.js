import express from 'express';
import cors from 'cors';
import postRouter from "./routes/Posts.js";
import userRouter from "./routes/User.js";       
import authRouter from "./routes/Auth.js";

 
const app = express();
app.use(cors())

app.use(express.json());

app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(5500, () => {
  console.log("server started on port 5500");
});
