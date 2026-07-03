const DB_NAME = "PriceTracker";
const DB_VERSION = 1;

let db;

export async function openDatabase() {
    if (db) {
        return;
    }

    db = await new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => reject(request.error);

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onupgradeneeded = event => {
            const database = event.target.result;

            createStore(database, "products");
            createStore(database, "stores");
            createStore(database, "prices");
        };
    });
}

function createStore(database, name) {
    if (database.objectStoreNames.contains(name)) {
        return;
    }

    database.createObjectStore(name, {
        keyPath: "id",
        autoIncrement: true
    });
}

function request(storeName, mode, callback) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, mode);
        const store = transaction.objectStore(storeName);

        const req = callback(store);

        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

export function dbGetAll(storeName) {
    return request(storeName, "readonly", store => store.getAll());
}

export function dbGet(storeName, id) {
    return request(storeName, "readonly", store => store.get(id));
}

export function dbAdd(storeName, data) {
    return request(storeName, "readwrite", store => store.add(data));
}

export function dbPut(storeName, data) {
    return request(storeName, "readwrite", store => store.put(data));
}

export function dbDelete(storeName, id) {
    return request(storeName, "readwrite", store => store.delete(id));
}