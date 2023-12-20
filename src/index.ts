import { configEnv } from "./config/EnvExtracter";
import { connect } from "./config/database/connection";
import express from "express";
import { UsersRouter } from "./routes/usersRouetes";
import { errorHandler } from "./error/errorHandler";
import { CardsRouter } from "./routes/cardsRouetes";
var cors = require("cors");
const app = express();
configEnv();
app.use(cors({ origin: process.env.CLIENT_URL}));
connect();

app.use(express.json());
app.listen(8080);
app.use("/users", UsersRouter);
app.use("/cards", CardsRouter);
app.use(errorHandler);
