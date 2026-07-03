import { createButton, createHomeButton } from "../components/button.js";
import { getProducts } from "../services/products.js";
import { getStores } from "../services/stores.js";
import { addPrice } from "../services/prices.js";

export async function renderRegister() {
    const screen = document.querySelector("#screen");

    const title = document.createElement("h2");
    title.textContent = "価格登録";

    const productSelect = document.createElement("select");

    const storeSelect = document.createElement("select");

    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.placeholder = "価格";

    // const saveButton = document.createElement("button");

    const saveButton = createButton("保存", async () => {
        await addPrice({
            productId: Number(productSelect.value),
            storeId: Number(storeSelect.value), 
            price: Number(priceInput.value),
            date: new Date().toISOString().slice(0, 10)
        });
        alert("保存しました");
        priceInput.value = "";
    });

    const back = createHomeButton();

    screen.replaceChildren(title, productSelect, storeSelect, priceInput, saveButton, back);

    const products = await getProducts();

    for (const product of products) {

        const option = document.createElement("option");

        option.value = product.id;

        option.textContent = product.name;

        productSelect.appendChild(option);

    }

    const stores = await getStores();

    for (const store of stores) {

        const option = document.createElement("option");

        option.value = store.id;

        option.textContent = store.name;

        storeSelect.appendChild(option);

    }
}