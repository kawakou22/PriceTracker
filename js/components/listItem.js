export function createListItem(title, subtitle = "") {
  const item = document.createElement("div");
  item.className = "list-item";

  const body = document.createElement("div");
  body.className = "list-item-body";

  const titleElement = document.createElement("div");
  titleElement.className = "list-item-title";
  titleElement.textContent = title;

  const subtitleElement = document.createElement("div");
  subtitleElement.className = "list-item-subtitle";
  subtitleElement.textContent = subtitle;

  body.append(titleElement, subtitleElement);

  const actions = document.createElement("div");
  actions.className = "list-item-actions";

  item.append(body, actions);

  return {
      item,
      actions,
      title: titleElement,
      subtitle: subtitleElement
  };
}