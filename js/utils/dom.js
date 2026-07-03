export function el(tag, options = {}) {

  const node = document.createElement(tag);

  if (options.text !== undefined) {
      node.textContent = options.text;
  }

  if (options.className) {
      node.className = options.className;
  }

  if (options.type) {
      node.type = options.type;
  }

  if (options.placeholder) {
      node.placeholder = options.placeholder;
  }

  if (options.value !== undefined) {
      node.value = options.value;
  }

  if (options.onClick) {
      node.addEventListener("click", options.onClick);
  }

  return node;

}