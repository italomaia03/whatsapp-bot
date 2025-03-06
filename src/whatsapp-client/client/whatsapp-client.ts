import { Request, Response, Router } from "express";
import { AbsentWebhookVerificationTokenError } from "../errors/absent-webhook-verification-token.error";
import { AbsentWhatsAppToken } from "../errors/absent-whatsapp-token.error";

export class WhatsAppClient {
  constructor(
    private readonly _router: Router,
    private readonly webhookVerificationToken?: string,
    private readonly whatsappToken?: string
  ) {
    if (!webhookVerificationToken)
      throw new AbsentWebhookVerificationTokenError(
        "Please, provide the webhook verification token"
      );
    if (!whatsappToken)
      throw new AbsentWhatsAppToken(
        "Please, provide the webhook verification token"
      );
  }

  public validateWebhook() {
    this._router.get("/webhook", (req, res) => this._validateWebhook(req, res));
  }

  public handleIncomingMessages() {
    this._router.post("/webhook", (req, res) => this._handleIncomingMessages(req, res))
  }

  private _validateWebhook(req: Request, res: Response) {
    const mode = req.query["hub.mode"] as string;
    const token = req.query["hub.verify_token"] as string;
    const challenge = req.query["hub.challenge"] as string;
    const response = mode && token === this.webhookVerificationToken ? challenge : null;
    if (response) {
      res.status(200).send(challenge);
    } else res.sendStatus(403);
  }

  private _handleIncomingMessages(req: Request, res: Response) {
    this.whatsappToken;
    console.log(req.body);
    res.sendStatus(200);
  }

  public get router() {
    return this._router;
  }
}
