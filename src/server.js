import dotenv from "dotenv";
import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet'
import mongoose from 'mongoose'

import configDatabase from "./config/database";
import routes from "./routes";

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

mongoose.connect(configDatabase.uri, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  
});

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Servidor de pé em: http://localhost:${PORT}`);
  console.log("Para desligar o servidor: ctrl + c");
});
