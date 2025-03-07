export const argsToAttrs = (args) =>
  Object.entries(args)
    .map(([attr, val]) => `${attr}="${val}"`)
    .join(" ");

export const render = (html) => {
  const element = document.createElement("div");

  element.innerHTML = html?.trim();
  return element.firstChild;
};

export const renderMany = (children) => {
  const container = document.createElement("div");

  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.alignItems = "center";
  container.style.gap = "1rem";

  container.replaceChildren(...children.map(render));

  return container;
};
