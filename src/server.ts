import { app } from "./app";
import { env } from "./config/env.config";

const start = () => {
    return app.listen(env.PORT, () => {
        console.log(`Server running on PORT ${env.PORT}`);
    });
}

start();