export function createSelect(options) {
  const select = document.createElement("select");

  for (const option of options) {
      const element = document.createElement("option");

      element.value = option.id;
      element.textContent = option.name;

      select.appendChild(element);
  }
  return select;
}