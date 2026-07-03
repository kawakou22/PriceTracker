import { navigate } from "../router.js";
import { createButton } from "../components/button.js";

export function renderHistory() {

    const screen = document.querySelector("#screen");

    const title = document.createElement("h2");
    title.textContent = "価格履歴";

    const back = createButton("← ホームへ戻る", () => navigate("home"));

    screen.replaceChildren(title, back);

}