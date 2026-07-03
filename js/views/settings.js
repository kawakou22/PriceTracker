import { createHomeButton } from "../components/button.js";
import { createPage } from "../components/page.js";

export function renderSettings() {
    const screen = document.querySelector("#screen");

    const page = createPage("設定");

    const message = document.createElement("p");
    message.textContent = "設定項目は今後追加予定です。";

    page.content.append(
        message,
        createHomeButton()
    );

    screen.replaceChildren(page.page);
}