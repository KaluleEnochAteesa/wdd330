import { renderStrategyArchive } from "./strategyRenderer.mjs";
import { renderEmpireBuilder } from "./empireBuilder.mjs";
import { renderCaseStudyHub } from "./caseStudies.mjs";
import { renderDecisionGuide } from "./decisionLogic.mjs"; // This one’s working ✅

document.addEventListener("DOMContentLoaded", () => {
  renderStrategyArchive();
  renderEmpireBuilder();
  renderCaseStudyHub();
  renderDecisionGuide();

  setTimeout(() => {
    const sectionIds = [
      "strategy-list",
      "analysis-tool",
      "discussion-hub",
      "downloads"
    ];

    sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);
      if (section) {
        section.classList.add("module-card");
        setTimeout(() => {
          section.classList.add("show");
        }, index * 150);
      }
    });
  }, 200);
});

