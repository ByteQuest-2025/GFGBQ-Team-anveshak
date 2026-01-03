import express from 'express'
import cors from 'cors'
import 'dotenv/config';
import connectDb from './configs/db.js';
import userRouter from './routes/userRoutes.js';


const app = express();
const PORT = process.env.PORT || 3000;
connectDb();

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=> { res.send('Server is Live')});
app.use('/api/user', userRouter);


app.listen(PORT, ()=> {console.log("Server is Listening on port", PORT)})