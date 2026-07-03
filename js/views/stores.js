import { dbGetAll } from "../database.js";
import { navigate } from "../router.js";

import { createButton, createHomeButton } from "../components/button.js";
import { createListItem } from "../components/listItem.js";
import { createPage } from "../components/page.js";

export async function renderStores() {
    const screen = document.querySelector("#screen");

    const page = createPage("店舗管理");

    page.content.append(
        createButton("＋ 店舗を追加", () => {
            navigate("storeEdit");
        })
    );

    const stores = await dbGetAll("stores");

    if (stores.length === 0) {
        const empty = document.createElement("p");
        empty.textContent = "店舗は登録されていません。";
        page.content.append(empty);
    }

    for (const store of stores) {
        const row = createListItem(
            store.name,
            store.memo ?? ""
        );

        row.actions.append(
            createButton("編集", () => {
                navigate("storeEdit", {
                    id: store.id
                });
            })
        );

        page.content.append(row.item);
    }

    page.content.append(createHomeButton());

    screen.replaceChildren(page.page);
}