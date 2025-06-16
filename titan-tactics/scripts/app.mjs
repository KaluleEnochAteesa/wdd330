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
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});

// Check stored theme preference on load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.checked = true;
}
document.getElementById("generate-pdf").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const content = document.getElementById("pdf-notes").value.trim();

  if (!content) {
    alert("Add some notes to generate your brief.");
    return;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("Titan Tactics: Rockefeller Strategy Brief", 20, 20);

  doc.setFont("times", "normal");
  doc.setFontSize(12);
  doc.text(content, 20, 40, { maxWidth: 170 });

  doc.save("titan-strategy-brief.pdf");
});

