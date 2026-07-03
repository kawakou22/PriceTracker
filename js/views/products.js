import { createPage } from "../components/page.js";
import {
    createButton,
    createHomeButton
} from "../components/button.js";
import { createTextField } from "../components/textField.js";
import { createListItem } from "../components/listItem.js";

import {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
} from "../services/products.js";

export async function renderProducts() {
    const screen = document.querySelector("#screen");
    const page = createPage("商品管理");

    const list = await createProductList();
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

            await addProduct(name);
            await renderProducts();
        });

        wrapper.append(input, button);

        return wrapper;
    }
}

async function createProductList() {
    const list = document.createElement("div");
    const products = await getProducts();

    for (const product of products) {
        list.appendChild(createProductItem(product));
    }

    return list;
}

function createProductItem(product) {
    return createListItem(
        product,
        () => editProduct(product),
        () => removeProduct(product)
    );
}

async function editProduct(product) {
    const name = prompt("商品名", product.name);

    if (name === null) {
        return;
    }

    const value = name.trim();

    if (value === "") {
        return;
    }

    product.name = value;

    await updateProduct(product);

    await renderProducts();
}

async function removeProduct(product) {
    if (!confirm(`「${product.name}」を削除しますか？`)) {
        return;
    }

    await deleteProduct(product.id);

    await renderProducts();
}