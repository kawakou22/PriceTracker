import { dbAdd, dbDelete, dbGetAll, dbPut } from "../database.js";

export async function getProducts() {
    return await dbGetAll("products");
}

export async function addProduct(name) {
    return await dbAdd("products", {
        name,
        maker: "",
        category: "",
        size: "",
        jan: "",
        memo: ""
    });
}

export async function deleteProduct(id) {
    await dbDelete("products", id);
}

export async function updateProduct(product) {
    await dbPut("products", product);
}