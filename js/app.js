import { openDatabase } from "./database.js";
import { navigate } from "./router.js";

async function start() {

    await openDatabase();

    await navigate("home");

}

start();
