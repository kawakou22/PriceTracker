import { dbAdd, dbGetAll } from "../database.js";

export async function addPrice(data) {

    return await dbAdd("prices", data);

}

export async function getPrices() {

    return await dbGetAll("prices");

}