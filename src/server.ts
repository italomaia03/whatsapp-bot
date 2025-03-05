import { app } from "./app";
import { env } from "./whatsapp-api/config/env.config";

const start = () => {
    return app.listen(env.PORT, () => {
        console.log(`Server running on PORT ${env.PORT}`);
    });
}

start();