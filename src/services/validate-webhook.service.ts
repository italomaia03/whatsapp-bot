import { env } from "../config/env.config";

export type ValidateWebhooParams = {
  mode: string;
  token: string;
  challenge: string;
};

export class ValidateWebhookService {
  public handle(params: ValidateWebhooParams) {
    const { mode, token, challenge } = params;

    return mode && token === env.API_WHATSAPP_TOKEN ? challenge : null;
  }
}
