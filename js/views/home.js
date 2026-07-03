import { navigate } from "../router.js";

import { createTitle } from "../components/title.js";

import { createButton } from "../components/button.js";

export function renderHome() {

    const screen = document.querySelector("#screen");

    screen.replaceChildren(

        createTitle(),

        createButton("➕ 価格を登録", () => navigate("register")),

        createButton("📋 価格履歴", () => navigate("history")),

        createButton("📦 商品管理", () => navigate("products")),

        createButton("🏪 店舗管理", () => navigate("stores")),

        createButton("⚙ 設定", () => navigate("settings"))

    );

}