import { navigate } from "../router.js";
import { createButton } from "../components/button.js";

export function renderSettings() {

    const screen = document.querySelector("#screen");

    const title = document.createElement("h2");
    title.textContent = "設定";

    const back = createButton("← ホームへ戻る", () => navigate("home"));

    screen.replaceChildren(title, back);

}