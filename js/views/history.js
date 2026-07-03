import { dbGetAll } from "../database.js";

import { navigate } from "../router.js";

import { createButton, createHomeButton } from "../components/button.js";
import { createListItem } from "../components/listItem.js";
import { createPage } from "../components/page.js";

export async function renderHistory() {
    const screen = document.querySelector("#screen");

    const page = createPage("価格履歴");

    const products = await dbGetAll("products");
    const stores = await dbGetAll("stores");
    const prices = await dbGetAll("prices");

    prices.sort((a, b) => b.date.localeCompare(a.date));

    for (const item of prices) {

        const product = products.find(x => x.id === item.productId);
        const store = stores.find(x => x.id === item.storeId);

        const row = createListItem(
            `${item.price}円`,
            `${product?.name ?? ""} / ${store?.name ?? ""} / ${item.date}`
        );

        page.content.append(row.item);
    }

    if (prices.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "履歴はありません。";
        page.content.append(empty);
    }

    page.content.append(createHomeButton());

    screen.replaceChildren(page.page);
}