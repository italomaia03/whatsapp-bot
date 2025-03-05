import { RawReceivedMessage, ReceivedMessage } from "../@types/message.type";

export class MessagerService {
    private _sender?: string;
    private _receivedMessage?: ReceivedMessage;

    public async handleRawMessage(message: RawReceivedMessage) {
        console.log(message);
    }

    get sender(): string | null {
        return this._sender ?? null;
    }
    
    set sender(sender: string) {
        this._sender = sender;
    }

    get receivedMessage(): ReceivedMessage | null {
        return this._receivedMessage ?? null;
    }
}