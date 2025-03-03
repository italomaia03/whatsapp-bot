import { Router } from "express";
import { ValidateWebhookController } from "../controllers/validate-webhook.controller";
import { ValidateWebhookService } from "../services/validate-webhook.service";

const router = Router();
const valideWebhookController = new ValidateWebhookController(
  new ValidateWebhookService(),
);

router.get("/verify-webhook", valideWebhookController.handle);

export { router };
