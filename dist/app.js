"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("graphql-http/lib/use/express");
const express_2 = __importDefault(require("express"));
const graphql_1 = require("./src/graphql");
const dotenv_1 = __importDefault(require("dotenv"));
//For env File 
dotenv_1.default.config();
const app = (0, express_2.default)();
app.use("/graphql", (0, express_1.createHandler)({
    schema: graphql_1.schema,
}));
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}/graphql`));
