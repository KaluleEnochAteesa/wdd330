import { fetchStrategies } from "./dataLoader.mjs";

export async function renderDecisionGuide() {
  const container = document.getElementById("downloads");
  const strategies = await fetchStrategies();

  container.innerHTML = `
    <h2>Interactive Decision Guide</h2>
    <form id="decision-form">
      <label>Is your market fragmented?</label><br/>
      <select name="fragmented">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select><br/><br/>

      <label>Do you control your supply chain?</label><br/>
      <select name="supplyChain">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select><br/><br/>

      <label>Do you have capital to scale aggressively?</label><br/>
      <select name="capital">
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select><br/><br/>

      <button type="submit">Get My Strategy</button>
    </form>
    <div id="recommendation"></div>
  `;

  document.getElementById("decision-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const rec = document.getElementById("recommendation");

    const fragmented = form.get("fragmented");
    const supplyChain = form.get("supplyChain");
    const capital = form.get("capital");

    let match = null;

    if (fragmented === "yes" && capital === "yes") {
      match = strategies.find(s => s.name === "Acquisition Expansion");
    } else if (supplyChain === "no") {
      match = strategies.find(s => s.name === "Vertical Integration");
    } else if (capital === "no") {
      match = strategies.find(s => s.name === "Predatory Pricing");
    }

    rec.innerHTML = match
      ? `
        <h3>Recommended Strategy: ${match.name}</h3>
        <p>${match.description}</p>
      `
      : `<p>No strategy match found. Consider reassessing your business readiness.</p>`;
  });
}
const section = document.getElementById("strategy-list");
if (section) {
  section.classList.add("module-card", "show");
}