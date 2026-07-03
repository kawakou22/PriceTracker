import { dbAdd, dbDelete, dbGetAll, dbPut } from "../database.js";

export async function getStores() {

    return await dbGetAll("stores");

}

export async function addStore(name) {

    return await dbAdd("stores", {

        name,

        memo: ""

    });

}

export async function deleteStore(id) {

    await dbDelete("stores", id);

}

export async function updateStore(store) {

    await dbPut("stores", store);

}