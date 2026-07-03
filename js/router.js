import { renderHome } from "./views/home.js";
import { renderProducts } from "./views/products.js";
import { renderProductEdit } from "./views/productEdit.js";
import { renderStores } from "./views/stores.js";
import { renderStoreEdit } from "./views/storeEdit.js";
import { renderPriceEdit } from "./views/priceEdit.js";
import { renderHistory } from "./views/history.js";
import { renderSettings } from "./views/settings.js";

const routes = {
    home: renderHome,
    products: renderProducts,
    productEdit: renderProductEdit,
    stores: renderStores,
    storeEdit: renderStoreEdit,
    priceEdit: renderPriceEdit,
    history: renderHistory,
    settings: renderSettings
};

let params = {};

export async function navigate(route, nextParams = {}) {
    const render = routes[route];

    if (!render) {
        throw new Error(`Route "${route}" not found.`);
    }

    params = nextParams;

    await render(nextParams);
}

export function getParams() {
    return params;
}