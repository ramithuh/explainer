import { installThemeSwitcher } from "../../theme-state.mjs";
import { atom14Atlas } from "./atom14-data.js";

const BACKBONE_ATOMS = new Set(["N", "CA", "C", "O"]);
const grid = document.querySelector("#residueGrid");
const emptyState = document.querySelector("#residueEmpty");
const resultCount = document.querySelector("#resultCount");
const filters = document.querySelector("#categoryFilters");
const search = document.querySelector("#residueSearch");
const themeSwitcher = document.querySelector("#atom14ThemeSwitcher");
const sourceLink = document.querySelector("#atom14SourceLink");

let activeCategory = "all";
let query = "";

function elementForAtom(atom) {
  return atom.charAt(0);
}

function slotIndex(residue, atom) {
  return residue.slots.indexOf(atom);
}

function atomDescription(residue, atom, index) {
  const region = index < 4 ? "shared backbone" : "residue-specific side chain";
  return `slot ${index} · ${atom} · ${region}`;
}

function atomButton(residue, atom, position) {
  const index = slotIndex(residue, atom);
  const button = document.createElement("button");
  button.type = "button";
  button.className = [
    "atom14-atom",
    `is-${elementForAtom(atom).toLowerCase()}`,
    BACKBONE_ATOMS.has(atom) ? "is-backbone" : "is-sidechain",
  ].join(" ");
  button.dataset.slot = String(index);
  button.style.setProperty("--atom-x", `${position[0]}%`);
  button.style.setProperty("--atom-y", `${position[1]}%`);
  button.textContent = atom;
  button.setAttribute(
    "aria-label",
    `${residue.name} ${atom}, Atom14 ${atomDescription(residue, atom, index)}`,
  );
  return button;
}

function bondElement(residue, atomA, atomB, positions) {
  const bond = document.createElement("span");
  bond.className = "atom14-bond";
  bond.dataset.slots = `${slotIndex(residue, atomA)} ${slotIndex(residue, atomB)}`;
  bond.dataset.atomA = atomA;
  bond.dataset.atomB = atomB;
  return bond;
}

const structureLayouts = new WeakMap();
const structureObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const structure = entry.target;
    const positions = structureLayouts.get(structure);
    const width = structure.clientWidth;
    const height = structure.clientHeight;
    structure.querySelectorAll(".atom14-bond").forEach((bond) => {
      const [x1Ratio, y1Ratio] = positions[bond.dataset.atomA];
      const [x2Ratio, y2Ratio] = positions[bond.dataset.atomB];
      const x1 = (x1Ratio / 100) * width;
      const y1 = (y1Ratio / 100) * height;
      const x2 = (x2Ratio / 100) * width;
      const y2 = (y2Ratio / 100) * height;
      bond.style.setProperty("--bond-x", `${x1}px`);
      bond.style.setProperty("--bond-y", `${y1}px`);
      bond.style.setProperty("--bond-length", `${Math.hypot(x2 - x1, y2 - y1)}px`);
      bond.style.setProperty("--bond-angle", `${Math.atan2(y2 - y1, x2 - x1)}rad`);
    });
  });
});

function slotButton(residue, atom, index) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "atom14-slot";
  button.dataset.slot = String(index);

  const indexLabel = document.createElement("span");
  indexLabel.className = "atom14-slot-index";
  indexLabel.textContent = String(index);

  const atomLabel = document.createElement("span");
  atomLabel.className = "atom14-slot-atom";
  atomLabel.textContent = atom || "—";

  button.append(indexLabel, atomLabel);

  if (!atom) {
    button.classList.add("is-padding");
    button.disabled = true;
    button.setAttribute("aria-label", `slot ${index}, padding, masked out`);
  } else {
    button.classList.add(
      `is-${elementForAtom(atom).toLowerCase()}`,
      index < 4 ? "is-backbone" : "is-sidechain",
    );
    button.setAttribute(
      "aria-label",
      `${residue.name} ${atom}, ${atomDescription(residue, atom, index)}`,
    );
  }
  return button;
}

function setHighlight(card, slot, pinned = false) {
  const residue = atom14Atlas.residues.find((item) => item.id === card.dataset.residue);
  const atom = residue.slots[slot];
  card.querySelectorAll("[data-slot]").forEach((element) => {
    element.classList.toggle("is-highlighted", element.dataset.slot === String(slot));
  });
  card.querySelectorAll(".atom14-bond").forEach((bond) => {
    bond.classList.toggle("is-highlighted", bond.dataset.slots.split(" ").includes(String(slot)));
  });
  card.querySelector(".atom14-inspector").textContent = atomDescription(residue, atom, slot);
  if (pinned) card.dataset.pinnedSlot = String(slot);
}

function clearHighlight(card, force = false) {
  if (!force && card.dataset.pinnedSlot !== undefined) return;
  delete card.dataset.pinnedSlot;
  card.querySelectorAll(".is-highlighted").forEach((element) => {
    element.classList.remove("is-highlighted");
  });
  card.querySelector(".atom14-inspector").textContent =
    "Hover, focus, or tap an atom to trace its slot.";
}

