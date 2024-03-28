import express from "express";
import userRouter from "./router/userInfoRouter.js";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';
import connectToDB from "./config/dbConnection.js";
dotenv.config();


const __dirname = path.resolve()

// const __fileName = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__fileName)

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname,'./client/dist')))

app.use('*', (req,res) => {
  res.sendFile(path.join(__dirname,'./client/dist/index.html'), function(error){
    res.status(500).send('error from routing dnkn>>>>',error)
  }
  )
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    await connectToDB()
    console.log(`Server is listening at http://localhost:${PORT}`)
})




export default app;
