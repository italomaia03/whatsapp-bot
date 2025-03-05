import { MessageTypesEnum } from "../enums/message-types.enum";

export type Message = {
    messaging_product: string;
    to: string;
    type: MessageTypesEnum;
    interactive?: InteractiveMessage;
    text?: TextMessage;
};

type InteractiveMessage = {
    type: string;
    body: { text: string };
    header?: string;
    footer?: { text: string };
    action: InteractiveMessageAction;
};

type InteractiveMessageAction = {
    buttons: InteractiveMessageButton[];
}

type InteractiveMessageButton = {
    type: string;
    reply: {
        id: string;
        title: string;
    };
}

type TextMessage = {
    preview_url?: boolean;
    body: string;
}