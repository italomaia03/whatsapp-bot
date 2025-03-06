import e, { Express, Router } from "express";
import { WhatsAppClient } from "./whatsapp-client/client/whatsapp-client";
import { env } from "./config/env.config";

const app: Express = e();
const webhookVerificationToken = env.API_WHATSAPP_TOKEN;
const whatsAppToken = env.WHATSAPP_ACCESS_TOKEN;
const whatsAppClient = new WhatsAppClient(
  Router(),
  webhookVerificationToken,
  whatsAppToken
);

app.use(e.json());
whatsAppClient.validateWebhook();
whatsAppClient.handleIncomingMessages();
app.use(whatsAppClient.router);

export { app };
