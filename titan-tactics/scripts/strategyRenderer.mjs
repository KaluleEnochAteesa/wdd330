import { fetchStrategies } from "./dataLoader.mjs";

export async function renderStrategyArchive() {
  const container = document.getElementById("strategy-list");
  const strategies = await fetchStrategies();

  container.innerHTML = "<h2>Rockefeller Strategy Archive</h2>";

  strategies.forEach((s) => {
    const block = document.createElement("div");
    block.classList.add("strategy-card");

    block.innerHTML = `
      <h3>${s.name}</h3>
      <p><strong>Category:</strong> ${s.category}</p>
      <p>${s.description}</p>
      <p><strong>Used In:</strong> ${s.use_case}</p>
      <p><em>Tags:</em> ${s.tags.join(", ")}</p>
    `;

    container.appendChild(block);
  });
}
