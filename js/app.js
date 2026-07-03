import { openDatabase } from "./database.js";
import { navigate } from "./router.js";

async function start() {
    await openDatabase();
    await navigate("home");

    if ("serviceWorker" in navigator) {
        await navigator.serviceWorker.register("./sw.js");
    }
}

start();