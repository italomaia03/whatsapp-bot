import e, { Express } from "express";
import { router } from "./whatsapp-api/routes/router";

const app: Express = e();

app.use(e.json());
app.use(router)

export { app };