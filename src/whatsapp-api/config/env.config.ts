type EnvironmentVariables = {
    PORT?: string;
    DATABASE_URL?: string;
    DATABASE_USER?: string;
    DATABASE_PASSWORD?: string;
    API_WHATSAPP_TOKEN?: string;
    WHATSAPP_ACCESS_TOKEN?: string;
};

export const env: EnvironmentVariables = {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    API_WHATSAPP_TOKEN: process.env.API_WHATSAPP_TOKEN,
    WHATSAPP_ACCESS_TOKEN: process.env.WHATSAPP_ACCESS_TOKEN,
};
