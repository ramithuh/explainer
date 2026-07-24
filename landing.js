import { manifestIndex } from "./renderer/architecture/manifest-index.js";
import { installThemeSwitcher } from "./theme-state.mjs";

const architectureList = document.querySelector("#architectureList");
const emptyState = document.querySelector("#directoryEmpty");
const standardComponentForm = document.querySelector("#standardComponentForm");
const standardComponentSelect = document.querySelector("#standardComponentSelect");
const standardComponentOpen = document.querySelector("#standardComponentOpen");
const standardComponentEmpty = document.querySelector("#standardComponentEmpty");
const themeSwitcher = document.querySelector("#directoryThemeSwitcher");

function architectureItem(entry) {
  const item = document.createElement("li");
  item.className = "architecture-list-item";

  const link = document.createElement("a");
  link.className = "architecture-list-link";
  link.href = `./renderer/architecture/?arch=${encodeURIComponent(entry.id)}`;
  link.setAttribute("aria-label", `Open ${entry.name}`);

  const name = document.createElement("span");
  name.className = "architecture-list-name";
  name.textContent = entry.name;

  const action = document.createElement("span");
  action.className = "architecture-list-action";
  action.textContent = "Open →";

  link.append(name, action);
  item.appendChild(link);
  return item;
}

const architectures = manifestIndex.filter((entry) => entry.role === "architecture");
architectureList.replaceChildren(...architectures.map(architectureItem));
emptyState.hidden = architectures.length > 0;

const standardComponents = manifestIndex.filter((entry) => entry.role === "standard_block");
standardComponents.forEach((entry) => {
  const option = document.createElement("option");
  option.value = entry.id;
  option.textContent = entry.name;
  standardComponentSelect.appendChild(option);
});
standardComponentForm.hidden = standardComponents.length === 0;
standardComponentEmpty.hidden = standardComponents.length > 0;
standardComponentSelect.addEventListener("change", () => {
  standardComponentOpen.disabled = standardComponentSelect.value === "";
});
standardComponentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!standardComponentSelect.value) return;
  window.location.href =
    `./renderer/architecture/?arch=${encodeURIComponent(standardComponentSelect.value)}`;
});

installThemeSwitcher(themeSwitcher);
