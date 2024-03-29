// Importa las bibliotecas necesarias de Node.js y de terceros.
import express, { urlencoded } from "express";
import morgan from "morgan";
import { config } from "dotenv";
import productsRouter from "./routes/products.routes.js";
config();

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(morgan("dev"));
app.use("/api/clothing", productsRouter);

export default app;
