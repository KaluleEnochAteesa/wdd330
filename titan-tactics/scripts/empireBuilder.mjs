import { fetchStrategies } from "./dataLoader.mjs";

export async function renderEmpireBuilder() {
  const container = document.getElementById("analysis-tool");
  const strategies = await fetchStrategies();

  container.innerHTML = `
    <h2>Business Empire Builder</h2>
    <label for="strategy-select">Select a Rockefeller Tactic:</label>
    <select id="strategy-select">
      <option value="">--Choose a Strategy--</option>
      ${strategies.map(s => `<option value="${s.id}">${s.name}</option>`).join("")}
    </select>
    <div id="strategy-steps"></div>
  `;

  document.getElementById("strategy-select").addEventListener("change", (e) => {
    const selected = strategies.find(s => s.id == e.target.value);
    const stepsDiv = document.getElementById("strategy-steps");
    if (!selected) return (stepsDiv.innerHTML = "");

    stepsDiv.innerHTML = `
      <h3>Execution Guide for "${selected.name}"</h3>
      <ol>${selected.executionSteps.map(step => `<li>${step}</li>`).join("")}</ol>
    `;
  });
}
const section = document.getElementById("strategy-list");
if (section) {
  section.classList.add("module-card", "show");
}
