import { MessageTypesEnum } from "../enums/message-types.enum";

export type WhatsAppMessage = {
    messaging_product: string;
    to: string;
    type: MessageTypesEnum;
    interactive?: InteractiveMessage;
    text?: TextMessage;
};

export type InteractiveMessage = {
    type: string;
    body: { text: string };
    header?: string;
    footer?: { text: string };
    action: InteractiveMessageAction;
};

export type InteractiveMessageAction = {
    buttons: InteractiveMessageButton[];
}

export type InteractiveMessageButton = {
    type: string;
    reply: {
        id: string;
        title: string;
    };
}

export type TextMessage = {
    preview_url?: boolean;
    body: string;
}

export type RawReceivedMessage = {
    object: string;
    entry: ReceivedMessageProps[]
}

export type ReceivedMessageProps = {
    id: string;
    changes: ReceivedMessageChanges[];
}

export type ReceivedMessageChanges = {
    field: string;
    value: ReceivedMessageChangesValue;
}

export type ReceivedMessageChangesValue = {
    contacts: ReceivedMessageContact[];
    messages: ReceivedMessage[];
    metadata: ReceivedMessageMetadata;
}

export type ReceivedMessageContact = {
    profile: { name: string };
    wa_id: string;
}

export type ReceivedMessage = Omit<WhatsAppMessage, 'messaging_product' | 'to'>;

export type ReceivedMessageMetadata = {
    display_phone_number: string;
    phone_number_id: string;
}