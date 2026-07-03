import {
  dbAdd,
  dbGet,
  dbPut
} from "../database.js";

import { navigate } from "../router.js";

import { createButton, createHomeButton } from "../components/button.js";
import { createPage } from "../components/page.js";
import { createTextField } from "../components/textField.js";

export async function renderStoreEdit({ id } = {}) {
  const screen = document.querySelector("#screen");

  const page = createPage(id ? "店舗編集" : "店舗追加");

  let store = {
      name: "",
      memo: ""
  };

  if (id) {
      store = await dbGet("stores", id);
  }

  const name = createTextField({
      placeholder: "店舗名",
      value: store.name
  });

  const memo = createTextField({
      placeholder: "メモ",
      value: store.memo
  });

  page.content.append(
      name,
      memo
  );

  page.content.append(
      createButton("保存", async () => {
          const data = {
              name: name.value.trim(),
              memo: memo.value.trim()
          };

          if (id) {
              data.id = id;
              await dbPut("stores", data);
          } else {
              await dbAdd("stores", data);
          }

          navigate("stores");
      })
  );

  page.content.append(createHomeButton());

  screen.replaceChildren(page.page);
}