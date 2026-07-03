export function createPage(title) {
  const page = document.createElement("div");
  page.className = "page";

  const header = document.createElement("header");
  header.className = "page-header";

  const heading = document.createElement("h1");
  heading.className = "page-title";
  heading.textContent = title;

  const content = document.createElement("main");
  content.className = "page-content";

  header.appendChild(heading);

  page.append(
      header,
      content
  );

  return {
      page,
      content
  };
}