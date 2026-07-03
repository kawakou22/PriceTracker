import {
  dbAdd,
  dbGetAll
} from "../database.js";

import { navigate } from "../router.js";

import { createButton, createHomeButton } from "../components/button.js";
import { createPage } from "../components/page.js";

export async function renderPriceEdit() {
  const screen = document.querySelector("#screen");

  const page = createPage("価格登録");

  const products = await dbGetAll("products");
  const stores = await dbGetAll("stores");

  const product = document.createElement("select");
  const store = document.createElement("select");
  const price = document.createElement("input");
  const date = document.createElement("input");
  const memo = document.createElement("input");

  product.className = "text-field";
  store.className = "text-field";
  price.className = "text-field";
  date.className = "text-field";
  memo.className = "text-field";

  price.type = "number";
  price.placeholder = "価格";

  date.type = "date";
  date.valueAsDate = new Date();

  memo.placeholder = "メモ";

  for (const item of products) {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name;
      product.append(option);
  }

  for (const item of stores) {
      const option = document.createElement("option");
      option.value = item.id;
      option.textContent = item.name;
      store.append(option);
  }

  page.content.append(
      product,
      store,
      price,
      date,
      memo
  );

  page.content.append(
      createButton("保存", async () => {

          await dbAdd("prices", {
              productId: Number(product.value),
              storeId: Number(store.value),
              price: Number(price.value),
              date: date.value,
              memo: memo.value.trim()
          });

          navigate("home");
      })
  );

  page.content.append(createHomeButton());

  screen.replaceChildren(page.page);
}