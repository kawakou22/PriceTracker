export function createTextField(options = {}) {
    const input = document.createElement("input");

    input.className = "text-field";
    input.type = options.type ?? "text";
    input.placeholder = options.placeholder ?? "";
    input.value = options.value ?? "";

    return input;
}