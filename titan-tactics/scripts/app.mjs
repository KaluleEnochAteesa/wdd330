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
        }, index * 600);
      }
    });
  }, 200);
});
import { renderDiscussionHub } from "./discussionHub.mjs";
renderDiscussionHub(); // Add this after the others
// Back to Top button behavior
window.addEventListener("scroll", () => {
  const scrollBtn = document.getElementById("scroll-top");
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

document.getElementById("scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

