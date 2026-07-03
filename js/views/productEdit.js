import {
  dbAdd,
  dbGet,
  dbPut
} from "../database.js";

import { navigate } from "../router.js";

import { createButton, createHomeButton } from "../components/button.js";
import { createPage } from "../components/page.js";
import { createTextField } from "../components/textField.js";

export async function renderProductEdit({ id } = {}) {
  const screen = document.querySelector("#screen");

  const page = createPage(id ? "商品編集" : "商品追加");

  let product = {
      name: "",
      maker: "",
      category: "",
      size: "",
      jan: "",
      memo: ""
  };

  if (id) {
      product = await dbGet("products", id);
  }

  const name = createTextField({
      placeholder: "商品名",
      value: product.name
  });

  const maker = createTextField({
      placeholder: "メーカー",
      value: product.maker
  });

  const category = createTextField({
      placeholder: "カテゴリ",
      value: product.category
  });

  const size = createTextField({
      placeholder: "内容量",
      value: product.size
  });

  const jan = createTextField({
      placeholder: "JANコード",
      value: product.jan
  });

  const memo = createTextField({
      placeholder: "メモ",
      value: product.memo
  });

  page.content.append(
      name,
      maker,
      category,
      size,
      jan,
      memo
  );

  page.content.append(
      createButton("保存", async () => {

          const data = {
              name: name.value.trim(),
              maker: maker.value.trim(),
              category: category.value.trim(),
              size: size.value.trim(),
              jan: jan.value.trim(),
              memo: memo.value.trim()
          };

          if (id) {
              data.id = id;
              await dbPut("products", data);
          } else {
              await dbAdd("products", data);
          }

          navigate("products");
      })
  );

  page.content.append(createHomeButton());

  screen.replaceChildren(page.page);
}