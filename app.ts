import { createHandler } from "graphql-http/lib/use/express";
import express, { Express, Request, Response, Application } from 'express';
import { schema } from "./src/graphql";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();


const app: Application = express();
app.use(cors());
app.use(
    "/graphql",
    createHandler({
        schema,
    })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}/graphql`));