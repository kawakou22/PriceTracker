const DB_NAME = "PriceTracker";
const DB_VERSION = 1;

let db = null;

export function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            reject(request.error);
        };

        request.onsuccess = () => {
            db = request.result;
            console.log("Database Open");
            resolve();
        };

        request.onupgradeneeded = (event) => {
            db = event.target.result;
            createTables();
        };
    });
}

function createTables() {
    if (!db.objectStoreNames.contains("products")) {
        db.createObjectStore("products", {
            keyPath: "id",
            autoIncrement: true
        });
    }

    if (!db.objectStoreNames.contains("stores")) {
        db.createObjectStore("stores", {
            keyPath: "id",
            autoIncrement: true
        });
    }

    if (!db.objectStoreNames.contains("prices")) {
        db.createObjectStore("prices", {
            keyPath: "id",
            autoIncrement: true
        });
    }
}

export function dbAdd(storeName, data) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const request = store.add(data);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

export function dbGetAll(storeName) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readonly");
        const store = tx.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function dbGet(storeName, id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.get(id);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

export function dbPut(storeName, data) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const request = store.put(data);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}

export function dbDelete(storeName, id) {
    return new Promise((resolve, reject) => {
        const tx = db.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const request = store.delete(id);

        request.onsuccess = () => resolve();
        request.onerror = () => reject(request.error);
    });
}