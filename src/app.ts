import e, { Express } from "express";
import { router } from "./routes/router";

const app: Express = e();

app.use(e.json());
app.use(router)

export { app };