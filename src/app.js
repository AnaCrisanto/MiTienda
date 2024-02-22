// Importa las bibliotecas necesarias de Node.js y de terceros.
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";  // Importa dotenv directamente

dotenv.config();  // Configura dotenv

import productsRouter from "./routes/products.routes.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(productsRouter);

export default app;
