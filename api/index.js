import express from 'express';
import cors from 'cors';
import postRouter from "./routes/Posts.js";
import userRouter from "./routes/User.js";       
import authRouter from "./routes/Auth.js";
import cookieParser from "cookie-parser"
import multer from "multer"

 
const app = express();

app.use(cors())

app.use(express.json());
app.use(cookieParser)

const storage = multer.diskStorage({
  destination:function (req,file,cb){
    cb(null , "../client/public/upload")
},
filename: function (req,file,cb){
  cb(null, Date.now() + file.originalname)
}

})

const upload = multer(storage)
 app.post("/api/upload" , upload.single('file'),function(req,res){
  const file = req.file
  return res.status(200).json(file.filename)
 })

app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(5500, () => {
  console.log("server started on port 5500");
});
