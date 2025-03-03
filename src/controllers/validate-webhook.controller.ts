import { Request, Response } from "express";
import { ValidateWebhookService } from "../services/validate-webhook.service";

export class ValidateWebhookController {
  constructor(private readonly service: ValidateWebhookService) {}

  public handle(req: Request, res: Response) {
    const mode = req.query["hub.mode"] as string;
    const token = req.query["hub.verify_token"] as string;
    const challenge = req.query["hub.challenge"] as string;
    const response = this.service.handle({ mode, token, challenge });
    if (response) {
      res.status(200).send(challenge);
    } else res.sendStatus(403);
  }
}
