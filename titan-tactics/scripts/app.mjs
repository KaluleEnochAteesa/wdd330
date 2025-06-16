import { renderStrategyArchive } from "./strategyRenderer.mjs";
import { renderEmpireBuilder } from "./empireBuilder.mjs";
import { renderCaseStudyHub } from "./caseStudies.mjs";
import { renderDecisionGuide } from "./decisionLogic.mjs"; // This one’s working ✅

document.addEventListener("DOMContentLoaded", () => {
  renderStrategyArchive();
  renderEmpireBuilder();
  renderCaseStudyHub();
  renderDecisionGuide(); // Already visible on your page
});
/**
 * Update rendered sections with styling classes after rendering.
 * Assumes each module renders into a section with a known ID.
 */
const sectionIds = [
  "strategy-list",
  "empire-builder",
  "case-study-hub",
  "decision-guide"
];

sectionIds.forEach(id => {
  const section = document.getElementById(id);
  if (section) {
    section.classList.add("module-card", "show");
  }
});