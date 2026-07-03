// import { createButton } from "./button.js";

// export function createListItem(item, onEdit, onDelete) {
//     const row = document.createElement("div");
//     row.className = "list-item";

//     const info = document.createElement("div");

//     const title = document.createElement("div");
//     title.textContent = item.name;

//     const sub = document.createElement("div");
//     sub.className = "subtitle";
//     sub.textContent = `${item.maker} ${item.size}`;

//     info.append(title, sub);

//     const buttons = document.createElement("div");
//     buttons.append(
//         createButton("✏", onEdit),
//         createButton("🗑", onDelete)
//     );

//     row.append(info, buttons);

//     return row;
// }

export function createListItem() {
  const item = document.createElement("div");
  item.className = "list-item";

  const body = document.createElement("div");
  body.className = "list-item-body";

  const actions = document.createElement("div");
  actions.className = "list-item-actions";

  item.append(body, actions);

  return {
      item,
      body,
      actions
  };
}