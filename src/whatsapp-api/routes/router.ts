import { Request, Response, Router } from "express";
import { ValidateWebhookController } from "../controllers/validate-webhook.controller";
import { ValidateWebhookService } from "../services/validate-webhook.service";
import { MessagerController } from "../controllers/messager.controller";
import { MessagerService } from "../services/messager.service";

const router = Router();
const validateWebhookService = new ValidateWebhookService();
const valideWebhookController = new ValidateWebhookController(
  validateWebhookService
);

const messagerService = new MessagerService();
const messagerController = new MessagerController(messagerService);

router.get("/webhook", (req, res) => valideWebhookController.handle(req, res));
router.post("/webhook", handlePost);

function handlePost(req: Request, res: Response) {
  messagerController.handle(req, res);
}

export { router };
