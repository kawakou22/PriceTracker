import { createPage } from "../components/page.js";
import {
    createButton,
    createHomeButton
} from "../components/button.js";
import { createTextField } from "../components/textField.js";
import { createListItem } from "../components/listItem.js";

import {
    getStores,
    addStore,
    updateStore,
    deleteStore
} from "../services/stores.js";

export async function renderStores() {
    const screen = document.querySelector("#screen");
    const page = createPage("店舗管理");

    const list = await createStoreList();
    const form = createAddForm();

    page.content.append(list, form, createHomeButton());

    screen.replaceChildren(page.page);

    function createAddForm() {
        const wrapper = document.createElement("div");

        const input = createTextField("商品名");

        const button = createButton("追加", async () => {
            const name = input.value.trim();

            if (name === "") {
                return;
            }

            await addStore(name);
            await renderStores();
        });

        wrapper.append(input, button);

        return wrapper;
    }
}

async function createStoreList() {
    const list = document.createElement("div");
    const Stores = await getStores();

    for (const Store of Stores) {
        list.appendChild(createStoreItem(Store));
    }

    return list;
}

function createStoreItem(Store) {
    return createListItem(
        Store,
        () => editStore(Store),
        () => removeStore(Store)
    );
}

async function editStore(Store) {
    const name = prompt("商品名", Store.name);

    if (name === null) {
        return;
    }

    const value = name.trim();

    if (value === "") {
        return;
    }

    Store.name = value;

    await updateStore(Store);

    await renderStores();
}

async function removeStore(Store) {
    if (!confirm(`「${Store.name}」を削除しますか？`)) {
        return;
    }

    await deleteStore(Store.id);

    await renderStores();
}