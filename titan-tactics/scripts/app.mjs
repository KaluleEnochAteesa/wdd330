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
