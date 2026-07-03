import { createPage } from "../components/page.js";
import { createButton } from "../components/button.js";
import { navigate } from "../router.js";

export function renderHome() {
    const screen = document.querySelector("#screen");

    const page = createPage("PriceTracker");

    page.content.append(
        createButton("💰 価格を登録", () => navigate("priceEdit")),
        createButton("📈 価格履歴", () => navigate("history")),
        createButton("📦 商品管理", () => navigate("products")),
        createButton("🏪 店舗管理", () => navigate("stores")),
        createButton("⚙ 設定", () => navigate("settings"))
    );

    screen.replaceChildren(page.page);
}