function wireCardInteractions(card) {
  card.querySelectorAll("button[data-slot]:not(:disabled)").forEach((button) => {
    const slot = Number(button.dataset.slot);
    button.addEventListener("pointerenter", () => setHighlight(card, slot));
    button.addEventListener("focus", () => setHighlight(card, slot));
    button.addEventListener("pointerleave", () => clearHighlight(card));
    button.addEventListener("blur", () => clearHighlight(card));
    button.addEventListener("click", () => {
      if (card.dataset.pinnedSlot === String(slot)) {
        clearHighlight(card, true);
        return;
      }
      clearHighlight(card, true);
      setHighlight(card, slot, true);
    });
  });
}

function residueCard(residue) {
  const category = atom14Atlas.categories.find((item) => item.id === residue.category);
  const occupied = residue.slots.filter(Boolean).length;
  const positions = { ...atom14Atlas.common_layout, ...residue.layout };
  const article = document.createElement("article");
  article.className = `atom14-card category-${residue.category}`;
  article.dataset.residue = residue.id;
  article.id = `residue-${residue.id.toLowerCase()}`;

  const heading = document.createElement("header");
  heading.className = "atom14-card-heading";
  heading.innerHTML = `
    <div>
      <p class="atom14-category">${category.label}</p>
      <h3>${residue.name}</h3>
      <p class="atom14-symbols">
        <span>${residue.id}</span>
        <strong>${residue.one_letter}</strong>
      </p>
    </div>
    <p class="atom14-occupancy"><strong>${occupied}</strong><span>/ 14 slots</span></p>
  `;

  const summary = document.createElement("p");
  summary.className = "atom14-card-summary";
  summary.textContent = residue.summary;

  const structure = document.createElement("div");
  structure.className = "atom14-structure";
  structure.setAttribute("aria-label", `${residue.name} heavy-atom connectivity`);
  residue.bonds.forEach(([atomA, atomB]) => {
    structure.appendChild(bondElement(residue, atomA, atomB, positions));
  });
  residue.slots.filter(Boolean).forEach((atom) => {
    structure.appendChild(atomButton(residue, atom, positions[atom]));
  });
  structureLayouts.set(structure, positions);
  structureObserver.observe(structure);

  const inspector = document.createElement("p");
  inspector.className = "atom14-inspector";
  inspector.setAttribute("aria-live", "polite");
  inspector.textContent = "Hover, focus, or tap an atom to trace its slot.";

  const railLabel = document.createElement("p");
  railLabel.className = "atom14-rail-label";
  railLabel.innerHTML = "<span>Atom14 slots</span><span>occupied / masked padding</span>";

  const rail = document.createElement("div");
  rail.className = "atom14-rail";
  rail.setAttribute("aria-label", `${residue.name} Atom14 slots`);
  residue.slots.forEach((atom, index) => {
    rail.appendChild(slotButton(residue, atom, index));
  });

  article.append(heading, summary, structure, inspector, railLabel, rail);
  wireCardInteractions(article);
  return article;
}

function searchableText(residue) {
  return [
    residue.id,
    residue.one_letter,
    residue.name,
    residue.summary,
    ...residue.slots.filter(Boolean),
  ]
    .join(" ")
    .toLowerCase();
}

function renderResidues() {
  const visible = atom14Atlas.residues.filter((residue) => {
    const categoryMatch = activeCategory === "all" || residue.category === activeCategory;
    const queryMatch = !query || searchableText(residue).includes(query);
    return categoryMatch && queryMatch;
  });
  grid.replaceChildren(...visible.map(residueCard));
  emptyState.hidden = visible.length > 0;
  resultCount.textContent = `${visible.length} of ${atom14Atlas.residues.length} residues`;
}

function filterButton(id, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "atom14-filter";
  button.dataset.category = id;
  button.textContent = label;
  button.classList.toggle("is-active", id === activeCategory);
  button.setAttribute("aria-pressed", String(id === activeCategory));
  button.addEventListener("click", () => {
    activeCategory = id;
    filters.querySelectorAll(".atom14-filter").forEach((item) => {
      const isActive = item.dataset.category === id;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderResidues();
  });
  return button;
}

filters.append(
  filterButton("all", "All residues"),
  ...atom14Atlas.categories.map((category) => filterButton(category.id, category.label)),
);
search.addEventListener("input", () => {
  query = search.value.trim().toLowerCase();
  renderResidues();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== search) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape") {
    search.value = "";
    query = "";
    activeCategory = "all";
    filters.querySelectorAll(".atom14-filter").forEach((item) => {
      const isActive = item.dataset.category === "all";
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderResidues();
    search.blur();
  }
});

sourceLink.href = atom14Atlas.source.url;
installThemeSwitcher(themeSwitcher);
renderResidues();
