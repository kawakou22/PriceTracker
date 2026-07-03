import { dbGetAll } from "../database.js";
import { navigate } from "../router.js";

import { createButton, createHomeButton } from "../components/button.js";
import { createListItem } from "../components/listItem.js";
import { createPage } from "../components/page.js";

export async function renderProducts() {
    const screen = document.querySelector("#screen");

    const page = createPage("商品管理");

    page.content.append(
        createButton("＋ 商品を追加", () => {
            navigate("productEdit");
        })
    );

    const products = await dbGetAll("products");

    if (products.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "商品は登録されていません。";
        page.content.append(empty);
    }

    for (const product of products) {
        const row = createListItem(
            product.name,
            product.maker ?? ""
        );

        const editButton = createButton("編集", () => {
            navigate("productEdit", product);
        });

        row.actions.append(editButton);

        page.content.append(row.item);
    }

    page.content.append(createHomeButton());

    screen.replaceChildren(page.page);
}