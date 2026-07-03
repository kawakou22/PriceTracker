import { navigate } from "../router.js";

export function createButton(text, onClick) {
    const button = document.createElement("button");

    button.className = "button";
    button.textContent = text;
    button.addEventListener("click", onClick);

    return button;
}

export function createHomeButton() {
    return createButton("← ホームへ戻る", () => {
        navigate("home");
    });
}