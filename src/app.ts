import { envs } from "./config/envs";
import { Server } from "./presentation/server";



(async() => {
    main();
}  )();

function main() {
const server = new Server(
    { port: envs.PORT,
        public_dir: envs.PUBLIC_DIR
    }
    );
server.start();
}