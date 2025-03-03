type ENV_VARIABLES = {
    PORT?: string,
    DATABASE_URL?: string,
    DATABASE_USER?: string,
    DATABASE_PASSWORD?: string,
    API_WHATSAPP_TOKEN?: string,
}

export const env: ENV_VARIABLES = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  API_WHATSAPP_TOKEN: process.env.API_WHATSAPP_TOKEN,
};
