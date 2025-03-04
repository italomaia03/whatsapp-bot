import { Router } from "express";
import { ValidateWebhookController } from "../controllers/validate-webhook.controller";
import { ValidateWebhookService } from "../services/validate-webhook.service";

const router = Router();
const validateWebhookService = new ValidateWebhookService();
const valideWebhookController = new ValidateWebhookController(
  validateWebhookService
);

router.get("/verify-webhook", (req, res) => valideWebhookController.handle(req, res));

export { router };
