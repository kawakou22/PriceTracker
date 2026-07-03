import { renderHome } from "./views/home.js";
import { renderProducts } from "./views/products.js";
import { renderStores } from "./views/stores.js";
import { renderRegister } from "./views/register.js";
import { renderHistory } from "./views/history.js";
import { renderSettings } from "./views/settings.js";

export async function navigate(page) {

    switch (page) {

        case "home":
            renderHome();
            break;

        case "products":
            await renderProducts();
            break;

        case "stores":
            renderStores();
            break;

        case "register":
            await renderRegister();
            break;

        case "history":
            renderHistory();
            break;

        case "settings":
            renderSettings();
            break;

        default:
            renderHome();

    }

}